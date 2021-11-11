import React,{ useEffect, useState} from 'react'
import ContainerMap from "../component/Map.js"
import Container from '../component/Contanier.js';
import styled from "styled-components"
import {useLocation} from "react-router-dom"


//버튼 차례데로 현재 로케, 필터링 구, 목록
import FilterBtn from "../component/D_filter.js"
import ListBtn from "../component/B_list.js"

//local data
import data from "../util/loca"
import { Button } from 'semantic-ui-react'


const Menu_wrapper = styled.div`
    width : 100%;
    height : 8vh;
    border : 1px solid red;
    display: grid;
    grid-template-columns: 0.4fr 0.5fr 1fr 0.6fr;
    text-align: center;
    font-family: 'NanumBarunGothic';

    @media ${props => props.theme.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'NanumBarunGothic';
      text-align: center;
    }
`

const Div_area = styled.div`
    padding-top : 1.3vh;
    border: 2px solid black;
    height : 8vh;
    width : 100%;
    z-index: 4;
    font-family: 'NanumBarunGothic';
`
let prevGu;
let map;
function ShowPage() {

    let {kakao} = window
    const getLocation = useLocation()
    let [location, setLocation] = useState({
        latitude : 0,
        longitude : 0   
})


    const[gu, setGu] = useState("")
    console.log("바뀐구", gu)

    const [all, setAll] = useState("")
    console.log("all", all);


//최초 로딩시 현재 위치 및, 전체 휴지통 위치 마커 표시
useEffect(()=> {
    setLocation(getLocation.state)


    let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    }; 

    let map = new kakao.maps.Map(mapContainer, mapOption); 


    map = new kakao.maps.Map(mapContainer, mapOption); 

    let bounds = new kakao.maps.LatLngBounds();



    const displayMarker = (place) => {
        let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(parseFloat(place.위도), parseFloat(place.경도)) 
        });
    }



    //현재 위치 마커 표시
    const current = new kakao.maps.LatLng(getLocation.state.latitude, getLocation.state.longitude);
    let currentMarker = new kakao.maps.Marker({
        map: map,
        position: current
    })

    //전체 데이커 마커 표시
    for(let i = 0; i < data.length; i++){
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].위도, data[i].경도))
    }
    


    if (prevGu !== gu && prevGu !== undefined) { 
    // 주소-좌표 변환 객체 || 구(드롭다운메뉴 내에서)가 바뀔 때마다 위치 변경.
    var geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${gu}`, function(result, status) {
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${gu}</div>`
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
        }
    });
    }
    prevGu = gu; 

},[location, gu, all])

// useEffect(() => {
//        //let prevGu = gu;
//     if (setGu !== gu) { 
//     // 주소-좌표 변환 객체 || 구(드롭다운메뉴 내에서)가 바뀔 때마다 위치 변경.
//     var geocoder = new kakao.maps.services.Geocoder();
//     // 주소로 좌표를 검색합니다
//     geocoder.addressSearch(`${gu}`, function(result, status) {
//         // 정상적으로 검색이 완료됐으면 
//         if (status === kakao.maps.services.Status.OK) {
//             var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
//             // 결과값으로 받은 위치를 마커로 표시합니다
//             var marker = new kakao.maps.Marker({
//                 map: map,
//                 position: coords
//             });
//             // 인포윈도우로 장소에 대한 설명을 표시합니다
//             var infowindow = new kakao.maps.InfoWindow({
//                 content: `<div style="width:150px;text-align:center;padding:6px 0;">${gu}</div>`
//             });
//             infowindow.open(map, marker);
//             map.setCenter(coords);
//         }
//     });    
//     }
//     console.log("dddd")
// },[gu])

     
    //현재 위치 조회 버튼
    const setCurrent = () => {
         navigator.geolocation.getCurrentPosition((position) => {
            setLocation(position.coords.latitude, position.coords.longitude)
        })
        console.log("onclick")
    }

    

    //구 변경값을 state로 전달 
    const handleGu = (data) => {
        if (gu !== data){
            setGu(data)
        }
        console.log("showpage",data)
    }

    const handleAll = (data) => {
      if (all !== data){
          setAll(data)
      }
      console.log("showpage",data)
  }





    return (
        <Container>
            <Menu_wrapper>
                <Div_area>
                    <Button basic color='blue' onClick = {setCurrent}>
                    <span>현위치</span>
                    </Button>
                </Div_area>

                <Div_area>
                    <FilterBtn setting = {handleGu}/>
                </Div_area>

                <Div_area />

                <Div_area>
                    <ListBtn setting = {handleAll}/>
                </Div_area>
            </Menu_wrapper>
        {/* {location.longitude >=1 ? <ContainerMap id = 'map'/> : null} */}
            <ContainerMap id = 'map'/>
        </Container>

    )
}

export default ShowPage;
