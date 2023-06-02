import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const Credits = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div>
       <div className=' outlineText introText'>

Creator & Co-Artistic Producer: Wren Brian
</div><div className='outlineText introText'>
Dramaturg & Co-Artistic Producer: Patti Flather
</div><div className='outlineText introText'>
Developer: Harrison Sparrow
</div><div className='outlineText introText'>
Sound Designer, Composer, Audio Producer: Jordy Walker
</div><div className='outlineText introText'>
Audio Recording Director & Voice Actor: Meredith Pritchard
</div><div className='outlineText introText'>
Voice Actors: Christine Genier, Ken Green, Carman Lam Brar, Ames Val
</div><div className='outlineText introText'>
Funded by Canada Council for the Arts with rehearsal space thanks to @YAC Residency Program and Yukon Government Department of Tourism and Culture.
</div><div className='outlineText introText'>
Original one act play researched & developed with funding from Canada Council for the Arts. Development support from Manitoba Association of Playwrights for a half day workshop with Yvette Nolan as dramaturg. Special thanks to weaving consultant Heather Meiklejohn.
</div>

<p className='outlineText Button' onClick={()=>helper()}>Back to Wrap Up</p>
    </div>
  )
}

export default Credits
