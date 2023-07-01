// import React from "react";
import { styled } from '@deliveryhero/armor';
import DynamicName from '../../components-minor/DynamicName';
import LiveDateTime from '../../components-minor/DateTimeLive';
// import reactLogo from '../../assets/react.svg'

const HeaderBody = styled.div`
  height: 75px;
  background-color: #F4F4F4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WelcomeMessage = styled.div`
  font-family: 'Inria Sans', sans-serif;
  font-size: 18px;
  margin-left: 10px;
`;

const AppTitle = styled.div`
  color: #D82128;
  font-family: 'Jim Nightshade', cursive;
  font-size: 26px;
`;

const DateTimeIndicator = styled.div`
  font-family: 'Inria Sans', sans-serif;
  font-size: 18px;
  margin-right: 10px;
`;

const Header = () => {
  return (
    <HeaderBody>
      <WelcomeMessage>Welcome <DynamicName /></WelcomeMessage>
      <AppTitle>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="PromEx logo" />
        </a> */}
        <span>🔥 PromEx 🔥</span>
      </AppTitle>
      <DateTimeIndicator><LiveDateTime /></DateTimeIndicator>
    </HeaderBody>
  )
}

export default Header;
