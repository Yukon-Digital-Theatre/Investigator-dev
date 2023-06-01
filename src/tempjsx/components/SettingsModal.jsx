import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { keyframes } from 'styled-components'
import { Slide } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import styled  from "styled-components";



const Container = styled.div`
/* Rectangle 6 */


position: absolute;
width: 703px;
height: 714px;
left: 383px;
top: 107px;

background: linear-gradient(180deg, #D9D9D9 68.91%, rgba(217, 217, 217, 0) 100%);
display:flex;
flex-direction:column;
justify-content:center;

`;

const Item = styled.div`
box-shadow: 1px 1px 10px 1px #ffffff;
background-color:transparent;
height:100%;
aspect-ratio: 1 / 1;

display: flex;
align-items: center;
justify-content: center;

&:hover{
cursor: pointer;
animation: ${breatheAnimation} 2s linear infinite;
}
&:active{

}


`;
const Button = styled.div`
background-color:green;
padding:1%;
width:fit-content;
white-space: nowrap;
&:hover{
cursor: pointer;
background-color: white;
}
&:active{
  
}
`;

const SettingsModal = () => {
    
  
  
  const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Item onClick={handleOpen}>
          <SettingsIcon/>
        </Item>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Slide direction="down" in={open} mountOnEnter unmountOnExit>
            <Container>
              <Button>Menu Select 1</Button>
              <Button>Menu Select 2</Button>
              <Button>Menu Select 3</Button>
              <Button>Menu Select 4</Button>
              </Container>
          </Slide>
        </Modal>
      </div>
    );              
}

export default SettingsModal
