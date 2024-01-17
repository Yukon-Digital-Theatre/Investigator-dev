import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PlayButton } from '../images/svgs/lni_lni-play.svg';
import { ReactComponent as PauseButton } from '../images/svgs/pause.svg';



const WorldBackground = () => {
  
      
  const [audioEnded, setAudioEnded] = useState(false);
      const dispatch= useDispatch();
  
      function helper(){
          dispatch(updatePage("WrapUp"));
      
      }
      const narratorTextMode = useSelector((state:any)=> state.textMode.text);
      const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
      
      const dialogue = narratorAudio[8].audio;
      
  const [togglePlay, setTogglePlay] = useState(true)
  
  
  function helperAudio() {
    if(dialogue.playing()){
        dialogue.pause();
      
        setTogglePlay(false);
    }else{
  dialogue.play();
  
  setTogglePlay(true);
  
    }
  
    
  }
  
  useEffect(() => {
    
  
    return () => {
    
    }
  }, [togglePlay])
  
  dialogue.on("end", ()=> helperOnEnd() )
    
  
  function helperOnEnd(){
    dialogue.seek(dialogue.duration()-0.05);
    dialogue.pause();
    setTogglePlay(false);
    setAudioEnded(true);
  }
      
      useEffect(() => {
        setTimeout(() => {
          if(!dialogue.playing()){
            narratorMode&&dialogue.play();
        }
        },500);
      
        return () => {
          
        }
      }, [])
        return (
          <>
          {narratorTextMode&&<div className='lettercontainer'>
          
            <div className='introText letter'> 
              <p> <b> BACKGROUND </b> </p> 
              <p> Samharan is the most populous and second largest country in the North East Continent. It is bordered by the sea to the southwest, Ialo in the south, and Tura to the east. A mountain range divides the northern border with Hurauk. </p>
              <p>Various Samharanic tribes have inhabited the western part of the country since ancient times, while the eastern part of the country was initially inhabited by various nomadic Turion tribes. In the 1600s the Samha Empire established itself as an industrial and technologically advanced civilization, and by 1700 expanded its territory stretching to the eastern ocean. Despite periods of integration between those of Samha and Turion descent during the empire’s two-hundred-year rule, Turion calls for independence never completely went away. The empire collapsed in 1913 following a civil war spurred by a Turion nationalist movement. This established the country of Samharan to the west, and the smaller Tura to the east. While the majority of the Turion population in the newly established borders of Samharan accepted citizenship to Tura and relocated, about 35% chose to stay in Samharan, many living in the east and in the main cities.</p>
              <p>After over 70 years of relative peace between Samharan and Tura, a global recession stoked tensions between the two countries. This prompted tensions within Samharan between those of Samha descent and those of Turion descent resulting in several nationalist groups forming over the following 20 years. Despite periods of prosperity and peace during this time, further economic hardship in Samharan resulted in the nationalist group, the Samha Golden Arm Party, being elected in 2009.</p>
              
              </div>
            <div className='letterspacer'/><div className='introText letter'>
            <p><b>THE WAR</b></p>
              <p>Between 2009 and 2017 there was a steady rise in hate crimes towards Turion people and increased activity by Turion terrorist groups. On July 5, 2017 a Turion terrorist group blew up the Capital Stadium resulting in the deaths of over 25,000 people. This prompted the government to declare martial law essentially starting a civil war. On August 7, 2017 tensions at the Samharan/Tura border erupted into violence prompting both countries to declare war, each blaming the other for being the aggressor.</p>
             
              <p>After three weeks of fighting Samharan gained traction and moved into Tura, completely overtaking it by August 2018. Tura continued to fight with the help of Hurauk, while Ialo declared neutrality. Due to Hurauk’s involvement Samharan eventually advanced into Hurauk as well. Tura and Hurauk wouldn't gain back their territory until May 2020 when Hurauk received aid from their neighbours to the north.</p>
      
              <p>By this time within the borders of Samharan the internal conflict had been subdued, and support for the war overall dimmed. As Tura and Hurauk advanced across the original borders of Samharan there were increased calls to surrender. In addition there was growing unrest due to the fact the governmental election was delayed in September 2020.</p>
              </div><div className='letterspacer'/><div className='introText letter'>
              <p><b>2021 ELECTION</b></p>
              <p>In September 2021 the delayed election was held which essentially became a referendum on the war. Of the three leading parties, two were against the war, while the incumbent Golden Arm Party was for it. The Golden Arm Party won a minority government and announced their continued commitment to the war effort. This prompted the United Party and the Samharan Justice Party to form a coalition, which gave them a tenuous majority. The Golden Arm Party claimed this coalition was unconstitutional and refused to step down. However, the Governmental Guards ruled the coalition constitutional and ousted the Golden Arm Party in a midnight raid. While the Golden Arm Party still had command of the military, they had failed to anticipate such a swift and decisive attack from the Governmental Guards. While some Golden Arm leaders were killed in the raid, most were arrested or fled the country. Some members of the population protested the coalition, but protests subsided within a couple days. On October 15, 2021 after 10 days of negotiations with Tura and Hurauk, the coalition, now known as the Samharan United Allies, signed a peace treaty putting an end to the war.</p>
              </div><div className='letterspacer'/><div className='introText letter'>
              <p><b>POST WAR</b></p>
              <p>As part of the peace treaty Samharan will be adjusting its borders, paying reparations, repatriating goods and valuables, and supporting investigations into war crimes.</p>
      
              <p>The Peace and Resolution Council (PRC) was established on November 10, 2021 as an arm’s length body separate from the governments of any of the three countries. The PRC is the first of its kind and operates several other councils under its umbrella to address targets of the peace treaty. To maintain as much impartiality as possible all staff, and their immediate relatives, must have never served in any army or been a member of any violent activist group. Staff must also be a descendant of at least two different countries, meaning at least one grandparent must have held citizenship in a different country than the other three grandparents.</p>
      
              <p>The PRC maintains it will not rush, but is hoping to act swiftly to restore ties between all three countries.</p>
      
            <p>Today is November 28, 2021</p>
            </div>
            </div>}
            {narratorMode&& <><div className='navbar'>
              {togglePlay ? <PauseButton onClick={() => helperAudio()} /> : <PlayButton onClick={() => helperAudio()} />}
            </div><div style={{ "height": "20vh" }}>
              </div></>}
       {(!narratorTextMode) &&<><div style={{ "height": "20vh" }}>
            </div><p className='outlineText Button' style={{ "padding": "0" }} onClick={() => helper()}>Go Back To Menu</p><div style={{ "height": "10vh" }}>
              </div></>}
       {narratorTextMode&&     <><div style={{ "height": "10vh" }}>
            </div><p className='outlineText Button' style={{ "padding": "0" }} onClick={() => helper()}>Go Back To Menu</p><div style={{ "height": "10vh" }}>
              </div></>}
            </>
    )
  }

export default WorldBackground