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
    width : 100%;;
`

function ShowPage() {
    const getLocation= useLocation()
    const [location, setLocation] = useState({
                latitude: 0,
                longitude: 0
    })
    console.log("first",typeof(location.latitude))

   
    //현재 위치 로케 정보
    const currentLocation = getLocation.state
    const  { kakao } = window

    useEffect(() => {
        setLocation(getLocation.state)
        console.log("getloca",getLocation)
        console.log("second",location.latitude)

        kakao.maps.load(() => {
        let el = document.getElementById('map');
        let map = new kakao.maps.Map(el, {
            center: new kakao.maps.LatLng(getLocation.state.longitude, getLocation.state.latitude),
            level : 1
            })
        })
    }, [location.latitude]);


    const setCurrent = () => {



    }



    return (
        <Container>
            <Menu_wrapper>
                <Div_area>
                    <CurrentBtn onClick = {setCurrent()}/>
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
