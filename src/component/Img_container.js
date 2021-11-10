import React from 'react'
import styled from 'styled-components'


const Img = styled.div`
    width : 100%;
    height : 70%;
    padding-top:10vh;
    text-align: center;
    position: relative;
`

const ImgStyle1 = styled.img`
    width : 30vh;
    height : 40vh;

    position : absolute;
    top: 0px;
    left: 0px;
`

const ImgStyle2 = styled.img`
    width : 30vh;
    height : 40vh;
    position : absolute;
    display: none;

    top: 0px;
    left: 0px;
`

const ControlMap = styled.div`
    width : 10%;
    height : 100%;

    position: relative;
    margin-left : 50vh;
    &:hover  {
        ${ImgStyle2} {
            display : block;
        }
        ${ImgStyle1} {
            display : none;
        }
    }
`

function MainImage() {
  
    return (
            <Img>
                <ControlMap>
                    <ImgStyle1 src = 'img/2.png' alt ="can_close"/>
                    <ImgStyle2 src = 'img/1.png' alt ="can_open"/> 
                </ControlMap>
            </Img>
          
    )
}

export default MainImage
