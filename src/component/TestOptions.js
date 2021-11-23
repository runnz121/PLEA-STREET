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
    const slideRef = createRef(null);
    const TOTAL_SLIDES = 10;
    const history = useHistory();
    const [mbti, setMbti] = useState([]);

    const nextSlideFir = () => {
        setMbti(mbti + Questions[num].answers[0].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };
    const nextSlideSec = () => {
        setMbti(mbti + Questions[num].answers[1].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };

    const mbtiChecker = () => {
        setLoading(true);
        let map = {};
        let result = [];
        for (let i = 0; i < mbti.length; i++) {
            if (mbti[i] in map) {
                map[mbti[i]] += 1;
            } else {
                map[mbti[i]] = 1;
            }
        }
        for (let count in map) {
            if (map[count] >= 2) {
                result.push(count);
            }
        }

        setTimeout(() => {
            const examResult = result.join('');
            history.push(`/PLEA-STREET/result/${examResult}`);
        }, 3000);
    };
    useEffect(() => {
        currentSlide > TOTAL_SLIDES && mbtiChecker();
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
                                              <Button onClick={nextSlideFir}>
                                                {item.answers[0].content}
                                              </Button>
                                              <Button onClick={nextSlideSec}>
                                                {item.answers[1].content}
                                              </Button>
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
