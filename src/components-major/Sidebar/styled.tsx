import { styled } from "@deliveryhero/armor";

export const SidebarBodyDiv = styled.div`
  width: 170px;
  background-color: #454545;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainerDiv = styled.div`
`;

export const MenuContainerDiv = styled.div`
  margin-top: 20px;
  color: #fff;
  width: 100%;

  ul {
    padding: 0;
  }

  li {
    font-size: 16px;
    font-weight: bold;
    margin: 3px auto;
    cursor: pointer;
    list-style-type: none;
    padding: 10px;
    transition: all 0.8s ease;

    :hover {
      background-color: #566176;
    }

    svg {
      color: white;
      margin-left: 20px;
      margin-right: 10px;
    }
  }
`;
