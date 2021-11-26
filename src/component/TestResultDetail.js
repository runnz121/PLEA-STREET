import styled from "styled-components"
import { useState } from "react";

import Question from '../util/question.json';


const Wrap = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-bottom: 30px;
  background-color: beige;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4em;
  }
`
const Test = styled.div`

  background-color: ${props => props.show ? "black" : "red"};

`
function TestResultDetail() {

  const [toggle, setToggle] = useState(true);

  return (
    <Wrap>
      <button onClick={() => setToggle(!toggle)}>정답이 궁금다하면?</button>
      <h1>OX퀴즈 정답</h1>


      <Test show={toggle}>gdsagads</Test>

      {Question.map((question, index) => (
        <div key={index}>
          <div>
            {question.id} {question.question}
          </div>
          <div>
            정답 :  {question.answer}
          </div>
        </div>
      ))}

    </Wrap>


  )
}

export default TestResultDetail
