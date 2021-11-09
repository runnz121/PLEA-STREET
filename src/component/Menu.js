import React from 'react'
import styled from "styled-components"

//버튼 차례데로 현재 로케, 필터링 구, 목록
import CurrentBtn from "./B_current.js"
import FilterBtn from "./D_filter.js"
import ListBtn from "./B_list.js"


const Menu_wrapper = styled.div`
    width : 100%;
    height : 8vh;
    border : 1px solid red;
    display: grid;
    grid-template-columns: 0.4fr 0.5fr 1fr 0.6fr;
    text-align: center;
`

const Div_area = styled.div`
    padding-top : 1.3vh;
    border: 2px solid black;
    height : 100%;
    width : 100%;;
`


function Menu() {




    return (
        <Menu_wrapper>

            <Div_area>
                <CurrentBtn/>
            </Div_area>

            <Div_area>
                <FilterBtn/>
            </Div_area>


            <Div_area/>


            <Div_area>
                <ListBtn/>
            </Div_area>

        </Menu_wrapper>
    )
}

export default Menu

