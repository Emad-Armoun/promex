import { BodyDiv } from './styled';
import { Button } from '@deliveryhero/armor';
import { StarFilledIcon } from '@deliveryhero/armor-icons';
import LinksPage from '../../pages/LinksPage';
import AboutPage from '../../pages/AboutPage';

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
          <Button onClick={() => alert("you clicked!")}>
            <StarFilledIcon />
            Click me
          </Button>
        )
    }
  };

  return (
    <BodyDiv>
      { renderPage() }
    </BodyDiv>
  )
}

export default ContentRender;
