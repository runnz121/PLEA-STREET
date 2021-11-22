import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';

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

 function SignUpPage() {


    const [userId, setUserId] = useState("")
    const [userPwd, setUserPwd] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userName, setUserName] = useState("")


    const onHandlerId = (e) => {
        setUserId(e.target.value)
    }

    const onHandlerPwd = (e) => {
        setUserPwd(e.target.value)
    }

    const onHandlerPhone = (e) => {
        setUserPhone(e.target.value)
    }

    const onHandlerName = (e) => {
        setUserName(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            userId: userId,
            userPwd: userPwd,
            userPhone: userPhone,
            userName: userName
        }
        axios
        .post("http://localhost:8080/PLEA-STREET/user/signup", 
        JSON.stringify(body), {
            headers: { "Content-Type": `application/json` },
            })
        .then((response) => console.log(response.data));
    }


    return (
        <Container>
        <form onSubmit={handleSubmit}>
                <label>아이디 입력</label>
                <Input type="userId" value={userId} onChange={onHandlerId}/>
                    
                <label>비밀번호 입력</label>
                <Input type="userPwd" value={userPwd} onChange={onHandlerPwd}/>

                <label>핸드폰 번호 입력</label>
                <Input type="userPhone" value={userPhone} onChange={onHandlerPhone}/>
     
                <label>사용자 이름 입력</label>
                <Input type="userName" value={userName} onChange={onHandlerName}/>
                 
                <Btn type="submit">
                    눌러서 가입하기
                </Btn>
        
            </form>
        </Container>
    )
}

export default SignUpPage
