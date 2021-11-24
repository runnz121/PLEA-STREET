import React,{useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import { useHistory } from 'react-router'

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px black;
`;

const Input = styled.input`
    width : 100px;
    height : 50px;
`

const Btn = styled.button`
    padding : 20px;
`

function SignInPage() {

    const [userId, setUserId] = useState("")
    const [userPwd, setUserPwd] = useState("")
    const history = useHistory();


    const onHandlerId = (e) => {
        setUserId(e.currentTarget.value)
    }

    const onHandlerPwd = (e) => {
        setUserPwd(e.currentTarget.value)
    }

    console.log(userId, userPwd)

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            userId: userId,
            userPwd: userPwd
        }
        axios
        .post("http://localhost:8080/PLEA-STREET/user/signin", 
        JSON.stringify(body), {
            headers: { "Content-Type": `application/json` },
            })
        //.then((response) => console.log(response.data.accessToken))
        .then(response => {
            const token = response.data.accessToken;
            console.log(token)
            if(token.length != null){
                localStorage.setItem("accessToken", token)
                alert("어서오세요 환영합니다!")
                history.push({
                    pathname: "/PLEA-STREET/community"
                })
            }
        }).catch(error => {
            alert("없는 사용자 입니다");
        })
    }

    return (
        <Container>
        <form onSubmit={handleSubmit}>
                <label>아이디 입력</label>
                <Input type="userId" value={userId} onChange={onHandlerId}/>
                    
                <label>비밀번호 입력</label>
                <Input type="userPwd" value={userPwd} onChange={onHandlerPwd}/>
                 
                <Btn type="submit">
                    눌러서 로그인
                </Btn>
        
            </form>
        </Container>
    )
}

export default SignInPage
