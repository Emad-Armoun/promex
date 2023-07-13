import { useState } from 'react';
import './App.css'
import Header from './components/major/Header';
import Sidebar from './components/major/Sidebar';
import ContentRender from './components/major/ContentRender';
import { Container, MainColumn } from './App.styled';
import menu from './data/menu.json'

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menu.menuItems[0].key);
  return (
    <Container>
      <Sidebar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
      <MainColumn>
        <Header />
        <ContentRender selectedMenuItem={selectedMenuItem} />
      </MainColumn>
    </Container>
  )
}

export default App
