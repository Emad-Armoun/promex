// import React from "react";
import { SidebarBodyDiv, IconContainerDiv, MenuContainerDiv } from './styled';
import dhLogo from '../../assets/DHIcon.svg'

const Sidebar = () => {
  return (
    <SidebarBodyDiv>
      <IconContainerDiv>
        <img src={dhLogo} alt="Delivery Hero Logo" />
      </IconContainerDiv>
      
      <MenuContainerDiv>
        <span>Menu</span>
      </MenuContainerDiv>
    </SidebarBodyDiv>
  )
}

export default Sidebar;
