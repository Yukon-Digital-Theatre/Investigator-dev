import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { updateVoicePreference } from '../reducers/voicePreference/voicePreferenceSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {

    const dispatch= useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function helper4(){
    dispatch(updateVoicePreference("female"))
 
  }
  
  function helper5(){
    dispatch(updateVoicePreference("male"))

  }
  
  function helper6(){
    dispatch(updateVoicePreference("nonbinary"))
   
  }


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <p className='introText Button outlineText disabled' onClick={()=>Howler.stop()}>Stop</p>
          <p className='introText Button outlineText disabled' onClick={()=>helper4()}>Female</p>
    <p className='introText Button outlineText' onClick={()=>helper5()}>Male</p>
    <p className='introText Button outlineText disabled' onClick={()=>helper6()}>Non Binary</p>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
