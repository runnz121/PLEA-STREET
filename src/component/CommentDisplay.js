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
<<<<<<< Updated upstream
    font-size: 1em;
    margin-bottom : 0.6em;
    margin-top: 0.2em;
=======
    font-size: 1.4em;
    margin-bottom : 0.6em;
    margin-top: 0.2em;
    padding-left:0.6em;
>>>>>>> Stashed changes
   
`

const DisplayContent = styled.div`
<<<<<<< Updated upstream
    font-size : 1.4em;
    border-bottom: 2px solid rgb(50, 84, 137, 0.1);
=======
    font-size : 1em;
    border-bottom: 2px solid rgb(50, 84, 137, 0.1);
    padding-left:1em;
>>>>>>> Stashed changes
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
