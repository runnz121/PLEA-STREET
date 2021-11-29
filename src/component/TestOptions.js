import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Questions from '../util/question.json'
import styled from 'styled-components';
import Menubar from './Menubar';
import {  Loader, Image, Button } from 'semantic-ui-react';



const Wrap1 = styled.div`
  width: 640px;
  margin: 0px auto;
  padding-bottom: 0px; 
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
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
  width: 100vw;
  float: left;
  /* background-color: skyblue; */
`
const Top = styled.div`
  width: 640px;
  height: 20vh;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
`
const Counter = styled.div`
  /* font-size: 1.8rem;
  font-weight: bold; */
  padding-right: 84%;
  padding-top: 10px;
`
const QuesDetail = styled.div`
  h2 {
    margin-top: 2rem;
    word-break: keep-all;
  }
`
const ImageDiv = styled.div`
  width: 640px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
`
const BtnBox = styled.div`
  width: 640px;
  height: 20vh;
  padding-top: 1rem;
  padding-bottom: 0px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  cursor: pointer;
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
  
`
const LoadingContainer = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
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

        console.log(answer)

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
            <Content>
              {!loading && (
                          <Slider ref={slideRef}>
                            {Questions.map((item) => {
                                    return (
                                          <Detail key={item.id}>
                                            <Top>
                                              <Counter>
                                                <span style={{ color: '#34558b', 
                                                               fontWeight: 'bold',
                                                               fontSize: '3rem',
                                                                 }}>
                                                  {currentSlide}
                                                </span>
                                                <span>
                                                  /{TOTAL_SLIDES}
                                                </span>
                                              </Counter>
                                              <QuesDetail>
                                                <h2>{item.question}</h2>
                                              </QuesDetail>
                                            </Top>
                                            <ImageDiv>
                                              <Image src={item.img} 
                                                     centered
                                                     style={{
                                                       height: '30vh'
                                                     }} />
                                            </ImageDiv>
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
                    <Image src='img/questionImage/searching.png' size='small' />
                    <h2>쓰래기 분리수거 하는 중...</h2>
                    <Loader active inline />
                  </LoadingContainer>
              )}
            </Content>
          </Wrap>
          </Wrap1>
          </>
    );
};

export default TestOptions;
