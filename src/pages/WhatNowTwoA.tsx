import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const WhatNowTwoA = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("FollowUpTwoA"));

}

function helperTwo(){
    dispatch(updatePage("WrapUp"));

}


  return (
    <div>
    <p className='introText outlineText'> You made your choices and ultimately you chose to let this Weaver go, but arrest others.</p>
    <p className='introText outlineText'> Now that you’ve made your choice, your time being the investigator in this world is coming to an end. However, this world continues, time moves on, and they must live with your choice. Would you like a glimpse of what is to come in this world a year from now?

    </p>
    <p className='Button introText outlineText' onClick={()=>helper()}>Yes</p>
    <p className='Button introText outlineText' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default WhatNowTwoA