import React, { useEffect, useState } from 'react'
import { ReactComponent as Volume } from '../images/svgs/lni_lni-volume-medium.svg';
import { ReactComponent as Mute } from '../images/svgs/lni_lni-volume-mute.svg'
import { ReactComponent as Cog } from '../images/svgs/lni_lni-cog.svg'
import { styled } from 'styled-components';
import { backgroundAudio } from '../data/backgroundAudioData';
import BasicModal from './SettingsModal';






const SettingsContainer=styled.div`
  
  display:flex;
  justify-content:flex-end;
  min-width:20vw;
`


const SettingsBar = () => {



const [toggleMute, setToggleMute] = useState(false)

useEffect(() => {
  
backgroundAudio.map((item)=>{item.audio.mute(toggleMute)});




  return () => {
  
  }
}, [toggleMute])




  return (
    <div className='settingsbar'>
<SettingsContainer>

  <Cog/>
    {!toggleMute?<Volume onClick={()=>setToggleMute(true)}/>:<Mute onClick={()=>setToggleMute(false)}/>}
    </SettingsContainer>

    </div>
  )
}

export default SettingsBar