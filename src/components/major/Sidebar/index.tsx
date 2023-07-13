import { SidebarBodyDiv, IconContainerDiv, MenuContainerDiv } from './styled';
import dhLogo from '../../../assets/DHIcon.svg';
import menu from '../../../data/menu.json';
import * as Icons from '@deliveryhero/armor-icons';

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
          {menu.menuItems.map((menuItem) => {
            let ThisIcon = Icons.LensEmptyIcon;
            if (menuItem.icon in Icons)
              ThisIcon = Icons[menuItem.icon as never];
            return (<li
              key={menuItem.key}
              style={selectedMenuItem === menuItem.key ? {backgroundColor: '#D82128'} : undefined}
              onClick={() => handleClick(menuItem.key)}
            >
              <ThisIcon />
              {menuItem.label}
            </li>)
          }
          )}
        </ul>
      </MenuContainerDiv>
    </SidebarBodyDiv>
  )
}

export default Sidebar;
