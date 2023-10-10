import  { useEffect, useRef, useState } from 'react'
import { choiceTextData, scriptMorePressure } from '../data/textData'
import StoryText from '../components/StoryText'
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'
import { Howl } from 'howler'
import { useSelector, useDispatch } from 'react-redux'
import Choice from '../components/Choice'
import { femaleAudio, maleAudio, nonBinaryAudio } from '../data/characterAudioData'
import { updatePage } from '../reducers/currentPage/currentPageSlice'
import { femaleChoiceTextData, femaleMorePressureTextTiming, maleChoiceTextData, maleMorePressureTextTiming, nonBinaryChoiceTextData } from '../data/timingData'
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';
import { nonBinaryMorePressureTextTiming } from '../data/tempnonbinary'





const MorePressure = () => {
  

  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const invTextMode = useSelector((state:any)=> state.invTextMode.text);
  const invMode = useSelector((state:any)=> state.invAudioMode.audio);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
  

  
  
 
  if(narratorMode&&narratorTextMode){
     return(<MorePressureBoth/>)
    }else if (narratorMode&&!narratorTextMode){
      return(<MorePressureAudioOnly/>)
    }else{
      return(<MorePressureTextOnly/>)
    }


}

export default MorePressure

const MorePressureBoth = () =>{


  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=5;
  let dialogue: Howl;
  








  let choiceData: any[];
  const [audioEnded, setAudioEnded] = useState(false);
  if(voicePref==="female"){
     dialogue=femaleAudio[id].audio;
     choiceData=femaleMorePressureTextTiming;
  }else if(voicePref==="male"){
     dialogue=maleAudio[id].audio;
     choiceData=maleMorePressureTextTiming;
  }else{
     dialogue=nonBinaryAudio[id].audio;
     choiceData=nonBinaryMorePressureTextTiming;
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

  {temp.map((item, index) => { return <StoryText key={item.id} item={item} leaving={temp.length > 8 && index === 0} />; })}

  </div>
  )
}

const MorePressureAudioOnly = () =>{

  const dispatch= useDispatch();
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=5;
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
 

const [audioEnded, setAudioEnded] = useState(false);

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

  dialogue.on("end", ()=> helper2() )
  

function helper2(){
  setTimeout(() => {dispatch(updatePage("BreakItDown"))}, 100);
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


const MorePressureTextOnly = () => {
  
  let scriptLength:number = scriptMorePressure.length;
  const [temp, setTemp]= useState ([scriptMorePressure[0]]);
  const [disabled, setDisabled]= useState (false);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(1)
 
  
  function helper(): void {
 
    if(scriptLength===currentScriptIndex){
    setDisabled(true);
    }
  if(currentScriptIndex<scriptLength){
    setDisabled(false);
  setCurrentScriptIndex(currentScriptIndex+1);
  setTemp((temp)=>[...temp, scriptMorePressure[currentScriptIndex]]);
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

