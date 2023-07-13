import { HeaderBody, WelcomeMessage, AppTitleDiv, DateTimeIndicatorDiv } from './styled';
import DynamicName from '../../minor/DynamicName';
import LiveDateTime from '../../minor/DateTimeLive';
// import reactLogo from '../../assets/react.svg'

const Header: React.FC = () => {
  return (
    <HeaderBody>
      <WelcomeMessage>Welcome <DynamicName /></WelcomeMessage>
      <AppTitleDiv>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="PromEx logo" />
        </a> */}
        <span>PromEx</span>
      </AppTitleDiv>
      <DateTimeIndicatorDiv><LiveDateTime /></DateTimeIndicatorDiv>
    </HeaderBody>
  )
}

export default Header;
