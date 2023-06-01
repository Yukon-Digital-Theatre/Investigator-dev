import EndingICCEmail from '../components/EndingICCEmail';
import EndingLetter from '../components/EndingLetter';
import EndingReport from '../components/EndingReport';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const FollowUpTwoA = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div className='lettercontainer'>

<EndingReport/>
<EndingICCEmail/>
<EndingLetter/>
<p className='Button' onClick={()=>helper()}>Yes</p>
    </div>
  )
}

export default FollowUpTwoA