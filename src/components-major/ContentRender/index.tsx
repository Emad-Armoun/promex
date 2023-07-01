// import React from "react";
import { BodyDiv } from './styled';
import { Button } from '@deliveryhero/armor';
import { StarFilledIcon } from '@deliveryhero/armor-icons';

const ContentRender = () => {
  return (
    <BodyDiv>
      <Button onClick={() => alert("you clicked!")}>
        <StarFilledIcon />
        Click me
      </Button>
    </BodyDiv>
  )
}

export default ContentRender;
