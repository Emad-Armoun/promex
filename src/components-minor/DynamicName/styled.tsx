import { styled } from '@deliveryhero/armor';

export const CustomInput = styled.input`
  background-color: white;
  color: black;
  border: 1px solid #DDD;
  border-radius: 15px;
  padding: 4px 10px;
  max-width: 50px;
  font-family: 'Inria Sans', sans-serif;
  font-size: 18px;
  outline: none;
  transition: all 0.5s ease-in-out;

  :focus {
    max-width: 90px;
  }
`;

export const NormalText = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
