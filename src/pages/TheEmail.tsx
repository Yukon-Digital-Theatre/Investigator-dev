import  { useEffect, useRef, useState } from 'react'
import { choiceTextData, scriptTheEmail } from '../data/textData'
import StoryText from '../components/StoryText'
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'
import { narratorAudio } from '../data/narratorAudioData'
import { useSelector, useDispatch } from 'react-redux'
import Choice from '../components/Choice'
import { updatePage } from '../reducers/currentPage/currentPageSlice'
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';
import { theEmailTextTiming } from '../data/timingData'







const TheEmail = () => {
  

  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const invTextMode = useSelector((state:any)=> state.invTextMode.text);
  const invMode = useSelector((state:any)=> state.invAudioMode.audio);
  const voicePref = useSelector((state:any)=> state.voicePref.voice);
  

  
  
 
  if(narratorMode&&narratorTextMode){
     return(<div/>)
    }else if (narratorMode&&!narratorTextMode){
      return(<TheEmailAudioOnly/>)
    }else{
      return(<TheEmailTextOnly/>)
    }


}

export default TheEmail



const EndingOneBoth = () =>{


  const voicePref = useSelector((state:any)=> state.voicePref.voice);
const id=8;
 








  let choiceData: any[];
  const [audioEnded, setAudioEnded] = useState(false);
 
  const dialogue = narratorAudio[9].audio;


  const [temp, setTemp]= useState ([theEmailTextTiming[0]]);
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


const TheEmailAudioOnly = () =>{

  const dispatch= useDispatch();
 
  const dialogue = narratorAudio[9].audio;




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
const [audioEnded, setAudioEnded] = useState(false);
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
  }else{
dialogue.play();
startInterval();

queryAudioTime();





  }
  setTogglePlay(!togglePlay);
  
}

useEffect(() => {
  

  return () => {
  
  }
}, [togglePlay])

  dialogue.on("end", () => helper2() )
  

function helper2(){
  setTimeout(() => {dispatch(updatePage("Admission"))}, 100);
}



  return(



    <div>
      

     
     <div className='navbar'>
     {togglePlay?<PauseButton onClick={()=>helper()}/>:<PlayButton onClick={()=>helper()}/>}
     </div>
    </div>
  )

}




const TheEmailTextOnly = () => {
let scriptLength:number = scriptTheEmail.length;
const [temp, setTemp]= useState ([scriptTheEmail[0]]);
const [disabled, setDisabled]= useState (false);
const [currentScriptIndex, setCurrentScriptIndex] = useState(1)



function helper(): void {

    if(scriptLength===currentScriptIndex){
    setDisabled(true);
    }
  if(currentScriptIndex<scriptLength){
    setDisabled(false);
  setCurrentScriptIndex(currentScriptIndex+1);
  setTemp((temp)=>[...temp, scriptTheEmail[currentScriptIndex]]);
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

