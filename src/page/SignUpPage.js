import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useHistory } from 'react-router'
import { Button, Input }from 'semantic-ui-react'
import { BACKEND_URL } from '../util/BackendUrl';


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
const ContentWrapperPh = styled.div`
      margin:20px;
`
const ContentWrapperNa = styled.div`
      margin:20px;
`
const ContentWrapperBtn = styled.div`
      margin-left: 25%;
`

const StyleP = styled.div`
    width : 2em;
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
        <Wrapper>
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
                    <Button basic color = 'blue' type="submit">
                        눌러서 가입하기
                    </Button>
                    </ContentWrapperBtn>
            
                </form>
            </Wrapper>
        </Container>
    )
}

export default SignUpPage
