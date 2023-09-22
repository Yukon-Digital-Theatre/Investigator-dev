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

<p className='introBigText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}> Please note this website is a work in progress. 


</p> 
<p className='introText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}> It is a beta version and isn’t quite looking how we want yet and some features may not be available yet, but we’ll be making changes and hopefully getting everything working quick as we can. Feel free to view it now, and again later to see our progress or wait a bit longer to view the experience later when it’ll be more polished.

</p> <p className='introText outlineText fadeIn' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}>We invite feedback on your experience using it. Both what you like and didn’t like, but also if you encountered any glitches by emailing:

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