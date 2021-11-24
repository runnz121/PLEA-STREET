import React,{useState} from 'react'
import MenuBar from '../component/Menubar'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import PostList from "../component/PostListComponent"

const Wrapper = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 0px auto;
    padding-bottom: 0px;
    height: 78vh;
    
`

const PostListWrap = styled.div`
    max-width : 640px;
    height: 70vh;

`

const Btn = styled.button`
    width : 150px;
    height: 50px;
`

const Top = styled.div`
    width : 100%;
    height: 10vh;
    border: 1px solid black;
    padding-top: 2vh;
 
    display: flex;
    justify-content: space-around;
`


const Body = styled.div`
    width: 100%;
    height: 80vh;
    border: 2px solid red;
    overflow-y: scroll;
    overflow-x: hidden;
`


function CommunityPage() {
    const history = useHistory();
    const [notlogged, setNotlogged] = useState(true)

    useEffect(() => {checkTokenHandler()},[])


    const checkTokenHandler =() => {
        if(localStorage.getItem("accessToken")){
            setNotlogged(false)
        }
    }

    const PostHandler = (e) => {
        if(!localStorage.getItem("accessToken")){
            alert("로그인을 먼저 해주세요!")
        }else{
            history.push({
                pathname: "/PLEA-STREET/postwrite",
                state: {
                    token: localStorage.getItem("accessToken")
                }
            })
        }
    }

    const SignInHandler = (e) => {
        history.push({
            pathname: "/PLEA-STREET/signin"
        })
    }

    const SignUpHandler = (e) => {
        history.push({
            pathname: "/PLEA-STREET/signup"
        })
    }

    return (
        <Wrapper>
            <MenuBar/>
                <PostListWrap> 
                <Top>
                   {notlogged ? <Btn onClick={SignInHandler}>로그인</Btn> : null }
                    <Btn onClick={PostHandler}>글작성</Btn>
                    {notlogged ? <Btn onClick={SignUpHandler}>회원가입</Btn> : null}
                </Top>
                <Body>
                    <PostList/>
                </Body>
            </PostListWrap>
        </Wrapper>
    )
}

export default CommunityPage
