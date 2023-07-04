import { styled } from "@deliveryhero/armor";

export const SidebarBodyDiv = styled.div`
  width: 200px;
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
    text-align: center;
  }

  li {
    font-size: 16px;
    font-weight: bold;
    margin: 7px auto;
    cursor: pointer;
    list-style-type: none;
    padding: 10px 0px;

    :hover {
      background-color: #566176;
    }
  }
`;
