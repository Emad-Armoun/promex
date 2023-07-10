import './animation.css';
import { UnderConstructionDiv, TitleDiv } from './styled';

export const UnderConstructionPage: React.FC = () => {
  return (
    <UnderConstructionDiv>
      <div className="construction"></div>
      <TitleDiv>Under Construction</TitleDiv>
    </UnderConstructionDiv>
  );
}
