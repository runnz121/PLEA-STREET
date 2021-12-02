import React from 'react'
import styled from 'styled-components'

import closeImg from '../img/2.png';
import openImg from '../img/1.png';
import { useHistory, Link } from "react-router-dom";

const Img = styled.div`
    width : 100%;
    height : 36vh;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #34558b;
      font-size: 1.1rem;
      padding: 0.6rem;
      width: 50%;
      margin-left: 25%;
      border-radius: 1.2rem;
      border: 1px solid #34558b;
      font-family: 'TmoneyRoundWindRegular';
      &:hover{
        background-color: #34558b;
        color: white;
        opacity: 0.9;
      }
    }
`

const ImgStyle1 = styled.img`
    width : 30vh;
    height : 40vh;
    cursor: pointer;

`

const ImgStyle2 = styled.img`
    width : 30vh;
    height : 40vh;
    display: none;
    cursor: pointer;
`

const ControlMap = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 50%;
    height : 100%;

    margin: auto;
    &:hover  {
        ${ImgStyle2} {
            display : block;
        }
        ${ImgStyle1} {
            display : none;
        }
    }

    color: black;
    //width: 5em;
    //height: 30px;
    //border-radius: 1em;
    //margin: 0.5em;
    transition: all 0.3s;
    &:hover{
      transform: scale(1.08);
      //background-color: #34558b;
      color: white;
    }
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-weight: bold;
      font-size: 2rem;
    }
`

const ImgContainer = styled.div`
  width: 640px;
`
const Wrap01 = styled.div`
  width: 100vw;
  max-width: 640px;
`
const AnimeWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`

function MainImage() {

    return (
        <ImgContainer>
          <Wrap01>
            <Img>
              <AnimeWrap>
                <Link to='/PLEA-STREET/mapSearch'>
                  <lottie-player src="img/landingIcon/areaMap.json" background="transparent" style={{width: '200px', height: '200px'}} speed="1" loop autoplay>
                  </lottie-player>
                  {/* <span>위치검색</span> */}
                </Link>
                <Link to='/PLEA-STREET/mapSearch'>
                  <span>위치검색</span>
                </Link>
              </AnimeWrap>
              <Link to='/PLEA-STREET/cleanTest'>
                <lottie-player src="img/landingIcon/social.json" background="transparent" style={{width: '200px', height: '200px'}} speed="1" loop autoplay>
                </lottie-player>
                <span>OX퀴즈</span>
              </Link>
            </Img>
            <Img>
              <Link to='/PLEA-STREET/community'>
                <lottie-player src="img/landingIcon/community.json" background="transparent" style={{width: '200px', height: '200px'}} speed="1" loop autoplay>
                </lottie-player>
                <span>커뮤니티</span>
              </Link>
              <Link to='/PLEA-STREET/recycle'>
                <lottie-player src="img/landingIcon/ecoleta.json" background="transparent" style={{width: '200px', height: '200px'}} speed="1" loop autoplay>
                </lottie-player>
                <span>분리배출 팁</span>
              </Link>
            </Img>
          </Wrap01>

            {/* <Img>
                <Link to='/PLEA-STREET/mapSearch'>
                    <ControlMap>
                        <span>위치검색</span>
                        <ImgStyle1 src={closeImg} alt="can_close" />
                        <ImgStyle2 src={openImg} alt="can_open" />
                    </ControlMap>
                </Link>
                <Link to='/PLEA-STREET/cleanTest'>
                    <ControlMap>
                        <span>검사</span>
                        <ImgStyle1 src={closeImg} alt="can_close" />
                        <ImgStyle2 src={openImg} alt="can_open" />
                    </ControlMap>
                </Link>
            </Img>
            <Img>
                <Link to='/PLEA-STREET/community'>
                    <ControlMap>
                        <span>커뮤니티</span>
                        <ImgStyle1 src={closeImg} alt="can_close" />
                        <ImgStyle2 src={openImg} alt="can_open" />
                    </ControlMap>
                </Link>
                <Link to='/PLEA-STREET/recycle'>
                    <ControlMap>
                        <span>교육</span>
                        <ImgStyle1 src={closeImg} alt="can_close" />
                        <ImgStyle2 src={openImg} alt="can_open" />
                    </ControlMap>
                </Link>
            </Img> */}
        </ImgContainer>
    )
}

export default MainImage
