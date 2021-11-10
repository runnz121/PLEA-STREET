import React, { useState,useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'

function TestPage() {

const [gu, setGu] = useState("")

const gus = [
    {text: "강동구", value: "강동구", key : 1}, 
    {text: "강남구", value: "강남구", key : 2},
    {text: "강서구", value: "강서구", key : 3},
    {text: "강북구", value: "강북구", key : 4},
    {text: "관악구", value: "관악구", key : 5},
    {text: "광진구", value: "광진구", key : 6},
    {text: "구로구", value: "구로구", key : 7},
    {text: "금천구", value: "금천구", key : 8},
    {text: "노원구", value: "노원구", key : 9},
    {text: "동대문구", value: "동대문구", key : 10},
    {text: "도봉구", value: "도봉구", key : 11},
    {text: "동작구", value: "동작구", key : 12},
    {text: "마포구", value: "마포구", key : 13},
    {text: "서대문구", value: "서대문구", key : 14},
    {text: "성동구", value: "성동구", key : 15},
    {text: "성북구", value: "성북구", key : 16},
    {text: "서초구", value: "서초구", key : 17},
    {text: "송파구", value: "송파구", key : 18},
    {text: "영등포구", value: "영등포구", key : 19},
    {text: "용산구", value: "용산구", key : 20},
    {text: "양천구", value: "양천구", key : 21},
    {text: "은평구", value: "은평구", key : 22},
    {text: "종로구", value: "종로구", key : 23},
    {text: "종구", value: "중구", key : 24},
    {text: "중랑구", value: "중랑구", key : 25}
    ]

    const handleChange = (e, {value}) => {
        console.log(value);
        let name = e.target.textContent;
        console.log(name)
    }

    const {currentValue} = gu

    return (
        <Dropdown
        options={gus}
        placeholder='Choose Gu'
        selection
        fluid
        value={currentValue}
        onChange={handleChange}
      />
    )
}

export default TestPage
