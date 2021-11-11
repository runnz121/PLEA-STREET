import React, { useState } from 'react'
import loca from "../util/loca.json"
import { Dropdown } from 'semantic-ui-react';


function B_list({setting}) {

  const [all, setAll] = useState("")

  // const locas = [{text:loca[1].자치구명+loca[1].설치위치, value:loca[1].자치구명+loca[1].설치위치, key:1}]

  const locas = new Array()

  for(var i=0; i<loca.length; i++) {
    
    locas.push({text:loca[i].자치구명 + ' ' + loca[i].도로명 + ' ' + loca[i].설치위치, value:loca[i].자치구명 + ' ' + loca[i].도로명 + ' ' + loca[i].설치위치, key:i})
    // console.log(value)
  }

  const handleChange = (e, {value}) => {
    let name = e.target.textContent;
    setAll(name)
    setting(name)
  }
  console.log("location",all)

  const {currentValue} = all

  return (
    <Dropdown basic color='blue'
      options={locas}
      placeholder=''
      selection
      fluid
      value={currentValue}
      onChange={handleChange}
    />
   
  )
}

export default B_list
