import React from 'react'
import styled from 'styled-components'

const ImgCon = styled.div`
    width: 100%;
    height : 20px;
    text-align:center;
`

const Img = styled.div`
    width : 100%;
    height : 100px;


`


function MainImage() {
    return (
        <ImgCon>
            <Img>
              <img alt ="trash_can" src="images/trash_lion.jpeg"/>
            </Img>
        </ImgCon>
          
    )
}

export default MainImage
