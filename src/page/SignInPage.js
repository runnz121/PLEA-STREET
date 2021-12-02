import React,{useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import { useHistory } from 'react-router'
import { Input } from 'semantic-ui-react'
import { BACKEND_URL } from '../util/BackendUrl'
import Menubar from '../component/Menubar'


const Container = styled.div`
 
`

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 30vh;
    width : 100vw;
    /* border: 4px dotted skyblue; */
    border-radius: 20px;
    max-width: 100%;
    margin-top: 24vh;
`
const H1 = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-weight: bold;
  font-size: 2rem;
`
const ContentWrapperId = styled.div`
      /* margin:20px; */
      padding: 0.4rem;
`
const ContentWrapperPW = styled.div`
      /* margin:20px; */
      padding: 0.4rem;
`
const ContentWrapperBtn = styled.div`
  
  button{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 1.2rem;
    border: 1px solid #34558b;
    color: #34558b;
    font-size: 1.2rem;
    width: 90%;
    height: 100%;
    font-weight: bold;
    margin: 1rem;
    padding: 10px;
    &:hover{
      background-color: #34558b;
      color: white;
      opacity: 0.9;
    }
  }
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
            <Menubar />
            <Wrapper>
                <H1>Login</H1>
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
                    <button type="submit">
                        눌러서 로그인
                    </button>
                </ContentWrapperBtn>
                </form>

            </Wrapper>
        </Container>

        
    )
}

export default SignInPage
