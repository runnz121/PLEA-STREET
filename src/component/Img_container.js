import React from 'react'
import styled from 'styled-components'


const Img = styled.div`
    width : 100%;
    height : 100px;
`

function MainImage() {
    return (
            <Img>
              <img alt ="trash_can" src="images/trash_lion.jpeg"/>
            </Img>
          
    )
}

export default MainImage
