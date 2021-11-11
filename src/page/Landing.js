import React, {useState,useEffect} from 'react'
import MainImage from '../component/Img_container'
import Btn from "../component/B_GetCurrentNext"
import styled from 'styled-components'
import { useHistory } from 'react-router'



const Wrap = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 3rem;
    background-color: #34558b;
`

const ImgCon = styled.div`
    width: 100%;
    height : 100%;
`

const Header = styled.span`
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'BinggraeMelona-Bold';
    font-weight: bold;
    font-size: 5rem;
    line-height: 0.8;
    color: white;

    @media ${props => props.theme.mobile} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'BinggraeMelona-Bold';
      font-weight: bold;
      text-align: center;
    }
`

const Span = styled.span`

    @media ${props => props.theme.mobile} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'BinggraeMelona-Bold';
      font-weight: bold;
      text-align: center;
    }

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
          <Header>
            <Span>PLEA</Span>
            <Span>-</Span>
            <Span>STREET</Span>
          </Header>
          <ImgCon onClick = {getLocation}>
            <MainImage />
              {/* <Btn onClick = {getLocation}>
                  <MainImage/>
              </Btn> */}
          </ImgCon>
        </Wrap>
    )
}

export default Landing