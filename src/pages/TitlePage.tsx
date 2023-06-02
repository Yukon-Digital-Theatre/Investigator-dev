import  { useEffect } from 'react'
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { backgroundAudio } from '../data/backgroundAudioData';
import { narratorAudio } from '../data/narratorAudioData';

const TitlePage = () => {

    const audio = backgroundAudio[0].audio;
    const dialogue = narratorAudio[0].audio;

    const dispatch= useDispatch();
  
    useEffect(() => {
        if(!audio.playing()){
            audio.play();
        }
        setTimeout(() => {
          if(!dialogue.playing()){
            dialogue.play();
        }
        }, 2500);
  
    
        
        setTimeout(() => {
        dispatch(updateHalo(1));
      }, 6000);


      setTimeout(() => {
        dispatch(updatePage("IntroQOne"));
      }, 7000);
        
      return () => {
        
      }
    }, [audio,dispatch])
    

    
    
    
    
      return (
        <div>
        <div className='titleText outlineText'>The Investigator</div>
        </div>
    
      )
    
}

export default TitlePage