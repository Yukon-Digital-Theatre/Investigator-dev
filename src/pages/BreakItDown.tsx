import { useEffect, useRef, useState } from 'react'
import { choiceTextData, scriptBreakItDown } from '../data/textData'
import StoryText from '../components/StoryText'
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'
import { Howl } from 'howler'
import { useSelector } from 'react-redux'
import Choice from '../components/Choice'
import { femaleAudio, maleAudio, nonBinaryAudio } from '../data/characterAudioData'






const BreakItDown = () => {



  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const invTextMode = useSelector((state:any)=> state.invTextMode.text);
  const invMode = useSelector((state:any)=> state.invAudioMode.audio);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);


  if(narratorMode&&narratorTextMode){
    return(<div/>)
   }else if (narratorMode&&!narratorTextMode){
     return(<BreakItDownAudioOnly/>)
   }else{
     return(<BreakItDownTextOnly/>)
   }

}

export default BreakItDown  





const BreakItDownAudioOnly = () =>{
 
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=6;
  let dialogue: Howl;

  if(voicePref==="female"){
     dialogue=femaleAudio[id].audio;
  }else if(voicePref==="male"){
     dialogue=maleAudio[id].audio;
  }else{
     dialogue=nonBinaryAudio[id].audio;
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
 


function helper() {
  if(dialogue.playing()){
      dialogue.pause();
      stopInterval();
  }else{
dialogue.play();
startInterval();

queryAudioTime();


  }
  
}

  return(



    <div>
      
    {audioTime>=choiceTextData[id].time&&<Choice id={id}/>}
     <div onClick={()=>helper()}>play/pause</div>
    <div>{dialogue.duration()}</div>
    <div onClick={()=>!dialogue.playing()&&dialogue.seek(290)}>play/pause</div></div>
  )

}







const BreakItDownTextOnly = () => {
  let scriptLength:number = scriptBreakItDown.length;
  const [temp, setTemp]= useState ([scriptBreakItDown[0]]);

  const [disabled, setDisabled]= useState (false);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(1)
 
 
 
  function helper(): void {
 
      if(scriptLength===currentScriptIndex){
      setDisabled(true);
      }
    if(currentScriptIndex<scriptLength){
      setDisabled(false);
    setCurrentScriptIndex(currentScriptIndex+1);
    setTemp((temp)=>[...temp, scriptBreakItDown[currentScriptIndex]]);
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

