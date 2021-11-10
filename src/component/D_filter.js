import React,{useState, useRef} from 'react'
import styled from "styled-components"
import DownShift from "./DownShift";


function D_filter({setGu}) {

    const [selectedGu, setSelectedGu] = useState("");
    console.log("selected",selectedGu)

    const gu = [
        {value: "강동구"}, 
        {value: "강남구"},
        {value: "강서구"},
        {value: "강북구"},
        {value: "관악구"},
        {value: "광진구"},
        {value: "구로구"},
        {value: "금천구"},
        {value: "노원구"},
        {value: "동대문구"},
        {value: "도봉구"},
        {value: "동작구"},
        {value: "마포구"},
        {value: "서대문구"},
        {value: "성동구"},
        {value: "성복구"},
        {value: "서초구"},
        {value: "송파구"},
        {value: "영등포구"},
        {value: "용산구"},
        {value: "양천구"},
        {value: "은평구"},
        {value: "종로구"},
        {value: "중구"},
        {value: "중랑구"}
        ]

    const handleCreate = (data) => {
        setSelectedGu(data);
        
        setGu(selectedGu)
        console.log("filter", data)
    }

    return (
        <DownShift items={gu} onCreate={handleCreate}/>
    )
}

 export default D_filter
