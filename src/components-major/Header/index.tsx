// import React from "react";
import { HeaderBody, WelcomeMessage, AppTitle, DateTimeIndicator } from './styled';
import DynamicName from '../../components-minor/DynamicName';
import LiveDateTime from '../../components-minor/DateTimeLive';
// import reactLogo from '../../assets/react.svg'

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
