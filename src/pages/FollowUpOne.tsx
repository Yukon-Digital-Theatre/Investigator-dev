import EndingFamilyEmail from '../components/EndingFamilyEmail';
import EndingReport from '../components/EndingReport';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const FollowUpOne = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div className='lettercontainer'>
<EndingReport/>
<EndingFamilyEmail/>

<p className='Button' onClick={()=>helper()}>Finish</p>
    </div>
  )
}

export default FollowUpOne