import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const ContentWarningSpecific = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("IntroQFour"));
    
    }
    

  return (
    <div>

<p className='introBigText outlineText'> Allusions and discussion of the hair of murder victims being used in the carpets the weaver is weaving. Brief references to mass killings, war, sexual assault, enslaved children, relocation, deportation, starvation, assaults. </p> 
<p className='introBigText outlineText'> If you do not want to continue with this experience close your browser. </p>
<p className=' introText outlineText Button' onClick={()=>helper()}>Continue</p>
    </div>
  )
}

export default ContentWarningSpecific
