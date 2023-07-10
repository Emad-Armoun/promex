import { useEffect, useState } from "react";
import { SpecialLink } from "../../types/links";
import { SquareDiv, StarDiv } from "./styled";
import { DEFAULT_ICON_ADDRESS } from "../../util/constants";
import { StarOutlineIcon, StarFilledIcon } from '@deliveryhero/armor-icons';

type Props = {
  item: SpecialLink,
  isInFavorite: boolean,
  toggleFavorite: (itemId: number) => void,
}

const LinkSquare: React.FC<Props> = ({ item, isInFavorite, toggleFavorite }) => {
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
  }, [item.icon, item.iconLinkType, item.link]);
  
  return (
    <SquareDiv
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={isHovered ? 'over' : 'out'}
    >
      <StarDiv className={isInFavorite ? "filled" : ""} onClick={(e: MouseEvent) => {
        e.preventDefault();
        toggleFavorite(item.id);
      }}>
        {isInFavorite ? <StarFilledIcon /> : <StarOutlineIcon />}
      </StarDiv>

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
