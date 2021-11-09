import React,{ useEffect } from 'react'
import ContainerMap from "../component/Map.js"

function ShowPage() {
    // const  { kakao } = window

    // useEffect(() => {
    //     const container = document.getElementById('map')
    //     const options = {
    //         center : new kakao.maps.Map(container, options);
    //     }
    // },[]);


    return (
        <ContainerMap/>
    )
}

export default ShowPage;
