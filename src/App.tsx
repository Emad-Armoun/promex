// import React from 'react'
import './App.css'
import Header from './components-major/Header';
import Sidebar from './components-major/Sidebar';
import ContentRender from './components-major/ContentRender';
import { styled } from '@deliveryhero/armor';

const Container = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const MainColumn = styled.div`
  width: 70%;
`;

function App() {
  // const classes = useCommonClasses();
  return (
    <Container>
      <Sidebar />
      <MainColumn>
        <Header />
        <ContentRender />
      </MainColumn>
    </Container>
  )
}

export default App
