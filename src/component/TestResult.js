import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import Result from '../util/result.json';
import Menubar from './Menubar';
import KakaoShare from './KakaoShare';
// import KakaoBtn from '../shareSNS/kakaoShareButton';
// import FacebookBtn from '../shareSNS/facebookShareButton';
// import TwitterBtn from '../shareSNS/twitterShareButton';

const Wrap = styled.div`
  max-width: 640px;
  margin: 0px auto;
  padding-bottom: 0px;
`
const Content = styled.div`

`
const ResultType = styled.div`

`
const ResultTitle = styled.div`

`

const TestResult = ({ match }) => {
    const url = window.location.href;
    const { score } = match.params;
    const result = Result[score];

    console.log(match)

    const copyAlert = () => {
        alert('링크 복사완료!');
    };
    return (
        <>
          <Menubar />
          <Wrap key={result.id}>
            <Content>
              <div>이미지 자리{result.img}</div>
              <Image src={result.img} size='small' />
              <Image src='img/markerImage/trashMarker.png' size='small' />
              <img src='img/markerImage/trashMarker.png' alt='dgd' width='100px' height='200pxx' />
              <ResultType>
                <h1>{result.subject}</h1>
                <br />
              </ResultType>
              <ResultTitle>
                <h2>{result.subhead[0].head}</h2>
                <h2>{result.id}</h2>
                <h2>{result.subhead[1].head}</h2>
              </ResultTitle>
              <Link to="/PLEA-STREET/cleanTest">
                <button>다시하기</button>
              </Link> 
              <button>카카오톡 공유하기</button>
              <KakaoShare />
              <CopyToClipboard text={url}>
                <button onClick={copyAlert}>
                  링크 복사
                </button>
              </CopyToClipboard>
            </Content>
          </Wrap>
        </>
    );
};

export default TestResult;
