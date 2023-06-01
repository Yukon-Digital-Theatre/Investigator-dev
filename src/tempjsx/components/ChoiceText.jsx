import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import styled  from "styled-components";



const Container = styled.div`


`;



const ChoiceText = (props) => {
  const {choiceScriptNum} = useContext(AppContext);
  
  
  
  useEffect(() => {
    
    
  
  }, )
  
  return (
    <Container inv>{props.data[choiceScriptNum].text}</Container>
  )
}

export default ChoiceText