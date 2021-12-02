import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useHistory } from 'react-router'
import { Button, Input }from 'semantic-ui-react'
import { BACKEND_URL } from '../util/BackendUrl';
import Menubar from '../component/Menubar';


const Container = styled.div`
`;

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

const ContentWrapperId = styled.div`
      padding: 0.4rem;
`
const ContentWrapperPW = styled.div`
      padding: 0.4rem;
`
const ContentWrapperPh = styled.div`
      padding: 0.4rem;
`
const ContentWrapperNa = styled.div`
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

const StyleP = styled.div`
    width : 2em;
`
const H1 = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-weight: bold;
  font-size: 2rem;
`

 function SignUpPage() {

    const [userId, setUserId] = useState("")
    const [userPwd, setUserPwd] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userName, setUserName] = useState("")
    const history = useHistory();

    //아이디, 패스워드, 전화번호, 이름 값 인자로 받는 헨들러
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


    //회원가입 요청 헨들러
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            userId: userId,
            userPwd: userPwd,
            userPhone: userPhone,
            userName: userName
        }
        axios
        .post(`${BACKEND_URL}/PLEA-STREET/user/signup`, 
        JSON.stringify(body), {
            headers: { "Content-Type": `application/json` },
            })
        .then((response) => history.push({
            pathname:"/PLEA-STREET/signin"
        }));
    }


    return (
        <Container>
          <Menubar />
          <Wrapper>
            <H1>Sign up</H1>
              <form onSubmit={handleSubmit}>
                      <ContentWrapperId>
                      <label>아이디 입력 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      <Input focus placeholder='ID' type="userId" value={userId} onChange={onHandlerId}/>
                      </ContentWrapperId>

                      <ContentWrapperPW>
                      <label>비밀번호 입력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      <Input focus placeholder='Password' type="password" value={userPwd} onChange={onHandlerPwd}/>
                      </ContentWrapperPW>
                      
                      <ContentWrapperPh>
                      <label>핸드폰 번호 입력&nbsp;</label>
                      <Input focus placeholder='Phone Number' type="userPhone" value={userPhone} onChange={onHandlerPhone}/>
                      </ContentWrapperPh>

                      <ContentWrapperNa>
                      <label>사용자 이름 입력&nbsp;</label>
                      <Input focus placeholder='Name' type="userName" value={userName} onChange={onHandlerName}/>
                      </ContentWrapperNa>

                      <ContentWrapperBtn>
                      <button type="submit">
                          눌러서 가입하기
                      </button>
                      </ContentWrapperBtn>
              
                  </form>
              </Wrapper>
        </Container>
    )
}

export default SignUpPage
