import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image, Button, Icon } from 'semantic-ui-react';

import Result from '../util/result.json';
import Menubar from './Menubar';
import KakaoShare from './KakaoShare';
import TestResultDetail from './TestResultDetail';

const Wrap = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-bottom: 0px;
`
const Content = styled.div`
  padding-top: 4vh;
`
const ResultSocre = styled.div`
  p{
      font-family: 'TmoneyRoundWindExtraBold';
      font-size: 1.6rem;
      font-weight: 900;
      margin: 0;
      text-align: center;
    }
`
const ResultType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  span, p {
    font-family: 'TmoneyRoundWindRegular';
    font-size: 1.1rem;
    line-height: 1.6;
    word-break: keep-all;
  }

`
const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
      transform: scale(1.04);
    }
  }
`

const TestResult = ({ match }) => {
    const url = window.location.href;
    const { score } = match.params;
    const result = Result[score];

    console.log(match)
    console.log(result.img)

    const copyAlert = () => {
        alert('링크 복사완료!');
    };


    return (
        <>
          <Menubar />
          <Wrap key={result.id}>
            <Content>
              <ResultSocre>
              <p>당신의 점수는?</p>
              <p style={{ 
                color: '#34558b',
                fontSize: '2rem'
               }}>
                 {score * 10}점!
              </p>
              </ResultSocre>
              {/* 이미지 */}
              <Image src={result.img} centered style={{ height: '42vh'}} />
              <ResultType>
                <div>
                  <span>{result.subhead[0].head}</span> {/* 당신은 진정한 환경지킴이! 지구의 */}
                  <span>{result.id}</span>              {/* 히어로 */}
                  <span>{result.subhead[1].head}</span> {/* 시군요! */}
                </div>
                <p>{result.subject}</p>         {/* 앞으로도 쭉 지금같이 노력해주세요! */}
              </ResultType>

              <LinkWrap>
                {/* 다시하기 */}
                <Link to="/PLEA-STREET/cleanTest"> 
                  <Image src='../img/resultImage/reset.png'
                         style={{
                           width: '54px',
                           height: '54px'
                         }} />
                </Link> 
                {/* 카카오톡 공유 */}
                <KakaoShare />
                {/* 링크 공유 */}
                <CopyToClipboard text={url}>
                  <Image src='../img/resultImage/link.png'
                         onClick={copyAlert}
                         style={{
                           width: '44px',
                           height: '44px'
                         }} />
                </CopyToClipboard>
              </LinkWrap>
              {/* 정답 */}        
              <TestResultDetail score={score} />
            </Content>
          </Wrap>
        </>
    );
};

export default TestResult;
