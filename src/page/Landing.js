import React, {useState,useEffect} from 'react'
import MainImage from '../component/Img_container'
import Btn from "../component/B_GetCurrentNext"
import styled from 'styled-components'
import { useHistory } from 'react-router'



const Wrap = styled.div`
    width : 100%;
    height : 100%;
    margin-top : 10vh;
    font-family: 'NanumBarunGothic';
`

const ImgCon = styled.div`
    width: 100%;
    height : 100%;
    text-align:left;
    font-family: 'NanumBarunGothic';
`

const Header = styled.span`
    margin-left: 35vh;
    text-align: right;
    font-size: 50px;
    font-family: 'NanumBarunGothic';
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
                pathname: "/PLEA-STREET/map",
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
        <Wrap>
          <Header> 가장 가까운 쓰레기통은 어디일까요?</Header>
          <ImgCon>
              <Btn onClick = {getLocation}>
                  <MainImage/>
              </Btn>
          </ImgCon>
        </Wrap>
    )
}

export default Landing
