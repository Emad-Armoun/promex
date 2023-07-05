import { styled } from "@deliveryhero/armor";

export const AboutDiv = styled.div`
  background-color: #000;
  position: relative;

  canvas {
    display: block;
  }

  & > div {
    position: absolute;
    left: 100px;
    top: 70px;
    color: #fff;

    h1 {
      margin: 0;
    }

    h2 {
      margin: 0;
    }
  }
`;

export const DeveloperDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;

    a {
      color: #fff;
    }

    h3 {
      margin: 0;
    }
  }

  img {
    border-radius: 50%;
    width: 100px;
  }
`;