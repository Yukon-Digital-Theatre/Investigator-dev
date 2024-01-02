import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import logo1 from '../images/Yukon Gov Logo.png'
import logo2 from '../images/YAC Residency Logo.png'
import logo3 from '../images/CCA_RGB_colour_e.jpg'
import logo4 from '../images/YDTC Mountain Logo Light-100.jpg'

const Credits = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    
    <div>
      <div style={{"height":"10vh"}}>
     </div>
       <div className=' outlineText artistsText'>
      
Creator & Co-Artistic Producer: Wren Brian
</div><div className='outlineText artistsText'>
Dramaturg & Co-Artistic Producer: Patti Flather
</div><div className='outlineText artistsText'>
Developer: Harrison Sparrow
</div><div className='outlineText artistsText'>
Sound Designer, Composer, Audio Producer: Jordy Walker
</div><div className='outlineText artistsText'>
Audio Recording Director & Voice Actor: Meredith Pritchard
</div><div className='outlineText artistsText'>
Voice Actors: Christine Genier, Ken Green, Carman Lam Brar, Ames Val
</div><div className='outlineText artistsText'>
Funded by Canada Council for the Arts with rehearsal space thanks to @YAC Residency Program and Yukon Government Department of Tourism and Culture.
</div><div className='outlineText artistsText'>
Original one act play researched & developed with funding from Canada Council for the Arts. Development support from Manitoba Association of Playwrights for a half day workshop with Yvette Nolan as dramaturg. Special thanks to weaving consultant Heather Meiklejohn.
</div>
<div style={{"height":"5vh"}}>
     </div>
<div style={{"width":"100vw", 'display':'flex'}}>
    <div style={{"width":"12%"}} ></div>
     <img src={logo1} alt="logo" className='artistHeadshot' style={{"height":"14.2vh"}}></img>
     <div style={{"height":"5vh", "width":"1%"}}></div>
     <img src={logo2} alt="logo" className='artistHeadshot' style={{"height":"14.2vh"}}></img>
     <div style={{"height":"5vh", "width":"1%"}}></div>
     <img src={logo3} alt="logo" className='artistHeadshot' style={{"height":"14.2vh"}}></img>
     <div style={{"height":"5vh", "width":"1%"}}></div>
     <img src={logo4} alt="logo" className='artistHeadshot' style={{"height":"14.2vh"}}></img>
     <div style={{"width":"12%"}} ></div>
     </div>
<div style={{"height":"5vh"}}>
     </div>
<p className='outlineText Button'  style={{"margin":"0% 0% 0% 12%"}} onClick={()=>helper()}>Go Back To Menu</p>
<div style={{"height":"10vh"}}>
     </div>
    </div>
  )
}

export default Credits
