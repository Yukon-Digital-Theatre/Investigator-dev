import { useEffect, useState } from 'react';
import EndingFamilyEmail from '../components/EndingFamilyEmail';
import EndingReport from '../components/EndingReport';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';
import { FALSE } from 'sass';




const FollowUpOne = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    



    const narratorTextMode = useSelector((state:any)=> state.textMode.text);
    const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
    
    const dialogue = narratorAudio[16].audio;
    const dialoguept2 = narratorAudio[17].audio;
    
    const [togglePlay, setTogglePlay] = useState(true)
    
    const [togglePT, setTogglePT] = useState(true)
    const [audioEnded, setAudioEnded] = useState(false);
    function helperAudio(){
      setTimeout(() => {
        if(!dialoguept2.playing()){
          dialoguept2.play()
          setTogglePT(false)
      }
      },1000);
    }
    


    function helperAudioPP() {
      
      
      if(togglePT){
      
      if(dialogue.playing()){
          dialogue.pause();
        
          setTogglePlay(false);
      }else{
    dialogue.play();
    
    setTogglePlay(true);
    
    
      }
    
    }else{
      if(dialoguept2.playing()){
        dialoguept2.pause();
      
        setTogglePlay(false);
    }else{
  dialoguept2.play();
  
  setTogglePlay(true);
    }
    }
  }
    
    useEffect(() => {
      
    
      return () => {
      
      }
    }, [togglePlay])
    
 


    
    dialoguept2.on("end", ()=> helperOnEnd() )
    
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
      dialoguept2.seek(dialoguept2.duration()-0.05);
      dialoguept2.pause();
      setTogglePlay(false);
      setAudioEnded(true);
    }


  return (
    <>
    {narratorTextMode&&<div className='lettercontainer'>
<EndingReport/>
<EndingFamilyEmail/>


    </div>}
    {narratorMode&& <div className='navbar'>
       {togglePlay?<PauseButton onClick={()=>helperAudioPP()}/>:<PlayButton onClick={()=>helperAudioPP()}/>}
       </div>}
    {audioEnded&&<p className=' introText outlineText Button' onClick={()=>helper()}>Continue</p>}
       {narratorTextMode&&<p className=' introText outlineText Button' onClick={()=>helper()}>Continue</p>}
    </>
  )
}

export default FollowUpOne