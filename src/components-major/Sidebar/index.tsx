// import React from "react";
import { SidebarBody, IconContainer, MenuContainer } from './styled';
import dhLogo from '../../assets/DHIcon.svg'

const Sidebar = () => {
  return (
    <SidebarBody>
      <IconContainer>
        <img src={dhLogo} alt="Delivery Hero Logo" />
      </IconContainer>
      
      <MenuContainer>
        <span>Menu</span>
      </MenuContainer>
    </SidebarBody>
  )
}

export default Sidebar;
