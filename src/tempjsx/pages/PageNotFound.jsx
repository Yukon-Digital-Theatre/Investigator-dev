import React from 'react'
import styled  from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
justify-content: center;
  height:100vh;
`;

const PageNotFound = () => {
  return (
    <Container>404 Error</Container>
  )
}


export default PageNotFound