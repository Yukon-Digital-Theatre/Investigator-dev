import { choiceTextData, scriptDownToBusiness } from '../data/textData'
import StoryText from '../components/StoryText'
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'
import { useEffect, useRef, useState } from 'react';
import Choice from '../components/Choice';
import { Howl } from 'howler';
import { useDispatch, useSelector } from 'react-redux';
import { femaleAudio, maleAudio, nonBinaryAudio } from '../data/characterAudioData';
import { femaleChoiceTextData, femaleDownToBusinessTextTiming, maleChoiceTextData, maleDownToBusinessTextTiming, nonBinaryChoiceTextData } from '../data/timingData';
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';
import { nonBinaryDownToBusinessTextTiming } from '../data/tempnonbinary';

import '../sass/App.scss';

const DownToBusiness = () => {



  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const invTextMode = useSelector((state:any)=> state.invTextMode.text);
  const invMode = useSelector((state:any)=> state.invAudioMode.audio);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);


  if(narratorMode&&narratorTextMode){
    return(<DownToBusinessBoth/>)
   }else if (narratorMode&&!narratorTextMode){
     return(<DownToBusinessAudioOnly/>)
   }else{
     return(<DownToBusinessTextOnly/>)
   }

}

export default DownToBusiness
  





const DownToBusinessAudioOnly = () =>{
  const [audioEnded, setAudioEnded] = useState(false);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=2;
  let dialogue: Howl;
  let choiceData;

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






  const DownToBusinessTextOnly = () =>{
  
  
  let scriptLength:number = scriptDownToBusiness.length;
  const [temp, setTemp]= useState ([scriptDownToBusiness[0]]);
  const [disabled, setDisabled]= useState (false);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(1)
 
 
 
  function helper(): void {
 
      if(scriptLength===currentScriptIndex){
      setDisabled(true);
      }
    if(currentScriptIndex<scriptLength){
      setDisabled(false);
    setCurrentScriptIndex(currentScriptIndex+1);
    setTemp((temp)=>[...temp, scriptDownToBusiness[currentScriptIndex]]);
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



const DownToBusinessBoth = () =>{

  const dispatch= useDispatch();
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=2;
  let dialogue: Howl;
  







  const [style, setStyle] = useState(false);
  let choiceData: any[];
  const [audioEnded, setAudioEnded] = useState(false);
  if(voicePref==="female"){
     dialogue=femaleAudio[id].audio;
     choiceData=femaleDownToBusinessTextTiming;
  }else if(voicePref==="male"){
     dialogue=maleAudio[id].audio;
     choiceData=maleDownToBusinessTextTiming;
  }else{
     dialogue=nonBinaryAudio[id].audio;
     choiceData=nonBinaryDownToBusinessTextTiming;
  }

  const [temp, setTemp]= useState ([choiceData[0]]);
  const [audioTime, setAudioTime] = useState(0);
 
  function queryAudioTime() {
      setAudioTime(dialogue.seek());
  }   
const intervalref = useRef<number | null>(null);


useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.play();
      startInterval();

queryAudioTime();
    }
  },2000);
  setTimeout(() => {
    setStyle(true);
  },3500);
  
return () => { 
}
}, [])

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

function helper2(){

  choiceData.map((item,index)=>{
    if(item.enterTime<=audioTime && audioTime<=item.exitTime){
      if(!temp.includes(item)){
      temp.push(item)
      }
     
      
    }
    if(temp.length>4){
    if(temp[0].exitTime<=audioTime){
      
      
        temp.shift();
        }
      }
    
    
})
  
console.log(temp)
return (<div/>)
}


return (
    
<div className='story_container'> 
       
       {helper2()}
       
       <div className='navbar'>
    {togglePlay?<PauseButton onClick={()=>helper()}/>:<PlayButton onClick={()=>helper()}/>}
    </div>
 
    <div className={style?'fadeIn':'inactiveText'} style={{'backgroundColor':"transparent",'display':"flex",'width':"100%", 'flex-direction': 'column',
    'justify-content': 'flex-end',
    'align-items': 'center'}as React.CSSProperties}>
    {temp.map((item, index) => { return <StoryText key={item.id} item={item} leaving={temp.length > 8 && index === 0} />; })}
    </div>
   </div>
  )
}
