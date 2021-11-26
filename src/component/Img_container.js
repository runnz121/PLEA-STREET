import React from 'react'
import styled from 'styled-components'

import closeImg from '../img/2.png';
import openImg from '../img/1.png';
import { useHistory, Link } from "react-router-dom";

const Img = styled.div`
    width : 100%;
    height : 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
`

const ImgContainer = styled.div``


function MainImage() {

    return (
        <ImgContainer>
            <Img>
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
            </Img>
        </ImgContainer>
    )
}

export default MainImage
