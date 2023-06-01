import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import styled  from "styled-components";


const Container = styled.div`
background-color:transparent;
flex:2;
max-height:20%;
display:flex;
justify-content: space-evenly;
`;

const Item = styled.div`

box-shadow: 1px 1px 10px 1px #ffffff;
background-color:transparent;
height:100%;
aspect-ratio: 1 / 1;
display: flex;
align-items: center;
justify-content: center;

&:hover{
cursor: pointer;
box-shadow: 1px 1px 10px 10px #ffffff;
}
&:active{
  box-shadow: 1px 1px 10px 1px #a8a8a8;
}
`;





const Navbar = () => {

  const {updateScript, log, currentScript, prevScript, pausePlay, wevFade, invFade} = useContext(AppContext);
  


  useEffect(() => {
    
  
    
  }, [])

  return (
    <Container>
      {true?(
      <><Item onClick = {updateScript}>{currentScript}</Item><Item onClick={log}>{prevScript}</Item><Item style={{"cursor":'not-allowed'}} onClick={wevFade}> noxt </Item></>
      ):(
        <><Item></Item><Item> noxt</Item></>
      )}
    </Container>
  )
}

export default Navbar