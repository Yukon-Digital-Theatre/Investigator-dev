import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import styled  from "styled-components";
import { wevData, invData, choiceData } from '../Data';


const Container = styled.div`
height:100%;
width:100%;
backdrop-filter: blur(8px);
;`



const Choices = (props) => {
  const {choiceScriptNum, choiceOne, choiceTwo} = useContext(AppContext);
  const choiceFunct = props.num ? choiceOne:choiceTwo;
  var text = "5";
    text = props.num ? choiceData[choiceScriptNum].choice:choiceData[choiceScriptNum].choicetwo;
  return (
    <Container onClick={choiceFunct}>
        {text}
    </Container>
  )
  }



export default Choices