import React from 'react'
import styled from 'styled-components'


const Img = styled.div`
    width : 100%;
    height : 60vh;
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

function MainImage() {
  
    return (
            <Img>
                <ControlMap>
                    <ImgStyle1 src = 'img/2.png' alt ="can_close"/>
                    <ImgStyle2 src = 'https://github.com/cleaner00/PLEA-STREET/blob/main/public/img/1.png' alt ="can_open"/> 
                </ControlMap>
            </Img>
          
    )
}

export default MainImage