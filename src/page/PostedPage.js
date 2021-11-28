import React,{useState, useEffect} from 'react'
import {useLocation} from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import MenuBar from '../component/Menubar'

const Wrapper = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 0px auto;
    padding-bottom: 0px;
    height: 78vh;
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
    overflow-x: hidden;
    display: inline-block;
`
const Title = styled.div`
    width: 400px;
    height : 20px;
    border: 1px solid blue;
`

const Content = styled.div`
    width : 400px;
    height: 500px;
    border: 1px solid green;
`



function PostedPage() {
    const getLocation = useLocation()
    const [postId, setPostId] = useState()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    console.log("check",getLocation.state.boardId)
    console.log("postid",postId)

   //게시글 아이디를 state저장
    useEffect(() => {
        setPostId(getLocation.state.boardId)
    }, [postId])
    
    //저장된 게시글아이디를 바탕으로 백엔드에 요청
    useEffect(() => {
        getData()
    }, [postId])

    //토큰 실어서 백엔드에 요청 보냄
    const getData = () => {
        const URL = `http://localhost:8080/PLEA-STREET/board/find?postId=${postId}`;
        axios.get(URL,  
            {
                headers: {
                        "Content-Type":`application/json`,
                        Authorization: "Bearer "+ localStorage.getItem("accessToken"),
                        withCredentials:true
                        },
            }).then(res => setting(res))
        }

    //갖고온 데이터를 세팅
    const setting= (res) => {
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    console.log(title, content)
    


    return (
        <Wrapper>
        <MenuBar/>
            <Top>
                {title}
            </Top>
            <Body>
                {content}
            </Body>
     
    </Wrapper>
    )
}
export default PostedPage