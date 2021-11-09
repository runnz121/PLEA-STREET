import React, {useEffect, useRef} from 'react';

const {kakao} = window;

function Content() {
   
    useEffect(() => {
        kakao.maps.load(() => {
            let el = document.getElementById('map');
            let map = new kakao.maps.Map(el, {
                center: new kakao.maps.LatLng(37.509811827944354, 126.95647741926624)
            })
        })

    }, []);
    return (
     <div id='map' style={{
      width: '800px', 
      height: '800px'
     }}></div>
    )
}

export default Content;