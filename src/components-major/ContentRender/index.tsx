// import React from "react";
import { BodyDiv } from './styled';
import { Button } from '@deliveryhero/armor';
import { StarFilledIcon } from '@deliveryhero/armor-icons';
import LinksPage from '../LinksPage';

type Props = {
  selectedMenuItem: string;
}

const ContentRender: React.FC<Props> = ({ selectedMenuItem }) => {
  const renderPage = () => {
    switch (selectedMenuItem) {
      case 'home':
        return <LinksPage />;
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
