// import React from "react";
import { styled } from "@deliveryhero/armor";
import dhLogo from '../../assets/DHIcon.svg'

const SidebarBody = styled.div`
  width: 30%;
  background-color: #454545;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
`;

const MenuContainer = styled.div`
  margin-top: 20px;
  color: #fff;
`;

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
