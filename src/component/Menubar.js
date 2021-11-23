import React, {useEffect} from 'react'
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
const TopBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  left: 0em;
  width: 30px;
  height: 30px;
  margin-left: 1em;
  margin-right: 1.8em;
  padding-top: 10px;
  border: 0;
  outline: 0;
  transition: all 0.3s;
  &:hover{
    transform: scale(1.1);
  }
`

function Menubar() {

  const history = useHistory();

  useEffect(() => {
    console.log(history)
  },[])

  return (
    <Wrap>
      <TopBtnWrapper>
        <TopBtn>
          <Icon name='arrow left' style={
            { display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: '#34558b', 
              width: '100%', 
              height: '100%'  }} />
        </TopBtn>
        <TopBtn>
          <Link to='/PLEA-STREET/'>
            <Icon name='home' style={
              { display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                color: '#34558b', 
                width: '100%', 
                height: '100%'  }} />
          </Link>
        </TopBtn>
      </TopBtnWrapper>
      <TopMenu>
        <Link to='/PLEA-STREET/mapSearch' style={{ color: 'black' }}>
          <MenuBtn>
            <span>위치검색</span>
          </MenuBtn>
        </Link>
        <Link to='/PLEA-STREET/cleanTest' style={{ color: 'black' }}>
          <MenuBtn>
            <span>검사</span>
          </MenuBtn>
        </Link>
        <Link to='/PLEA-STREET/' style={{ color: 'black' }}>
          <MenuBtn>
            <span>커뮤니티</span>
          </MenuBtn>
        </Link>
        <Link to='/PLEA-STREET/' style={{ color: 'black' }}>
          <MenuBtn>
            <span>교육</span>
          </MenuBtn>
        </Link>
      </TopMenu>
    </Wrap>
  )
}

export default Menubar
