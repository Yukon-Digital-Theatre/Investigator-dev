import { useDispatch } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useEffect, useRef, useState } from 'react';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { updateInvAudioDelivery } from '../reducers/invAudioDeliveryMode/invAudioDeliveryModeSlice';
import { updateNarratorAudioDelivery } from '../reducers/narratorAudioDeliveryMode/narratorAudioDeliveryModeSlice';
import { updateTextDelivery } from '../reducers/textDeliveryMode/textDeliveryModeSlice';
import { backgroundAudio } from '../data/backgroundAudioData';
import { maleAudio, femaleAudio, nonBinaryAudio } from '../data/characterAudioData';
import { narratorAudio } from '../data/narratorAudioData';
import { Rings } from 'react-loader-spinner'
import { Button } from '@mui/material';

const Intro = () => {

const dispatch= useDispatch();
  let intid;
const [style, setStyle] = useState(false)
const [loaded, setLoaded] = useState(false)
dispatch(updateHalo(0));
dispatch(updateInvAudioDelivery(true))
dispatch(updateNarratorAudioDelivery(true))
dispatch(updateTextDelivery(true));












  
 let intId=setInterval(() => {
    


    let check=true;
  backgroundAudio.map((item)=>{item.audio.state()==="loading"&&(check=false)})
  narratorAudio.map((item)=>{item.audio.state()==="loading"&&(check=false)});
  maleAudio.map((item)=>{item.audio.state()==="loading"&&(check=false)});
  femaleAudio.map((item)=>{item.audio.state()==="loading"&&(check=false)});
  nonBinaryAudio.map((item)=>{item.audio.state()==="loading"&&(check=false)});

  if(check){

    setLoaded(true);
    clearInterval(intId);
  }
  console.log(check)
    
  }, 500);




function helper(){
  setStyle(true);
  setTimeout(() => {
    dispatch(updatePage("AccessabilityCompatability"));

  }, 2000);
}

  return (
    <><div>

      <>
        {loaded ? <div className='Button introBigText outlineText' style={style ? { "animationName": "fade-out" } : { "animationName": "fade-in" }} onClick={() => helper()}>Click Here To Begin</div> : <Rings
          height="100"
          width="100"
          color="#575757"
          radius="10"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading" />}</>

</div>
{!loaded&&<div className='loadingText outlineText'>Loading...</div>}


</>

  )
}

export default Intro