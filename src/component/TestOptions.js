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
  transition: all 0.6s;
`
const Detail = styled.div`
  width: 100vw;
  height: 88vh;
  float: left;
  /* background-color: skyblue; */
`
const Top = styled.div`
  width: 640px;
  height: 30vh;
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
  /* padding-right: 84%; */
  padding-top: 10px;
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
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
  height: 26%;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  cursor: pointer;
  div {
    border-radius: 18%;
    height: 100%;
  }
  @media ${props => props.theme.mobile} {
    width: 100vw;
  }
`
const OBox = styled.div`
  transition: all 0.3s;
  width: 200px;
  margin: 2rem 2rem 2rem 8rem;
  &:hover {
    background-color: #d9e2ff;
    transform: scale(1.02);
  }
  p {
    border-radius: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #34558b;
    font-weight: 900;
    font-size: 5rem;
    text-align: center;
    box-shadow: inset 5px 5px 30px rgb(220 203 178 / 40%);
  }
  @media ${props => props.theme.tablet} {
    width: 200px;
    margin: 2rem 2rem 2rem 8rem;
  }
  @media ${props => props.theme.mobile} {
    margin: 1rem 1rem 2rem 2rem;
    width: 50%;
  }
`
const XBox = styled.div`
  transition: all 0.3s;
  width: 200px;
  margin: 2rem 8rem 2rem 2rem;
  &:hover {
    background-color: #ffd5ca;
    transform: scale(1.02);
  }
  p {
    border-radius: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #34558b;
    font-weight: 900;
    font-size: 5rem;
    text-align: center;
    box-shadow: inset 5px 5px 30px rgb(220 203 178 / 40%);
  }
  @media ${props => props.theme.tablet} {
    width: 200px;
    margin: 2rem 8rem 2rem 2rem;
  }
  @media ${props => props.theme.mobile} {
    margin: 1rem 2rem 2rem 1rem;
    width: 50%;
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

        const selectAnswer = e.target.id
        const answer = JSON.stringify(Questions[num].answer).replaceAll("\"", "")

        if(selectAnswer === answer) {
          setScore(score => score+1)
        }
    };
    const xClick = (e) => {
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';

        const selectAnswer = e.target.id
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
                                                               paddingLeft: '2rem'
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
                                              <OBox>
                                                <p onClick={oClick} id='O'>O</p>
                                              </OBox>
                                              <XBox>
                                                <p onClick={xClick} id='X'>X</p>
                                              </XBox>
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
