import { styled } from "@deliveryhero/armor";

export const SquareDiv = styled.div`
  width: 170px;
  height: 190px;
  background-color: white;
  border: 1px solid #CCC;
  border-radius: 6px;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      width: 90%;
      // height: 140px;
      max-height: 140px;
    }

    h3 {
      margin: 0;
      color: #444;
      font-weight: bold;
    }

    p {
      margin: 0;
      color: #777;
    }
  }
`;