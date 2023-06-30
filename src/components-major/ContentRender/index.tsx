// import React from "react";
import { Button, styled } from '@deliveryhero/armor';
import { StarFilledIcon } from '@deliveryhero/armor-icons';

const Body = styled.div`
  height: calc(100% - 75px - 20px - 20px);
  overflow-y: scroll;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #FFF;
`;

const ContentRender = () => {
  return (
    <Body>
      <Button onClick={() => alert("you clicked!")}>
        <StarFilledIcon />
        Click me
      </Button>
    </Body>
  )
}

export default ContentRender;
