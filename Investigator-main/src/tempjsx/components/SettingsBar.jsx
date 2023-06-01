import React from 'react'
import styled  from "styled-components";
import SettingsIcon from '@mui/icons-material/Settings';
import { VolumeMute } from '@mui/icons-material';
import SettingsModal from './SettingsModal';

import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
from {
    transform:rotate(0);
  }
  to {
    transform:rotate(360deg);
  }
    
`

const Container = styled.div`
display:flex;
background-color:transparent;
min-height:40px;
height:5%;
justify-content:flex-end;

`;

const Item = styled.div`
box-shadow: 1px 1px 10px 1px #ffffff;
background-color:green;
height:100%;
aspect-ratio: 1 / 1;
display: flex;
align-items: center;
justify-content: center;
&:hover{
cursor: pointer;
animation: ${breatheAnimation} 2s ease infinite;
}
&:active{

 
}





`;



const Settings = () => {
  return (
    <Container>
        <SettingsModal/>
       
    </Container>
  )
}

export default Settings