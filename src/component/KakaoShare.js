import React, { useEffect } from 'react'


const KakaoShare = () => {

  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('d3035583277a70970a431991f3967f92')
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '당신의 환경점수는?',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl: 'img/1.png', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href
          },
        },
        buttons: [
          {
            title: '결과 확인하기',
            link: {
              // mobileWebUrl: window.location.href,
              mobileWebUrl: window.location.href,
              webUrl: window.location.href
            },
          }
        ],
      })
    }
  }
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id="kakao-link-btn">
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
        ㅏ하하
      </button>
    </div>
  )
}
export default KakaoShare