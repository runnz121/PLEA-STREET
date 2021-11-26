import React from 'react'
import styled from 'styled-components'

import closeImg from '../img/2.png';
import openImg from '../img/1.png';

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
`

const ImgContainer = styled.div``
const Text = styled.div`
    justify-content: center;
`

function MainImage() {
  
    return (
        <ImgContainer>
            <Img>
                <ControlMap>
                    <Text>위치검색</Text>
                    <ImgStyle1 src = {closeImg} alt ="can_close"/>
                    <ImgStyle2 src = {openImg} alt ="can_open"/> 
                </ControlMap>
                <ControlMap>
                    <Text>검사</Text>
                    <ImgStyle1 src = {closeImg} alt ="can_close"/>
                    <ImgStyle2 src = {openImg} alt ="can_open"/> 
                </ControlMap>
            </Img>
            <Img>
            <ControlMap>
                <Text>커뮤니티</Text>
                <ImgStyle1 src = {closeImg} alt ="can_close"/>
                <ImgStyle2 src = {openImg} alt ="can_open"/> 
            </ControlMap>
            <ControlMap>
                <Text>교육</Text>
                <ImgStyle1 src = {closeImg} alt ="can_close"/>
                <ImgStyle2 src = {openImg} alt ="can_open"/> 
            </ControlMap>
        </Img>
    </ImgContainer>
    )
}

export default MainImage
