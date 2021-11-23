import React from 'react'
import styled from 'styled-components'
import { Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Menubar from './Menubar'

const Wrap = styled.div`
    max-width: 640px;
    margin: 0px auto;
    padding-bottom: 0px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 87vh;
`
const Middle = styled.div`
  text-align: center;
  height: 20%;
`

function TestStartPage() {
  return (
    <Wrap>
      <Menubar />
      <Content>
        <Icon name='question' size='massive' style={{ width: '50%', height: '30%' }} />
        <Middle>
          <h2>당신은 쓰레기를 어디에 버리시나요?</h2>
          <p>10개의 질문으로</p>
          <p>환경캐릭터를 알려드려요!</p>
        </Middle>
        <Link to='/PLEA-STREET/options'>
          <Button size='big'>검사 시작!</Button>
        </Link>
        
      </Content>
    </Wrap>

  )
}

export default TestStartPage

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../home/home.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faCopy,
//     faArrowAltCircleRight,
// } from '@fortawesome/free-solid-svg-icons';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// const Home = () => {
//     const url = window.location.href; // url 복사
//     const copyAlert = () => {
//         alert('링크 생성!');
//     };
//     return (
//         <>
//             <div className={styles.wrapper}>
//                 <div className={styles.container}>
//                     <div className={styles.top}>
//                         <img
//                             className={styles.logo}
//                             src="img/FelizLogo.png"
//                             alt="로고"
//                         />
//                     </div>
//                     <div className={styles.middle}>
//                         <h2 className={styles.header}>올해는 어디로 갈까?</h2>
//                         <p>총 16개의 유형의 MBTI성향을 기반으로</p>
//                         <p>가장 잘 어울리는 여행지를 추천해드려요.</p>
//                     </div>
//                     <div className={styles.bottom}>
//                         <Link to="/tripMBTI" className={styles.start__button}>
//                             테스트 하기
//                             <FontAwesomeIcon
//                                 icon={faArrowAltCircleRight}
//                                 className={styles.icon}
//                             />
//                         </Link>
//                         <CopyToClipboard text={url}>
//                             <button
//                                 className={styles.start__button}
//                                 onClick={copyAlert}
//                             >
//                                 링크복사
//                                 <FontAwesomeIcon
//                                     icon={faCopy}
//                                     className={styles.icon}
//                                 />
//                             </button>
//                         </CopyToClipboard>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;
