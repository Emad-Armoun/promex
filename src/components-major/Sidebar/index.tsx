// import React from "react";
import { SidebarBodyDiv, IconContainerDiv, MenuContainerDiv } from './styled';
import dhLogo from '../../assets/DHIcon.svg';
import menu from '../../data/menu.json';

type Props = {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const Sidebar: React.FC<Props> = ({ selectedMenuItem, setSelectedMenuItem }) => {
  const handleClick = (key: string) => {
    setSelectedMenuItem(key);
  };

  return (
    <SidebarBodyDiv>
      <IconContainerDiv>
        <img src={dhLogo} alt="Delivery Hero Logo" />
      </IconContainerDiv>
      
      <MenuContainerDiv>
        <ul>
          {menu.menuItems.map(menuItem =>
            <li
              style={selectedMenuItem === menuItem.key ? {backgroundColor: '#D82128'} : undefined}
              onClick={() => handleClick(menuItem.key)}
            >
              {menuItem.label}
            </li>
          )}
        </ul>
      </MenuContainerDiv>
    </SidebarBodyDiv>
  )
}

export default Sidebar;
