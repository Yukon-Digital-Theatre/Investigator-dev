import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const IntroQThree = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("IntroQFour"));

}



  return (
    <div>
        <p>Character Choices</p>
    <p className='introText Button' onClick={()=>helper()}>Next</p>

    </div>
  )
}

export default IntroQThree