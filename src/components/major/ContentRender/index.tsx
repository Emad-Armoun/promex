import { HomePage } from "../../../pages/HomePage";
import { LinksPage } from "../../../pages/LinksPage";
import { SettingsPage } from "../../../pages/SettingsPage";
import { AboutPage } from "../../../pages/AboutPage";
import { UnderConstructionPage } from "../../../pages/UnderConstructionPage";
import { BodyDiv } from "./styled";
import WaitingListPage from "../../../pages/WaitingListPage";
import { Props } from "./type";

const ContentRender: React.FC<Props> = ({ selectedMenuItem }) => {
  const renderPage = () => {
    switch (selectedMenuItem) {
      case "home":
        return <HomePage />;
      case "links":
        return <LinksPage />;
      case "waiting-list":
        return <WaitingListPage />;
      case "settings":
        return <SettingsPage />;
      case "about":
        return <AboutPage />;
      default:
        return <UnderConstructionPage />;
    }
  };

  return <BodyDiv>{renderPage()}</BodyDiv>;
};

export default ContentRender;
