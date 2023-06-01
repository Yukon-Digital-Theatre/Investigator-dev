import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import styled  from "styled-components";
import { motion, progress } from 'framer-motion';
import { soundData } from '../Data';
import { AppContext } from '../App';


const Container = styled.div`
font-family: ${(props) => !props.inv && "'Instrument Sans', sans-serif"};

`;





const StoryText = (props) => {
  const {invScriptNum, wevScriptNum, playScript, soundMode, currentScript, updateScript} = useContext(AppContext);
  const scriptNum = props.inv ? invScriptNum:wevScriptNum;

  
  
  const audio = new Audio(soundData[1].url)
    const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
    const [stylesOne, setStylesOne] = useState({'background-color':"red"});
    const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
    const [stylesThree, setStylesThree] = useState({'opacity':"0"});
  const [currentLine, setCurrentLine] = useState(0);
    var stylesARR = [styles,stylesOne,stylesTwo,stylesThree];
    var setstylesARR = [setStyles,setStylesOne,setStylesTwo,setStylesThree];

   
    const navigate = useNavigate();
    var textLines =props.data[scriptNum].text.split('.');
    var renderedOutput = textLines.map((item, index) => <Container inv={props.inv} style={stylesARR[index]}> {item} </Container>)
    var textOnly = <Container inv={props.inv} style={stylesARR[0]}>{props.data[scriptNum].text}</Container>
  
    
  

    useEffect(() => {
      if (soundMode) {
        
        setstylesARR.map((item, index) => {
          
          
          setTimeout(() => {
            item({'animation':"fadeIn 1s"});
            console.log(renderedOutput.length);
           }, (1+index)*1000)
           
          })
           animate()
          }else{
            
            setStyles({'opacity':"0"});
            setStyles({'animation':"fadeIn 1s"});
            setTimeout(() => {
            setStyles({'opacity':"1"});
          }, 1000)
            
            }
          
        
        
      

      
      
        
    }, [scriptNum])



    function animate(){
      setstylesARR.map((item, index) => {
      setTimeout(() => {
        item({'opacity':"0"});
        console.log(renderedOutput.length);
        updateScript();
       }, 5000)
      })

     
   
      
    }
    
   
    

   
    
  
  return (
    <>
    {soundMode?(<Container inv={props.inv}>{renderedOutput}
      </Container>):(<Container inv={props.inv}>{textOnly}
      </Container>)}
    </>
    
  )
}

export default StoryText