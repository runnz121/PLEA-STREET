import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Questions from '../util/question.json'
import styled from 'styled-components';
import Menubar from './Menubar';
import { Button, Loader } from 'semantic-ui-react';


const Wrap1 = styled.div`
  width: 640px;
  margin: 0px auto;
  padding-bottom: 0px; 
`
const Wrap = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`
const Content = styled.div`

`
const Slider = styled.div`
  width: 1000vw;
`
const Detail = styled.div`
  margin-top: 15vh;
  width: 100vw;
  float: left;
  background-color: skyblue;
`
const Top = styled.div`
  display: inline-flex;
  width: 640px;
  height: 20vh;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
`
const Counter = styled.div`
  font-size: 2rem;
  font-weight: bold;
`
const BtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 640px;
  height: 45vh;
  margin: 0 auto;
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
`
const LoadingContainer = styled.div`
  max-width: 640px;
  margin: 0px auto;
  /* padding-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`


const TestOptions = () => {
    const [loading, setLoading] = useState(false);
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [score, setScore] = useState(0);
    const slideRef = createRef(null);
    const TOTAL_SLIDES = 10;
    const history = useHistory();
    
    const oClick = (e) => {
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';

        const selectAnswer = e.target.value
        const answer = JSON.stringify(Questions[num].answer).replaceAll("\"", "")

        if(selectAnswer === answer) {
          setScore(score => score+1)
        }
    };
    const xClick = (e) => {
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';

        const selectAnswer = e.target.value
        const answer = JSON.stringify(Questions[num].answer).replaceAll("\"", "")

        if(selectAnswer === answer) {
          setScore(score => score+1)
        }
    };

    const resultChecker = () => {
        setLoading(true);

        setTimeout(() => {
            const testResult = score
            history.push(`/PLEA-STREET/result/${testResult}`);
        }, 3000);
    };
    useEffect(() => {
        currentSlide > TOTAL_SLIDES && resultChecker();
    }, [currentSlide]);

    return (
      <>
      <Menubar />
      <Wrap1>
          <Wrap>
            옵션페이지!
            <Content>
              {!loading && (
                          <Slider ref={slideRef}>
                            {Questions.map((item) => {
                                    return (
                                          <Detail key={item.id}>
                                            <Top>
                                              <Counter>
                                                <span>
                                                  {currentSlide}
                                                </span>
                                                <span>
                                                  /{TOTAL_SLIDES}
                                                </span>
                                              </Counter>
                                              <h1>
                                                {item.question}
                                              </h1>
                                            </Top>
                                            <BtnBox>
                                              <Button onClick={oClick} value='O'>O</Button>
                                              <Button onClick={xClick} value='X'>X</Button>
                                            </BtnBox>
                                          </Detail>
                                    );
                                })}
                          </Slider>
              )}
              {loading && (
                  <LoadingContainer>
                    <div>image</div>
                    <h2>환경 점수 계산하는 중...</h2>
                    <Loader active inline  />
                  </LoadingContainer>
              )}
            </Content>
          </Wrap>
          </Wrap1>
          </>
    );
};

export default TestOptions;
