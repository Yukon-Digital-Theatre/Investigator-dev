import { useDispatch } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { memo, useEffect, useRef, useState } from 'react';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { updateInvAudioDelivery } from '../reducers/invAudioDeliveryMode/invAudioDeliveryModeSlice';
import { updateNarratorAudioDelivery } from '../reducers/narratorAudioDeliveryMode/narratorAudioDeliveryModeSlice';
import { updateTextDelivery } from '../reducers/textDeliveryMode/textDeliveryModeSlice';
import { backgroundAudio } from '../data/backgroundAudioData';
import { narratorAudio } from '../data/narratorAudioData';
import { Rings } from 'react-loader-spinner'

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












  
 intid=setInterval(() => {
    
let percent =0;

    let check=true;
    
   
 
  narratorAudio.map((item)=>{item.audio.state()==="loading"?(check=false):(percent+=1)});
  
if(loadPercent<percent){
loadAmount=(percent);
setLoadPercent(loadAmount/29);
}
  if(check){

    setLoaded(true);
    clearInterval(intid);
  }


  
  }, 1000);




function helper(){
  setStyle(true);
  setTimeout(() => {
    dispatch(updatePage("AccessabilityCompatability"));

  }, 2000);
}





  return (
    <>

      
        {loaded && <div className='Button introBigText outlineText' style={style ? { "animationName": "fade-out" } : { "animationName": "fade-in" }} onClick={() => helper()}>Click Here To Begin</div> }


{!loaded&&<div className='loadingText outlineText'>Loading...</div>}
{!loaded&&<div className='loadingText outlineText'>{(100*(loadPercent)).toFixed(2)}%</div>}


</>

  )
}

export default Intro