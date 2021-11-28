import styled from "styled-components"
import { useState } from "react";
import { Image } from "semantic-ui-react";

import Question from '../util/question.json';


const Wrap = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  div{
    padding: 0.4em;
    text-align: center;
  }
`
const Score = styled.div`
  display: ${props => props.show ? "none" : "block"};

  div{
    font-family: 'TmoneyRoundWindRegular';
    font-size: 1.1em;
    word-break: keep-all;
    line-height: 1.4;

  }
`
const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
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
              정답 :  {question.answer}
            </div>
          </div>
        ))}
      </Score>

    </Wrap>


  )
}

export default TestResultDetail
