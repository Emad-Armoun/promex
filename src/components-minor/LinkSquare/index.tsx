import { useEffect, useState } from "react";
import { SubItem } from "../../types/links";
import { SquareDiv } from "./styled";
import { DEFAULT_ICON_ADDRESS } from "../../util/constants";

type Props = {
  item: SubItem,
}

const LinkSquare: React.FC<Props> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageAddress, setImageAddress] = useState(DEFAULT_ICON_ADDRESS);

  const checkImage = (path: string) => {
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(path);
        // img.onerror = () => resolve(undefined);

        img.src = path;
    });
  }

  useEffect(() => {
    if (item.iconLinkType === 'local' && item.icon) {
      checkImage(item.icon).then((result) => {
        if (result) setImageAddress(result as string);
      });
    }
    else if(item.iconLinkType === 'link' && item.icon) {
      setImageAddress("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + item.icon + "&size=64");
    } else if (item.iconLinkType === 'link' && !item.icon) {
      setImageAddress("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + item.link + "&size=64");
    }
  }, []);
  
  return (
    <SquareDiv
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={isHovered ? 'over' : 'out'}
    >
      <a href={item.link} target="_blank">
        <img src={imageAddress} alt={item.title} />
        <h3>{item.title}</h3>
        <div>
          <p>{item.description}</p>
        </div>
      </a>
    </SquareDiv>
  );
}

export default LinkSquare;
