import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const IntroQTwo = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("ContentWarning"));

}

function helperTwo(){
    dispatch(updatePage("IntroQFour"));

}


  return (
    <div>
    <p className='outlineText introBigText'> Welcome to The Investigator, an interactive digital storytelling experience. 

This story is set out of time and place, in a world similar to our own, but not ours. 

You will be taking on the role of an investigator who has been sent to question a weaver. 

This experience will take about 40 to 60 minutes, depending on the choices you make. 

It is recommended you find a private, quiet, and comfortable place to get the most from this experience.

You may turn the ambiance soundtrack off or on via the sound button at any time.

Before you continue, would you like general content warnings?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default IntroQTwo