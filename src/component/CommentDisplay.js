import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height : 2em;
    display: inline-block;
    margin-bottom : 40px;
   
`

const DisplayName = styled.div`
    font-weight : 400;
    font-size: 1em;
    margin-bottom : 0.6em;
    margin-top: 0.2em;
   
`

const DisplayContent = styled.div`
    font-size : 1.4em;
    border-bottom: 2px solid rgb(50, 84, 137, 0.1);
`

function CommentDisplay(props) {

    const {username, content} = props;

    return (
        <Wrapper>
                <DisplayName>
                    {username}
                </DisplayName>
                <DisplayContent>
                    {content}
                </DisplayContent>
        </Wrapper>
    )
}

export default CommentDisplay
