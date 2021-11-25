import React, { useEffect, useLayoutEffect, useState } from 'react'
import ContainerMap from "../component/Map.js"
import Container from '../component/Contanier.js';
import styled from "styled-components"

import { useLocation } from "react-router-dom"
import Menubar from '../component/Menubar.js';


//버튼 차례데로 현재 로케, 필터링 구, 목록
import FilterBtn from "../component/D_filter.js"
import ListBtn from "../component/B_list.js"

//local data
import data from "../util/loca"
import { Button, Icon } from 'semantic-ui-react'
import { resolvePlugin } from '@babel/core';

const Menu_wrapper = styled.div`
    width : 100%;
    height : 8vh;
    /* margin-bottom: 1.4vh; */
    /* border : 1px solid red; */
    /* display: grid;
    grid-template-columns: 0.3fr 0.05fr 0.5fr 1fr 0.7fr; */
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-family: 'NanumBarunGothic';

    @media ${props => props.theme.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
      /* display: grid;
      grid-template-columns: 0.3fr 0.05fr 0.5fr 1fr 0.7fr; */
      font-family: 'NanumBarunGothic';
      text-align: center;
    }
`

const Div_area = styled.div`
    margin: auto;
    height : 100%;
    width : 100%;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'NanumBarunGothic';
`

let map;
let prevGu;
let { kakao } = window;
var infowindow = new kakao.maps.InfoWindow({
    //content: 
    removable: true,
    zIndex: 5,
});
let trashMarker_list;
let currentMarker;

function ShowPage() {

    const getLocation = useLocation()

    let [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    });

    const [gu, setGu] = useState("")
    console.log("바뀐구", gu)

    const [all, setAll] = useState("")
    console.log("all", all);

    let lat, lon;
    let geo = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            resolve({ lat, lon });
        }, (err) => { console.log(err) }, { maximumAge: 100000, timeout: 5000, enableHighAccuracy: true })
    })


    useEffect(() => {
        console.log("deps[] 렌더링");
        
        // 지도를 표시할 div 
        let mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(location.latitude, location.longitude), // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };
        map = new kakao.maps.Map(mapContainer, mapOption);

        
        geo.then((pos) => {
            setLocation({ latitude: pos.lat, longitude: pos.lon });
            console.log('navigator에서 현재위치 받아오기 : ', pos.lat, pos.lon);

            //현재 위치 마커 표시
            const current = new kakao.maps.LatLng(pos.lat, pos.lon);
            currentMarker = new kakao.maps.Marker({
                map: map,
                title: '현재 위치',
                clickable: true,
                position: current
            })


            // 마커 클러스터러를 생성합니다 
            var clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                minLevel: 6 // 클러스터 할 최소 지도 레벨 
            });


            let trashIcon = new kakao.maps.MarkerImage('img/markerImage/trashMarker.png', new kakao.maps.Size(50, 50), {
                shape: 'poly',
                coords: '25,45,12,24,12,16,18,8,32,8,38,16,38,24',
            })
            trashMarker_list = data.map((i) => {
                //console.log(i.위도)
                return new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(i.위도, i.경도),
                    clickable: true,
                    title: `${i.자치구명} ${i.도로명} ${i.설치위치}`,
                    image: trashIcon
                })
            })
            clusterer.addMarkers(trashMarker_list);

            let trashMarker_event_list = trashMarker_list.map((marker) => {
                kakao.maps.event.addListener(marker, 'click', () => {
                    infowindow.setContent(`<div style="width:150px;text-align:center;padding:10px 15px;">
                            ${marker.getTitle()}
                        <button style="margin:10px 0 0 0; padding:5px;" onclick="location.href='https://map.kakao.com/link/to/${marker.getTitle()},${marker.getPosition().Ma},${marker.getPosition().La}/from/현재위치,${pos.lat},${pos.lon}'">길찾기</button></div>`);
                    infowindow.open(map, marker);
                    //map.setCenter(marker.getPosition()); //마커 누르면 그 위치로 맵 중심 이동.
                })
            })
        });
        console.log('location : ', location.latitude, location.longitude);

    }, [])


    useEffect(() => {
        console.log("deps[location] 렌더링");

        //사용자 현재 위치로 화면 이동
        const current = new kakao.maps.LatLng(location.latitude, location.longitude);
        map.setCenter(current);

    }, [location])


    useEffect(() => {
        console.log("deps[gu] 렌더링");

        if (prevGu !== gu && prevGu !== undefined) {
            // 주소-좌표 변환 객체 || 구(드롭다운메뉴 내에서)가 바뀔 때마다 위치 변경.
            var geocoder = new kakao.maps.services.Geocoder();
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(`${gu}`, function (result, status) {
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // // 결과값으로 받은 위치를 마커로 표시합니다
                    // var marker = new kakao.maps.Marker({
                    //     map: map,
                    //     position: coords
                    // });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    infowindow.close();
                    infowindow.setContent(`<div style="width:150px;text-align:center;padding:6px 0;">${gu}</div>`);
                    infowindow.open(map);
                    map.setCenter(coords);                    
                    map.setLevel(7, {animate: {duration: 200}});     
                }
            });
        }
        prevGu = gu;

    }, [gu])


    useEffect(() => {
        console.log("deps[all] 렌더링");

        // 주소-좌표 변환 객체 || 구(드롭다운메뉴 내에서)가 바뀔 때마다 위치 변경.
        var geocoder = new kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(`${all}`, function (result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                
                let trashMarkerL = trashMarker_list.filter((marker, i, array) => {
                    return marker.getTitle() === all;
                });
                //console.log(trashMarker_list)
                //console.log(trashMarkerL)

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                infowindow.close();
                infowindow.setContent(`<div style="width:150px;text-align:center;padding:10px 15px;">
                        ${all}
                        <button style="margin:10px 0 0 0; padding:5px;" onclick="location.href='https://map.kakao.com/link/to/${all},${result[0].y},${result[0].x}/from/현재위치,${location.latitude},${location.longitude}'">길찾기</button>
                    </div>`);
                infowindow.open(map, trashMarkerL[0]);
                map.setCenter(coords);
                map.setLevel(5, {animate: {duration: 200}});
            }
        });

    }, [all])


    //현재 위치 조회 버튼
    function setCurrent() {
        geo.then((pos) => {
            setLocation({ latitude: pos.lat, longitude: pos.lon });
            console.log('navigator에서 현재위치 받아오기 : ', pos.lat, pos.lon)
        });

        console.log("click 현재 위치 조회");
    }


    //구 변경값을 state로 전달 
    const handleGu = (data) => {
        if (gu !== data) {
            setGu(data)
        }
        console.log("showpage", data)
    }

    const handleAll = (data) => {
        if (all !== data) {
            setAll(data)
        }
        console.log("showpage", data)
    }



    return (
        <Container>
            <Menubar />
            <Menu_wrapper>
                <Div_area>
                    <Button fluid color='blue' onClick={setCurrent}>
                        <Icon name='location arrow' />
                        <span>현위치</span>
                    </Button>
                </Div_area>

                <Div_area>
                    <FilterBtn setting={handleGu} />
                </Div_area>

                <Div_area>
                    <ListBtn setting={handleAll} />
                </Div_area>
            </Menu_wrapper>

            <ContainerMap id='map' />
        </Container>

    )
}

export default ShowPage;
