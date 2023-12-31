import { styled } from "@deliveryhero/armor";

export const SquareDiv = styled.div`
  width: 120px;
  height: 120px;
  background-color: #EEE;
  background: linear-gradient(0deg, #ccc, #fff, #fff, #eee, #fff, #eee);
  // background: linear-gradient(0deg, #ccc, #fff, #ccc, #eee, #fff, #eee);
  // background: linear-gradient(0deg, #ccc, #eee, #fff, #eee, #fff, #eee);
  // background: linear-gradient(0deg, #eee, #fff, #eee, #ddd, #eee, #f5f5f5);
	background-size: 100% 200%;
  border: none;
  position: relative;

  @keyframes slide-down {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @keyframes slide-up {
    0% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  &.over {
    animation: slide-down 0.5s ease;
	  animation-fill-mode: forwards;

    img {
      scale: 1.1;
    }
  }

  &.out {
    animation: slide-up 1s ease;
  }

  :hover h3 {
    margin-top: 0 !important;
  }

  @keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }

  :hover p {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 5s linear infinite;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    h3 {
      font-size: 14px;
      text-wrap: nowrap;
      margin-top: 10px !important;
      transition: all 1s ease;
    }

    img {
      height: 50px;
      margin-bottom: 10px;
      transition: all 0.5s ease-in-out;
    }

    h3 {
      margin: 0;
      color: #444;
      font-weight: bold;
    }

    div {
      white-space: nowrap;
      overflow: hidden;
      width: 100%;

      p {
        margin: 0;
        color: #777;
        font-size: 12px;
        display: none;
      }
    }
  }
`;

export const StarDiv = styled.span`
  position: absolute;
  top: -10px;
  right: -15px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  svg {
    color: #777;
  }

  :hover {
    background: #a1e4a1;
    font-size: 26px;
    color: red;

    svg {
      color: green;
    }
  }

  &.filled {
    background: #a1e4a1;

    svg {
      color: green;
    }
  }
`;

export const SmallDiv = styled.div`
  width: 120px;
  height: 40px;
  background-color: #EEE;
  border: none;
  position: relative;
  display: flex;
  align-items: center;

  :hover {
    background-color: #CCC;
  }

  a {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
  }

  img {
    height: 20px;
    margin: 0 6px;
  }

  h3 {
    margin: 0;
    color: #444;
    font-size: 14px;
    text-wrap: nowrap;
  }

  div {
    display: none;
  }
  `;