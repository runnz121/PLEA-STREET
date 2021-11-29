import React from 'react'
import styled from 'styled-components'
import { Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Menubar from './Menubar'

const Wrap = styled.div`
    max-width: 640px;
    margin: 0px auto;
    padding-bottom: 0px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  img {
    height: 30vh;
  }
`
const Middle = styled.div`
  text-align: center;
  margin: 2rem;
  span {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  font-family: 'TmoneyRoundWindRegular';
`
const Title = styled.h1`
  font-family: 'TmoneyRoundWindExtraBold';
  text-align: center;
  margin: 0 auto;  
  padding: 2rem;
`


function TestStartPage() {
  return (
    <Wrap>
      <Menubar />
      <Content>
        <Title>
          "분리배출 바로알기" <br />
          OX Quiz
        </Title>
        
        <Image src='img/resultImage/graduate.png' 
               centered
               style={{
                 marginTop: '2rem'
               }} />

        <Middle>
          <span>나의 환경에 대한 지식은 어느 정도일까?</span> <br />
          <span>분리배출 학력퀴즈로 알아보자!</span>
        </Middle>

        <Link to='/PLEA-STREET/options'>
          <Button size='big' color='blue'>퀴즈 시작!</Button>
        </Link>
      </Content>
    </Wrap>

  )
}

export default TestStartPage

