import { styled } from "@deliveryhero/armor";

export const SquareDiv = styled.div`
  width: 140px;
  height: 160px;
  background-color: #EEE;
  background: linear-gradient(0deg, #ccc, #fff, #fff, #eee, #fff, #eee);
  // background: linear-gradient(0deg, #ccc, #fff, #ccc, #eee, #fff, #eee);
  // background: linear-gradient(0deg, #ccc, #eee, #fff, #eee, #fff, #eee);
  // background: linear-gradient(0deg, #eee, #fff, #eee, #ddd, #eee, #f5f5f5);
	background-size: 100% 200%;
  border: none;

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

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      height: 70px;
      margin-bottom: 10px;
      transition: all 0.5s ease-in-out;
    }

    h3 {
      margin: 0;
      color: #444;
      font-weight: bold;
    }

    p {
      margin: 0;
      color: #777;
      font-size: 12px;
    }
  }
`;