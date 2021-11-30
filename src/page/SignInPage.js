import React,{useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import { useHistory } from 'react-router'
import { Button, Input} from 'semantic-ui-react'
import { BACKEND_URL } from '../util/BackendUrl'


const Container = styled.div`
  margin : 25%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 30vh;
    width : 40vh;
    border: 4px dotted skyblue;
    border-radius: 20px;
`

const ContentWrapperId = styled.div`
      margin:20px;
`
const ContentWrapperPW = styled.div`
      margin:20px;
`
const ContentWrapperBtn = styled.div`
      margin-left: 25%;
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

    //로그인 요청 핸들러
    //인자값으로 id, password 받음
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            userId: userId,
            userPwd: userPwd
        }
        axios
        .post(`${BACKEND_URL}/PLEA-STREET/user/signin`, 
        JSON.stringify(body), {
            headers: { "Content-Type": `application/json` },
            })
      
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
            <Wrapper>
                <form onSubmit={handleSubmit}>
                <ContentWrapperId>
                    <label>아이디 입력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <Input focus placeholder='ID' type="userId" value={userId} onChange={onHandlerId}/>
                </ContentWrapperId>   
                <ContentWrapperPW>      
                    <label>비밀번호 입력&nbsp;&nbsp;</label>
                    <Input focus placeholder='Password' type="password" value={userPwd} onChange={onHandlerPwd}/>
                </ContentWrapperPW>
                <ContentWrapperBtn>  
                    <Button basic color = 'blue' type="submit">
                        눌러서 로그인
                    </Button>
                </ContentWrapperBtn>
                </form>
            </Wrapper>
        </Container>
    )
}

export default SignInPage
