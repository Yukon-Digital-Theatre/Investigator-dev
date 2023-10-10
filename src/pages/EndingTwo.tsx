import  {  useEffect, useRef, useState } from 'react'
import { choiceTextData, scriptEndingTwo } from '../data/textData'
import StoryText from '../components/StoryText'
/*import { nonBinaryAudio } from '../data/backgroundAudioData'
import { nonBinaryEndingTwoTextTiming } from '../data/textTimingData'
import StoryTextAuto from '../components/StoryTextAuto'*/
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'
import { Howl } from 'howler'
import { useDispatch, useSelector } from 'react-redux'
import Choice from '../components/Choice'
import { femaleAudio, maleAudio, nonBinaryAudio } from '../data/characterAudioData'
import { femaleChoiceTextData, femaleEndingTwoTextTiming, maleChoiceTextData, maleEndingTwoTextTiming, nonBinaryChoiceTextData, nonBinaryEndingTwoTextTiming } from '../data/timingData'
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';





const EndingTwo = () => {



  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const invTextMode = useSelector((state:any)=> state.invTextMode.text);
  const invMode = useSelector((state:any)=> state.invAudioMode.audio);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);


  if(narratorMode&&narratorTextMode){
    return(<EndingTwoBoth/>)
   }else if (narratorMode&&!narratorTextMode){
     return(<EndingTwoAudioOnly/>)
   }else{
     return(<EndingTwoTextOnly/>)
   }

}


export default EndingTwo 


const EndingTwoBoth = () =>{

  const dispatch= useDispatch();
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=9;
  let dialogue: Howl;
  








  let choiceData: any[];
  const [audioEnded, setAudioEnded] = useState(false);
  if(voicePref==="female"){
     dialogue=femaleAudio[id].audio;
     choiceData=femaleEndingTwoTextTiming;
  }else if(voicePref==="male"){
     dialogue=maleAudio[id].audio;
     choiceData=maleEndingTwoTextTiming;
  }else{
     dialogue=nonBinaryAudio[id].audio;
     choiceData=nonBinaryEndingTwoTextTiming;
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


const EndingTwoAudioOnly = () =>{
 
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=9;
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
const [audioEnded, setAudioEnded] = useState(false);
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








const EndingTwoTextOnly = () => {



let scriptLength:number = scriptEndingTwo.length;
const [temp, setTemp]= useState ([scriptEndingTwo[0]]);

const [disabled, setDisabled]= useState (false);
const [currentScriptIndex, setCurrentScriptIndex] = useState(1)



function helper(): void {

    if(scriptLength===currentScriptIndex){
    setDisabled(true);
    }
  if(currentScriptIndex<scriptLength){
    setDisabled(false);
  setCurrentScriptIndex(currentScriptIndex+1);
  setTemp((temp)=>[...temp, scriptEndingTwo[currentScriptIndex]]);
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






/*
    const audio=nonBinaryAudio[9].audio;
    const [audioTime, setAudioTime] = useState(0);
    let temp: textTiming[] =[]
    let leaving: number [] =[]
    
    
    function queryAudioTime() {
        
        setAudioTime(audio.seek());
        audio.on('end', function(){
            console.log("ENDED");
            audio.seek(audio.duration()-0.01);
            
        })
        
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


    }
    
  }

  function helper2(){
    
    nonBinaryEndingTwoTextTiming.map((item,index)=>{
      if(item.enterTime<=audioTime && audioTime<=item.exitTime+1){
        temp.push(item)
        
      }
      
      
  })
  console.log(temp)
}





*/