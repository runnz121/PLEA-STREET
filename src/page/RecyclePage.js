import React,{useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import samplejson from "../util/sample.json"
import styled from "styled-components"
import MenuBar from '../component/Menubar'
import ModalComponent from '../component/ModalComponent'


const Wrapper = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 0px auto;
    padding-bottom: 0px;
    height: 78vh;
`

const Top = styled.div`
    width : 100%;
    height: 5vh;
    padding-top: 2vh;
    display: flex;
    justify-content: space-around;
`

const Body = styled.div`
    width: 100%;
    height: 78vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
`

const BodyLeft = styled.div`
    width: 400px;
    height : 78vh;
`
const BodyRight = styled.div`
    width: 240px;
    height: 100%;
`
const ModalList = styled.div`
    display: flex;
    flex-direction:column;
    width: 150px;
    height: 70vh;
    margin: auto;
`

const NameList = styled.div`
    display: flex;
    flex-direction:column;
    width: 400px;
    height: 78vh;
`

const NameComponent = styled.div`
    font-weight: 600;
    margin-top:43px;
    margin-bottom: 7vh;
    text-align:center;
`


function Recycle(props) {

    const spenamearr = []
    const ex =[]
    const contents =[]
    const myobjarr =[]
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState("")

    //종류(세부품목 갯수만큼 담기)
    for(let i in samplejson){
        for(let j in samplejson[i].세부품목){
            spenamearr.push(samplejson[i].종류);
        }
    }
     console.log("arr",spenamearr)

     //세부품목
    for(let i in samplejson){
        for(let j of samplejson[i].세부품목){
            ex.push(j)
        }
    }

    //분리배출요령
    for(let i in samplejson){
        for(let j of samplejson[i].분리배출요령){
            contents.push(j)
        }
    }

    // console.log("종류",samplejson[0].종류)
    // console.log("세부품목",samplejson[0].세부품목)
    // console.log("분리배출요령",samplejson[0].분리배출요령)

    const onCloseHandler = (prop) => {
        setOpen(false);
       
    }

    const onOpenHandler = () => {
        setOpen(true);
    }

    const buttonHandler = (prop) => {
        setCurrent(prop)
    }

    console.log("myobj",myobjarr)
    

    return (
        <Wrapper>
            <MenuBar/>
            <Top/>
            <Body>
                <BodyLeft>
                <NameList>
                    {ex.map((name, idx) => (
                        <NameComponent key={idx}>
                        {name}
                        {"\n"}
                        </NameComponent>
                    ))}
                </NameList>
                </BodyLeft>
                <BodyRight>
                    <ModalList>
                        {samplejson?.map((sample,idx)=>(
                          <ModalComponent key={idx} header={sample.종류} content={sample.분리배출요령}/>
                        ))}
                    </ModalList>
                </BodyRight>
            </Body>
        </Wrapper>
    )
}

export default Recycle
