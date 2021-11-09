import React,{ useEffect, useState, useRef} from 'react'
import ContainerMap from "../component/Map.js"
import Container from '../component/Contanier.js';
import Menu from "../component/Menu.js"






function ShowPage() {
    const  { kakao } = window
    // const [latitude, setLatitude] = useState()
    // const [longtitude, setLongtitude] = useState()


    useEffect(() => {
        kakao.maps.load(() => {
            let el = document.getElementById('map');
            let map = new kakao.maps.Map(el, {
                center: new kakao.maps.Coords(523951.25, 1085073.75)
            })
        })

    }, []);



    return (
        <Container>
                <Menu/>
                <ContainerMap id = 'map'/>
        </Container>

    )
}

export default ShowPage;
