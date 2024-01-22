import { useEffect, useState } from 'react';
import EndingICCEmail from '../components/EndingICCEmail';
import EndingLetter from '../components/EndingLetter';
import EndingReport from '../components/EndingReport';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';



const FollowUpTwoA = () => {
    
  const [audioEnded, setAudioEnded] = useState(false);
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

    const narratorTextMode = useSelector((state:any)=> state.textMode.text);
    const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
    
    const dialoguept2 = narratorAudio[18].audio;
    const dialoguept3 = narratorAudio[19].audio;
    
    
    
    const dialogue = narratorAudio[16].audio;
    
    const [togglePlay, setTogglePlay] = useState(true)
    
    const [togglePT, setTogglePT] = useState("1")
    
    function helperAudio(){
      setTimeout(() => {
        if(!dialoguept2.playing()){
          dialoguept2.play()
          setTogglePT("2")
      }
      },1000);
    }
    
    function helperAudio2(){
      setTimeout(() => {
        if(!dialoguept3.playing()){
          dialoguept3.play()
          setTogglePT("3")
      }
      },1000);
    }
    


    function helperAudioPP() {
      
      
      if(togglePT==="1"){
      
      if(dialogue.playing()){
          dialogue.pause();
        
          setTogglePlay(false);
      }else{
    dialogue.play();
    
    setTogglePlay(true);
    
    
      }
    
    }else if(togglePT==="2"){
      if(dialoguept2.playing()){
        dialoguept2.pause();
      
        setTogglePlay(false);
    }else{
  dialoguept2.play();
  
  setTogglePlay(true);
    }
    }else{

      if(dialoguept3.playing()){
        dialoguept3.pause();
      
        setTogglePlay(false);
    }else{
  dialoguept3.play();
  
  setTogglePlay(true);
    }
  
    }
  }
    
    useEffect(() => {
      
    
      return () => {
      
      }
    }, [togglePlay])
    
 


    dialoguept3.on("end", ()=> helperOnEnd() )
    dialoguept2.on("end", ()=> helperAudio2() )
    
    dialogue.on('end', ()=>helperAudio());
    
    useEffect(() => {
      setTimeout(() => {
        if(!dialogue.playing()){
        narratorMode&&dialogue.play();
      }
      },1000);
     
    
      return () => {
        
      }
    }, [])
   
    function helperOnEnd(){
      dialoguept3.seek(dialoguept3.duration()-0.05);
      dialoguept3.pause();
      setTogglePlay(false);
      setAudioEnded(true);
    }


  return (
    <>
    {narratorTextMode&&<div className='lettercontainer'>
    <EndingReport />
    <div style={{ "height": "10vh" }}>
              </div>
        <EndingICCEmail />
        <div style={{ "height": "10vh" }}>
              </div>
        <EndingLetter />
        <div style={{ "height": "1vh" }}>
              </div>


    </div>}
    {narratorMode&& <><div className='navbar'>
        {togglePlay ? <PauseButton onClick={() => helperAudioPP()} /> : <PlayButton onClick={() => helperAudioPP()} />}
      </div><div style={{ "height": "20vh" }}>
        </div></>}
    {(audioEnded&&!narratorTextMode)&&<p className=' introText outlineText Button' onClick={()=>helper()}>Continue</p>}
       {narratorTextMode&&<p className=' introText outlineText Button' onClick={()=>helper()}>Continue</p>}
    </>
  )
}

export default FollowUpTwoA




