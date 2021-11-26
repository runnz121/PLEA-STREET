import React,{useState,useEffect} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import styled from "styled-components"

const Wrapper = styled.div`
    margin-top:30px;
    margin-bottom: 7vh;
    text-align:center;
`

function ModalComponent(props) {
    const [open, setOpen] = useState(false)
    const{header, content} = props;
    const [contents, setContents] = useState("")
    console.log("contentsss",contents)
  
    useEffect(()=>{setContents(content[0].replaceAll("\n", " "))},[content])


    const onCloseHandler = () => {
        setOpen(false);
    }

    const onOpenHandler = () => {
        setOpen(true);
    }


    return (
        <Wrapper>
            <Modal
                onClose={onCloseHandler}
                onOpen={onOpenHandler}
                open={open}
                trigger={<Button basic color='blue'>{header}</Button>}>
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content>{contents}</Modal.Content>
            </Modal>
         </Wrapper>
    )
}

export default ModalComponent


