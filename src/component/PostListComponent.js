import React,{useState, useRef} from 'react'
import useFetch from "./PostComponent"
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Wrapper = styled.div`
    width : 640px;
`

const Content = styled.div`
  padding-top: 5vh;
  padding-left: 1vh;
  height: 200px;
  width : 100%;
  border : 1px solid black;
  &:hover{
    cursor:pointer;
  }
`;

const Loading = styled.div`
  fontweight: 600;
`;

const ListTitle = styled.span`
    font-size : xx-large;
`

const ListContent = styled.div`
    padding-top: 5vh;
`


function PostListComponent() {
  const [pageNum, setPageNum] = useState(0);
  const {list, hasMore, isLoading} = useFetch(pageNum);
  const history = useHistory();


  const observerRef = useRef();
  const options = {
      root: null,
      rootMargin:"10px",
      threshold: 1
  }

  const pageHandler = (e) => {
      history.push({
          pathname: "/PLEA-STREET/postwrite"
      })
  }

  const observer = (ele) => {
      if(isLoading) return;
      if(observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(([entry]) => {
          if(entry.isIntersecting && hasMore){
              setPageNum((page) => page + 1);
          }
      }, options);
      ele && observerRef.current.observe(ele);
  };

  console.log(list)

    return (
        <Wrapper>
            {list?.map((post, idx) =>(
                <Content 
                key={idx} 
                onClick={() => {
                            pageHandler(post.boardId);
                }}>
                    <ListTitle>{post.boardTitle}</ListTitle>
                    <ListContent>{post.boardContent}</ListContent>
                </Content>
            ))}
            <div ref ={observer}/>
            <div>{isLoading ? <Loading /> : "No More Data"} </div>
        </Wrapper>
    )
}

export default PostListComponent
