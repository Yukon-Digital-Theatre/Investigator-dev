import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const MoreAboutArtists = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div className='lettercontainer'>
     
     <div className='outlineText introBigText'>
      Wren Brian – Creator & Co-Artistic Producer
    </div><div className='outlineText introText'>
        Wren is a playwright and producer who is dedicated to creating characters that can be played by actors of any gender, ancestry, ability, and/or age. Her play Anomie won the 2017 Harry S. Rintoul Award for Best New Manitoba Play at the Winnipeg Fringe Festival, her play Bystander had its world premiere at Gwaandak Theatre in October 2018, and she was one of 50 international playwrights commissioned for Climate Change Theatre Action 2021 and 2023. She was also recently shortlisted for the John Hirsch Emerging Manitoba Writer Award in 2022. For more information visit: wrenbrian.com
      </div><div className='outlineText introBigText'>
        Patti Flather – Dramaturg & Co-Artistic Producer
      </div><div className='outlineText introText'>
        Patti Flather is an award-winning playwright, director, dramaturg, theatre artist and arts producer in Whitehorse. She is a co-founder and past Artistic Director for two decades of Gwaandak Theatre, dedicated to nurturing and sharing Indigenous and northern voices. Patti’s play Paradise toured nationally (MT Space/Gwaandak Theatre); it’s published with Playwrights Canada Press. Selected other plays include Sixty Below (written with Leonard Linklater), the solo show West Edmonton Mall, and the collectively created work Map of the Land, Map of the Stars, which toured the Yukon, B.C. and Ontario. Patti is of settler ancestry, originally from North Vancouver, B.C. and grateful to live on Kwanlin Dün First Nation & Ta’an Kwäch’än Council territory since 1988.
      </div><div className='outlineText introBigText'>
        Harrison Sparrow – Developer
      </div><div className='outlineText introText'>
      Bio not submitted yet.
     
      </div><div className='outlineText introBigText'>
        Jordy Walker – Sound Designer, Composer, Audio Producer
      </div><div className='outlineText introText'>
        Jordy Walker is a musician, composer, sound designer, record producer, and sound artist based in Whitehorse, Yukon. With a passion for experimental music and sound design, the ability to play and compose on several instruments as well as proficiency and experience in the recording studio, he has maintained a career with much flexibility and variety. He has produced/engineered over 50 records and worked on an equal number of films, theatre and contemporary dance pieces.
      </div><div className='outlineText introBigText'>
        Meredith Pritchard – Audio Recording Director & Voice Actor
      </div><div className='outlineText introText'>
        Meredith Pritchard (she/they) is a queer multidisciplinary artist with a focus in theatre creation, poetry writing, and textile making. Born and raised in Mohkinstsis (Calgary, AB) she is grateful to be a guest living on the traditional lands of the Kwanlin Dün First Nation & Ta'an Kwäch'än Council.
      
        Meredith holds their BFA in Dramatic Arts from the University of Lethbridge (2014).
      
        As a theatre artist they've worked as a director, performer, and improviser for the last 10 years. Her current passion lies in mentorship with youth directors and performers in pre-professional development through productions that focus on realistic youth experiences, current events, and queer identity.
      </div><div className='outlineText introBigText'>
        Christine Genier – Narrator
      </div><div className='outlineText introText'>
        Christine Genier is a Woman of the Wolf Clan and a citizen of the Ta’an Kwäch’än Council. She is a broadcaster, journalist, writer, poet, performer, apprentice language keeper, culture keeper, aspiring matriarch, mother, daughter, sister, and wife. In her work, Christine shares a lived experience that spans over four decades of bridging culture and recovering the Indigenous Space with those prepared to engage. Her audio story Between The Cutoffs was featured at the Nakai Theatre Pivot Festival in 2020. Christine is a co-writer and performer in the acclaimed Dreaming Roots show which premiered at the Yukon Arts Centre in 2022; she recently shared her writing and led a workshop at the first ever Yukon Words Festival.
      </div><div className='outlineText introBigText'>
        Ken Green – Voice Actor
      </div><div className='outlineText introText'>
        Ken Green is grateful to be living as a settler in Whitehorse, the traditional territories of the Kwanlin Dün First Nation and Ta’an Kwäch’än Council. He is a creative interested in sound and words, and the places where these meet and overlap. He co-produced two short documentary films “Whalefall” and “Inspiration in Nature”. He did sound recording and interviews for “Inspiration in Nature.” He co-wrote the feature-length family comedy Perfect Family (optioned by 3DEvolution) and is co-developing a comedic series that takes place in the Yukon and a comedic puppet web series.
      </div><div className='outlineText introBigText'>
        Carman Lam Brar – Voice Actor
      </div><div className='outlineText introText'>
        Vancouverite-turned-Yukoner Carman Lam Brar wears many hats, including Public Programs Librarian, anti-racism educator, mother of two, student of Cantonese, and actress when times allows. Past roles include Juliet in Goodnight Desdemona, Good Morning Juliet and Ernestine in The Anger in Ernest and Ernestine. She is honoured to be performing in The Investigator for her digital theatre debut and hope it leaves you thinking deeply about all the grey that lies between “right/wrong" and "good/bad".
      </div><div className='outlineText introBigText'>
        Ames Val – Voice Actor
      </div><div className='outlineText introText'>
        Bio not submitted yet.
        


        </div>

        <p className='outlineText introText Button' onClick={() => helper()}>Back to Wrap</p>
      </div>
  )
}

export default MoreAboutArtists
