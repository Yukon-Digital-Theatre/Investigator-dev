import {  useEffect, useRef, useState } from 'react'

import '../sass/App.scss';
import { scriptMeetTheWeaver } from '../data/textData';
import StoryText from '../components/StoryText';
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'
import { backgroundAudio } from '../data/backgroundAudioData';
import { useDispatch, useSelector } from 'react-redux';
import { femaleAudio, maleAudio, nonBinaryAudio } from '../data/characterAudioData';
import { Howl } from 'howler';
import Choice from '../components/Choice';
import { choiceTextData } from '../data/textData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { femaleChoiceTextData, maleChoiceTextData, nonBinaryChoiceTextData } from '../data/timingData';
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';






const MeetTheWeaver = () => {
 const [audioEnded, setAudioEnded] = useState(false);
  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const invTextMode = useSelector((state:any)=> state.invTextMode.text);
  const invMode = useSelector((state:any)=> state.invAudioMode.audio);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
  useEffect(() => {
    
    backgroundAudio[0].audio.fade(1,0,2000);
    setTimeout(() => {
      backgroundAudio[0].audio.pause();
    }, 2000);

    if(!backgroundAudio[1].audio.playing()){
      backgroundAudio[1].audio.play()
      backgroundAudio[1].audio.fade(0,1,2000);
    }
  
    return () => {
      
    }
  }, [])

  
  
 
  if(narratorMode&&narratorTextMode){
     return(<MeetTheWeaverTextOnly/>)
    }else if (narratorMode&&!narratorTextMode){
      return(<MeetTheWeaverAudioOnly/>)
    }else{
      return(<MeetTheWeaverTextOnly/>)
    }
  
}
export default MeetTheWeaver

const MeetTheWeaverTextOnly = () =>{
 


  let scriptLength:number = scriptMeetTheWeaver.length;
  const [temp, setTemp]= useState ([scriptMeetTheWeaver[0]]);
  const [disabled, setDisabled]= useState (false);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(1)
  


 
 
 
  function helper(): void {
 
      if(scriptLength===currentScriptIndex){
      setDisabled(true);
      }
    if(currentScriptIndex<scriptLength){
      setDisabled(false);
    setCurrentScriptIndex(currentScriptIndex+1);
    setTemp((temp)=>[...temp, scriptMeetTheWeaver[currentScriptIndex]]);
    if(temp.length>4){
    temp.shift();
    }
    setTimeout(() => {
    }, 1000);
    
   
    }
  }

  
   
  return (
      
    <><div className='story_container'>

      {temp.map((item, index) => { return <StoryText key={item.id} item={item} leaving={temp.length > 4 && index === 0} />; })}
      </div>
      
    <ArrowButton className={disabled?'disabled':'none'} onClick={()=>helper()}/>
    
    
    
    
    
    </>
  


  )
}


const MeetTheWeaverAudioOnly = () =>{
  const dispatch= useDispatch();
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=0;
  let dialogue: Howl;

  let choiceData;
  const [audioEnded, setAudioEnded] = useState(false);
  if(voicePref==="female"){
     dialogue=femaleAudio[id].audio;
     choiceData=femaleChoiceTextData;
  }else if(voicePref==="male"){
     dialogue=maleAudio[id].audio;
     choiceData=maleChoiceTextData;
  }else{
     dialogue=nonBinaryAudio[id].audio;
     choiceData=nonBinaryChoiceTextData;
  }


  useEffect(() => {
    if(!dialogue.playing()){
      dialogue.play();
      startInterval();

queryAudioTime();
    }
  return () => { 
  }
}, [])

const [audioTime, setAudioTime] = useState(0);
   
    function queryAudioTime() {
        setAudioTime(dialogue.seek());
    }   
  const intervalref = useRef<number | null>(null);

  
  const startInterval = () => {
    if (intervalref.current !== null) return;
    intervalref.current = window.setInterval(() => {
      queryAudioTime();
    }, 100);
  };

  
  const stopInterval = () => {
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };

 
  useEffect(() => {
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);



useEffect(() => {
    console.log(audioTime);

  return () => {
    
  }
}, [audioTime])


const [togglePlay, setTogglePlay] = useState(true)


function helper() {
  if(dialogue.playing()){
      dialogue.pause();
      stopInterval();
      setTogglePlay(false);
  }else{
dialogue.play();
startInterval();
setTogglePlay(true);

queryAudioTime();





  }

  
}

useEffect(() => {
  

  return () => {
  
  }
}, [togglePlay])




  dialogue.on("end", ()=> helperOnEnd() )
  

  function helperOnEnd(){
    dialogue.seek(dialogue.duration()-0.05);
    dialogue.pause();
    setTogglePlay(false);
  }
  


  return(



    <div>
      
    {audioTime>=choiceData[id].time&&<Choice id={id}/>}
    <div className='navbar'>
     {togglePlay?<PauseButton onClick={()=>helper()}/>:<PlayButton onClick={()=>helper()}/>}
     </div>
  
</div>
  )

}







  const MeetTheWeaverBoth = () =>{

  }

/* AUDIO STUFF
    (const audio=femaleAudio[0].audio;
    const [audioTime, setAudioTime] = useState(0);
   
    function queryAudioTime() {
        setAudioTime(audio.seek());
    }   
  const intervalref = useRef<number | null>(null);

  
  const startInterval = () => {
    if (intervalref.current !== null) return;
    intervalref.current = window.setInterval(() => {
      queryAudioTime();
    }, 100);
  };

  
  const stopInterval = () => {
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };

 
  useEffect(() => {
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);

useEffect(() => {
    console.log(audioTime);

  return () => {
    
  }
}, [audioTime])




  function helper() {
    if(audio.playing()){
        audio.pause();
        stopInterval();
    }else{
audio.play();
startInterval();

queryAudioTime();


    }
    
  }

  function helper2(){
    
    femaleMeetTheWeaverTextTiming.map((item,index)=>{
      if(item.enterTime<=audioTime && audioTime<=item.exitTime){
        temp.push(item.text)
        
       
        
      }
      
      
  })
  console.log(temp)

 return (
      
         <> 
         
        {helper2()}
    <div onClick={()=>helper()}>play/pause</div>
    <div>----------</div>
    {temp.map((item,index)=>{return<div style={{'animationName':"fade-in",'animationDuration':"2s"}}>{item}</div>})}
    <div>----------</div>
  }
  */
 



  
  