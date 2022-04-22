import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px ${(props) => props.border} lightgray;
  font-size: 15px;
  cursor: pointer;
  height: 50px;
  width: 150px;
  margin: 5px;

  &:hover {
    box-shadow: #372c55 0px 5px 4px;
  }
`;