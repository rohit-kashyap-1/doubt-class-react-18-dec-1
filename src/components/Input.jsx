import React from 'react'
import styled from 'styled-components'
const InputBox = styled.input`
background-color:#2c2c2c;
color:white;
border-radius:4px;
height:50px;
padding-left:10px;
border:none;
outline:none;

&:focus{
    background-color:white;
    color:#2c2c2c;
}
`

export default function Input() {
  return (
   <InputBox  />
  )
}
