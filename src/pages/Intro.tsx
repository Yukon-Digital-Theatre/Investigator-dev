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

const [style, setStyle] = useState(false)
const [loaded, setLoaded] = useState(false)
dispatch(updateHalo(0));
dispatch(updateInvAudioDelivery(true))
dispatch(updateNarratorAudioDelivery(true))
dispatch(updateTextDelivery(true));




useEffect(() => {
  
   

   setTimeout(() => {
    setLoaded(true);
   }, 10000);


  

}, [])





function queryLoaded() {
  let count =0;
  backgroundAudio.map((item)=>{(item.audio.state())==="loaded"&&(count+=1)});
  narratorAudio.map((item)=>{(item.audio.state())==="loaded"&&(count+=1)});
  maleAudio.map((item)=>{(item.audio.state())==="loaded"&&(count+=1)});
  femaleAudio.map((item)=>{(item.audio.state())==="loaded"&&(count+=1)});
  nonBinaryAudio.map((item)=>{(item.audio.state())==="loaded"&&(count+=1)});
  console.log(count)

}


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