import axios from 'axios'
import React,{useState} from 'react'
import styled from "styled-components"
import MenuBar from '../component/Menubar'
import { useHistory } from 'react-router-dom'

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
const Btn = styled.button`
    width : 150px;
    height: 50px;
`

const Title = styled.input`
    width: 400px;
    height : 20px;
    border: 1px solid blue;
`

const Content = styled.input`
    width : 400px;
    height: 500px;
    border: 1px solid green;
`



function PostWrite() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const history = useHistory();

    //게시글 제출 핸들러
    //토큰, 제목, 내용을 같이 보냄
    const SubmitHandler =(e) =>{
        const accesstoken = localStorage.getItem("accessToken")
        console.log(accesstoken)
        let body = {
            title: title,
            content: content,
            token: localStorage.getItem("accessToken")
        }
        axios.post("http://localhost:8080/PLEA-STREET/board", JSON.stringify(body),{
            headers: {
                "Content-Type":`application/json`,
                Authorization: "Bearer "+ localStorage.getItem("accessToken"),
                withCredentials:true
            },
        }).then(res=> console.log(res),
            history.push({
            pathname:"/PLEA-STREET/community"
        })).catch(err => {alert("에러발생")})
    }

    const titleHandler = (e) =>{
        setTitle(e.currentTarget.value)
    }

    const contentHandler = (e) => {
        setContent(e.currentTarget.value)
    }
    
    return (
        <Wrapper>
            <MenuBar/>
            <form onSubmit={SubmitHandler}>
                <Top>
                    <Btn type="submit">글작성</Btn>
                </Top>
                <Body>
                    <Title onChange={titleHandler}/>
                    <Content onChange={contentHandler}/>
                </Body>
            </form>

        </Wrapper>
    )
}

export default PostWrite
