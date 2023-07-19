import { styled } from "@deliveryhero/armor";

export const ContainerDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const ListUl = styled.ul`
  margin-top: 0;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;

  li {
    list-style-type: none;
    cursor: pointer;

    :hover {
      background-color: #eee;
    }
  }
`;