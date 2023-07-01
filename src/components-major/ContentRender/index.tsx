// import React from "react";
import { BodyDiv } from './styled';
import { Button } from '@deliveryhero/armor';
import { StarFilledIcon } from '@deliveryhero/armor-icons';
import LinksPage from '../LinksPage';

const ContentRender = () => {
  const menuNumber = 1;

  const renderPage = () => {
    switch (menuNumber) {
      case 1:
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
