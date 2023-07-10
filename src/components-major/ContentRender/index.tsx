import { HomePage } from '../../pages/HomePage';
import LinksPage from '../../pages/LinksPage';
import UnderConstructionPage from '../../pages/UnderConstructionPage';
import { SettingsPage } from '../../pages/SettingsPage';
import AboutPage from '../../pages/AboutPage';
import { BodyDiv } from './styled';

type Props = {
  selectedMenuItem: string;
}

const ContentRender: React.FC<Props> = ({ selectedMenuItem }) => {
  const renderPage = () => {
    switch (selectedMenuItem) {
      case 'home':
        return <HomePage />;
      case 'links':
        return <LinksPage />;
      case 'settings':
        return <SettingsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return (
          <UnderConstructionPage />
        );
    }
  };

  return (
    <BodyDiv>
      { renderPage() }
    </BodyDiv>
  )
}

export default ContentRender;
