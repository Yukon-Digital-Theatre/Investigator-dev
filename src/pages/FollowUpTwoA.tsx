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
    
    
    
    
    
    const dialogue = narratorAudio[16].audio;
    
    function helperAudio(){
      setTimeout(() => {
        if(!dialoguept2.playing()){
          dialoguept2.play()
      }
      },1000);
    }
    
    const dialoguept2 = narratorAudio[18].audio;
    
    
    dialogue.on('end', ()=>helperAudio());
    


    dialoguept2.on('end', ()=>helperAudio2());
    function helperAudio2(){
      setTimeout(() => {
        if(!dialoguept3.playing()){
          dialoguept3.play()
      }
      },1000);
    }
    
    const dialoguept3 = narratorAudio[19].audio;



    useEffect(() => {
      setTimeout(() => {
        if(!dialogue.playing()){
        narratorMode&&dialogue.play();
      }
      },1000);
     
    
      return () => {
        
      }
    }, [])




  return (
    <>
    {narratorTextMode&&<div className='lettercontainer'>

        <EndingReport />
        <EndingICCEmail />
        <EndingLetter />
    
        </div>}
        
        <p className='Button' onClick={() => helper()}>Yes</p>
        </>
    
  )
}

export default FollowUpTwoA