import { styled } from "@deliveryhero/armor";

export const SquareDiv = styled.div`
  width: 140px;
  height: 160px;
  background-color: #EEE;
  background: linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 25%, rgba(235,235,235,1) 100%);
  border: none;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      height: 70px;
      margin-bottom: 10px;
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