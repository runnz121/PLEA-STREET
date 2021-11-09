import React, {useState,useEffect} from 'react'
import MainImage from '../component/Img_container'
import Btn from "../component/B_GetCurrentNext"
import styled from 'styled-components'
import ShowPage from './ShowPage'
import { useHistory } from 'react-router'

const ImgCon = styled.div`
    width: 100%;
    height : 20px;
    text-align:center;
`

function Landing(props) {
    const history = useHistory();
    const [Clatitude, setCLatitude] = useState()
    const [Clongitude, setCLongitude] = useState()

    const getCheck = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCLatitude(position.coords.latitude);
            setCLongitude(position.coords.longitude);
        })
    }

    useEffect(()=>{getCheck()},[Clongitude])
    console.log(Clatitude, Clongitude)
  
    const getLocation = (props) => {
        if (Clongitude >=1 && Clatitude >=1) {
            history.push({
                pathname: "/map",
                state: {
                    latitude: Clatitude,
                    longitude : Clongitude
                }
            })
        }else{
            alert("페이지 새로 고침 후 사용자 정보 위치 제공권한에 동의 해주세요!")
        }        
    }

    return (
        <ImgCon>
            <p>쓰레기는 쓰레기통에</p>
            <MainImage/>
            <Btn onClick = {getLocation}/>
        </ImgCon>
    )
}

export default Landing
