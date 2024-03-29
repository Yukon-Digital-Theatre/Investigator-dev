import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useState } from 'react';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { updateInvAudioDelivery } from '../reducers/invAudioDeliveryMode/invAudioDeliveryModeSlice';
import { updateNarratorAudioDelivery } from '../reducers/narratorAudioDeliveryMode/narratorAudioDeliveryModeSlice';
import { updateTextDelivery } from '../reducers/textDeliveryMode/textDeliveryModeSlice';
import { narratorAudio } from '../data/narratorAudioData';


const Intro = () => {

const dispatch= useDispatch();
  let intid: string | number | NodeJS.Timer | undefined;
const [style, setStyle] = useState(false)
const [loaded, setLoaded] = useState(false)
let loadAmount=0;
const [loadPercent, setLoadPercent] = useState(0)
dispatch(updateHalo(0));
dispatch(updateInvAudioDelivery(true))
dispatch(updateNarratorAudioDelivery(true))
dispatch(updateTextDelivery(true));













function helper(){
  setStyle(true);
  setTimeout(() => {
    dispatch(updatePage("AccessabilityCompatability"));

  }, 2000);
}



  


const wrapUpVisited = useSelector((state: any)=>state.wrapUpVisited.mode);

if(!wrapUpVisited){


 intid=setInterval(() => {
    
  let percent =0;
  
      let check=true;
      
     
   
    narratorAudio[0].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[1].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[2].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[3].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[4].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[5].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[6].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[7].audio.state()==="loading"?(check=false):(percent+=1);
    narratorAudio[8].audio.state()==="loading"?(check=false):(percent+=1);
    
  
    
  if(loadPercent<percent){
  loadAmount=(percent);
  setLoadPercent(loadAmount/9);
  }
    if(check){
  
      setLoaded(true);
      clearInterval(intid);
    
    }
    
      
  console.log("Loading...")
    
    }, 100);

  }else{
    setLoaded(true);
  }



  return (
    <>

      
        {loaded && <div className='Button introBigText outlineText fadeIn' style={style ? { "animationName": "fade-out" } : { "animationName": "fade-in" }} onClick={() => helper()}>Click Here To Begin</div> }


{!loaded&&<div className='loadingText outlineText LoadingAnimation'>Loading</div>}
{!loaded&&<div className='loadingText outlineText'>{(100*(loadPercent)).toFixed(2)}%</div>}


</>

  )
}

export default Intro