import React,{ useEffect, useState, useRef} from 'react'
import ContainerMap from "../component/Map.js"
import Container from '../component/Contanier.js';
import styled from "styled-components"

import Menu from "../component/Menu.js"
import {useHistory, useLocation} from "react-router-dom"


//버튼 차례데로 현재 로케, 필터링 구, 목록
import CurrentBtn from "../component/B_current.js"
import FilterBtn from "../component/D_filter.js"
import ListBtn from "../component/B_list.js"

//local data
import data from "../util/Locationdata"



const Menu_wrapper = styled.div`
    width : 100%;
    height : 8vh;
    border : 1px solid red;
    display: grid;
    grid-template-columns: 0.4fr 0.5fr 1fr 0.6fr;
    text-align: center;
`

const Div_area = styled.div`
    padding-top : 1.3vh;
    border: 2px solid black;
    height : 100%;
    width : 100%;
    z-index: 2;
`

function ShowPage() {
    let {kakao} = window
    const getLocation = useLocation()
    let [location, setLocation] = useState({
        latitude : 0,
        longitude : 0   
})


console.log(location.latitude)


//최초 로딩시 현재 위치 및, 전체 휴지통 위치 마커 표시
useEffect(()=> {
    setLocation(getLocation.state)
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; 

    let map = new kakao.maps.Map(mapContainer, mapOption); 
    let bounds = new kakao.maps.LatLngBounds();

 
    const displayMarker = (place) => {
        let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.x, place.y) 
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
        bounds.extend(new kakao.maps.LatLng(data[i].x, data[i].y))
    }
},[location])

     
    //현재 위치 조회 버튼
    const setCurrent = () => {
         navigator.geolocation.getCurrentPosition((position) => {
            setLocation(position.coords.latitude, position.coords.longitude)
        })
        console.log("onclick")
    }

    const setGu = () => {
        
    }



    return (
        <Container>
            <Menu_wrapper>
                <Div_area>
                    <CurrentBtn onClick = {setCurrent}>
                    <span>현재위치조회</span>
                    </CurrentBtn>
                </Div_area>

                <Div_area>
                    <FilterBtn/>
                </Div_area>

            <Div_area/>

                <Div_area>
                    <ListBtn/>
                </Div_area>
        </Menu_wrapper>
        {/* {location.longitude >=1 ? <ContainerMap id = 'map'/> : null} */}
            <ContainerMap id = 'map'/>
        </Container>

    )
}

export default ShowPage;
