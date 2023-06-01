import  {  useState } from 'react'
import { scriptEndingTwo } from '../data/textData'
import StoryText from '../components/StoryText'
/*import { nonBinaryAudio } from '../data/backgroundAudioData'
import { nonBinaryEndingTwoTextTiming } from '../data/textTimingData'
import StoryTextAuto from '../components/StoryTextAuto'*/
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'


const EndingTwo = () => {
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

export default EndingTwo