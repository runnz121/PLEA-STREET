import styled from "styled-components"
import { useState } from "react";
import { Image } from "semantic-ui-react";

import Question from '../util/question.json';


const Wrap = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-top: 50px;
  padding-bottom: 10px;
  div{
    padding: 0.4em;
    text-align: center;
  }
`
const Score = styled.div`
  display: ${props => props.show ? "none" : "block"};
  margin-top: 1rem;
  transition: all 0.3s;
  div{
    font-family: 'TmoneyRoundWindRegular';
    font-size: 1.1em;
    word-break: keep-all;
    line-height: 1.4;
  }
  h3{
    background-color: #34558b;
    opacity: 0.9;
    color: white;
    margin: 1rem;
    padding: 1rem;
    width: 50%;
    margin-left: 25%;
    border-radius: 1rem;
  }
`
const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #34558b;
  padding: 1rem;
  border-radius: 1rem;
  width: 50%;
  margin-left: 25%;
  &:hover{
    background-color: #34558b;
    color: white;
    opacity: 0.9;
  }
  span {
    font-family: 'TmoneyRoundWindRegular';
    font-weight: bold;
    
  }
  img {
    width: 22px;
    height: 22px;
    margin: 4px;
  }
`


function TestResultDetail( props ) {

  const [toggle, setToggle] = useState(true);

  const toggleBtn = () => {
    setToggle(!toggle)
    document.getElementById('toggleDiv').focus()
  }

  return (
    <Wrap>
      <Answer onClick={toggleBtn}>
        <span>정답이 궁금하다면?</span>
        <Image src='../img/resultImage/click.png' />
      </Answer>
      
      <Score show={toggle} id='toggleDiv' tabIndex='1'>
        
        <h3>OX퀴즈 정답</h3>
        {Question.map((question, index) => (
          <div key={index}>
            <div>
              {question.id}. {question.question}
            </div>
            <div>
              <Image src={'../'+ question.img} size='medium' centered />
            </div>
            <div>
              정답 :  {question.answer}
            </div>
            <span>------------------------------------</span>
          </div>
        ))}
        
        <lottie-player src="../img/resultImage/jump.json" background="transparent" style={{width: '100vw', maxWidth: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} speed="1" loop autoplay>
        </lottie-player>
        <h3>올바른 분리배출을 생활화 합시다!</h3>
      </Score>

    </Wrap>


  )
}

export default TestResultDetail
