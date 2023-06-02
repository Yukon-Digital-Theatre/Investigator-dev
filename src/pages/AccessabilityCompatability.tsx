import { useEffect } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const AccessabilityCompatability = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("TitlePage"));
    
    }
 
    function helper2(): void {

      window.open('mailto:info@youaretheinvestigator.com?subject=Investigator%20Feedback');
     }


   
    

  return (
    <div>

<p className='introBigText outlineText'> Please note this website is a work in progress. 


</p> 
<p className='introText outlineText'> It is a beta version and isn’t quite looking how we want yet and some features may not be available yet, but we’ll be making changes and hopefully getting everything working quick as we can. Feel free to view it now, and again later to see our progress or wait a bit longer to view the experience later when it’ll be more polished.

</p> <p className='introText outlineText'>We invite feedback on your experience using it. Both what you like and didn’t like, but also if you encountered any glitches by emailing:

</p>

<p className=' introText outlineText Button' onClick={()=>helper2()}>
 info@youaretheinvestigator.com </p>
<p className='introText outlineText'>
Thank you for joining in our process!</p>
<p className=' titleText outlineText Button' onClick={()=>helper()}>Continue</p>
    </div>
  )
}

export default AccessabilityCompatability
