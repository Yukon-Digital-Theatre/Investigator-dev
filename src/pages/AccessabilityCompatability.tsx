import { useState } from 'react';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';

const AccessabilityCompatability = () => {
    
    
    const dispatch= useDispatch();


  
const [style, setStyle] = useState(false)

function helper(){
  setStyle(true);
  setTimeout(() => {
    dispatch(updatePage("TitlePage"));

  }, 2000);
}
 
    function helper2(): void {

      window.open('mailto:info@youaretheinvestigator.com?subject=Investigator%20Feedback');
     }


   
    

  return (
    <div    >

<p className='introBigText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}> This experience is designed to be used on a desktop or laptop computer in full screen mode, and should be compatible with Chrome, Edge and Firefox.


</p> 
<p className='introText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}>  While most will complete the experience within 60 minutes, if certain choices are selected it could take up to 70 mintues. The experience is over when you reach an end menu. 

</p> <p className='introText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}>. If you get stuck along the way or experience other issues please email so we can correct the glitch: 

</p>

<p className=' introText outlineText Button fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}} onClick={()=>helper2()}>
 info@youaretheinvestigator.com </p>
<p className='introText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}>
Thank you for joining in our process!</p>
<p className=' titleText outlineText Button '  style={style?{"animationDuration":"1s", "animationName":"fade-out","paddingLeft" :"37vw" , "paddingTop" :"8vh" }:{"animationName":"fade-in","paddingLeft" :"37vw" , "paddingTop" :"8vh" }} onClick={()=>helper()}>Continue</p>
    </div>
  )
}
export default AccessabilityCompatability