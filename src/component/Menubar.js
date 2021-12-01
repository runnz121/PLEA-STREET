import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {Icon} from 'semantic-ui-react'
import { useHistory, Link } from "react-router-dom";


const Wrap = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-bottom: 0px;
`
const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid rgb(50, 84, 137, 0.1);
`
const MenuBtn = styled.div`
  width: 5em;
  height: 30px;
  border-radius: 1em;
  margin: 0.5em;
  transition: all 0.3s;
  &:hover{
    transform: scale(1.08);
    background-color: #34558b;
    color: white;
  }
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
const TopBtn = styled.button`
  background-color: white;
  width: 40px;
  height: 40px;
  margin-left: 1em;
  margin-right: 1.8em;
  border: 0;
  outline: 0;
  transition: all 0.3s;
  &:hover{
    transform: scale(1.2);
  }
`

function Menubar() {

  const history = useHistory();

  useEffect(() => {
    console.log(history)
  },[])

  const [Clatitude, setCLatitude] = useState()
  const [Clongitude, setCLongitude] = useState()

  navigator.geolocation.getCurrentPosition((position) => {
    setCLatitude(position.coords.latitude);
    setCLongitude(position.coords.longitude);
  })

  const goBack = () => {
    history.goBack();
  }

  return (
    <Wrap>
      <TopMenu>
        <TopBtn onClick={goBack}>
          <Icon name='arrow left' 
                size='large' 
                style={{ display: 'flex', 
                         justifyContent: 'center', 
                         alignItems: 'center', 
                         color: '#34558b', 
                         width: '100%', 
                         height: '100%'  }} />
        </TopBtn>
        <Link to={{
            pathname: "/PLEA-STREET/mapSearch",
            state: {
              latitude: Clatitude,
              longitude: Clongitude
            }
        }} style={{ color: 'black' }} >
          <MenuBtn>
            <span>위치검색</span>
          </MenuBtn>
        </Link>
        <Link to='/PLEA-STREET/cleanTest' style={{ color: 'black' }}>
          <MenuBtn>
            <span>퀴즈</span>
          </MenuBtn>
        </Link>
        <Link to='/PLEA-STREET/community' style={{ color: 'black' }}>
          <MenuBtn>
            <span>커뮤니티</span>
          </MenuBtn>
        </Link>
        <Link to='/PLEA-STREET/recycle' style={{ color: 'black' }}>
          <MenuBtn>
            <span>팁</span>
          </MenuBtn>
        </Link>
        <TopBtn>
          <Link to='/PLEA-STREET/'>
            <Icon name='home'
                  size='large'
                  style={{ display: 'flex', 
                           justifyContent: 'center', 
                           alignItems: 'center', 
                           color: '#34558b', 
                           width: '100%', 
                           height: '100%'  }} />
          </Link>
        </TopBtn>
      </TopMenu>
    </Wrap>
  )
}

export default Menubar
