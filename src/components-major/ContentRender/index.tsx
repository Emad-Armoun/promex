import { BodyDiv } from './styled';
import LinksPage from '../../pages/LinksPage';
import AboutPage from '../../pages/AboutPage';
import UnderConstructionPage from '../../pages/UnderConstructionPage';

type Props = {
  selectedMenuItem: string;
}

const ContentRender: React.FC<Props> = ({ selectedMenuItem }) => {
  const renderPage = () => {
    switch (selectedMenuItem) {
      case 'home':
        return <LinksPage />;
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
