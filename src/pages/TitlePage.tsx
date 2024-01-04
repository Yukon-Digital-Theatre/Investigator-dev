import  { useEffect, useState } from 'react'
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { backgroundAudio } from '../data/backgroundAudioData';
import { narratorAudio } from '../data/narratorAudioData';

const TitlePage = () => {

    const audio = backgroundAudio[0].audio;
    const dialogue = narratorAudio[0].audio;

    const dispatch= useDispatch();
    const [style, setStyle] = useState(false);
    useEffect(() => {
        if(!audio.playing()){
            audio.play();
        }else{
          audio.mute(false);
        }
        setTimeout(() => {
          if(!dialogue.playing()){
            dialogue.play();
        }
        setStyle(true);
      
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
              <p className={style?'mainTitleText outlineText fadeIn':'mainTitleText inactiveText'} >The Investigator</p>


        </div>
    
      )
    
}

export default TitlePage