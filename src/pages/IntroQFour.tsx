import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const IntroQFour = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("IntroQFive"));

}

function helperTwo(){
    dispatch(updatePage("Intro"));

}


  return (
    <div>
    <p className='outlineText introBigText'>     You may change your delivery preference by clicking the gear icon at any time.

If you exit out of the browser midway through, you will not be able to return to the same place without starting the experience over again. 

If you selected an audio option at times you will see a pause button and a back button if you need it, although it is recommended you do not pause or go back.

You will be limited in how far back you can go.

If you selected text only you can only go forward in the experience by clicking the arrow when it appears.

Please ensure you are in a quiet, private, and comfortable place. Turn off notifications on any devices near you.

Are You Ready?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText Button outlineText' onClick={()=>helperTwo()}>No, go back to the beginning</p>
    </div>
  )
}

export default IntroQFour