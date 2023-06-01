import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const ContentWarning = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("ContentWarningSpecific"));
    
    }
    
    function helperTwo(){
        dispatch(updatePage("IntroQFour"));
    
    }

  return (
    <div>
<p className='introBigText outlineText'> The experience mentions directly and indirectly a fictional genocide which took place recently in conjunction with a war. Would you like to see more specific content warnings?
</p>

<p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default ContentWarning
