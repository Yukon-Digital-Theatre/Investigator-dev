import EndingLetter from '../components/EndingLetter';
import EndingNewsPaper from '../components/EndingNewsPaper';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const FollowUpTwoB = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div className='lettercontainer'>
<EndingLetter/>
<EndingNewsPaper/>

<p className='Button' onClick={()=>helper()}>Yes</p>
    </div>
  )
}

export default FollowUpTwoB