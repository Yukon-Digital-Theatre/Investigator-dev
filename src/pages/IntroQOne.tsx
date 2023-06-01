import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';



const IntroQOne = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("IntroQTwo"));

}


  return (
    <div>
     
     
    <h1 className ='outlineText introBigText'> To begin the experience, please select your preference for the narration:</h1>
    <p className='introText Button outlineText disabled'>Audio Only</p>
    <p className='introText Button outlineText' onClick={()=>helper()}>Text Only</p>
    <p className='introText Button outlineText disabled'>Both Audio and Text</p>
    </div>
  )
}

export default IntroQOne