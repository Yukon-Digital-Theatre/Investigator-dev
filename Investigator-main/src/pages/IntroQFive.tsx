import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';

const IntroQFive = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("StoryBackground"));

}

function helperTwo(){
  dispatch(updateHalo(2));
  setTimeout(() => {
    dispatch(updatePage("MeetTheWeaver"));
  }, 1000);
    

}


  return (
    <div>
    <p className='outlineText introBigText'>This is a world out of time and place. It is similar to our own.
	However, this country, in this world, is recovering from a war stretching over several years.
	    The war ended only six weeks ago.</p>


    <p className='outlineText introBigText'>Would you like to learn more about the history of this world before continuing?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default IntroQFive
