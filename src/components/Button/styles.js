import styled from "styled-components";
import T from "../../styles";
export const Container = styled.button`
  width: 100%;
  background-color: ${T.colors.TOMATO_100};
  color: ${T.colors.LIGHT_100};
  border: 0;
  height: 56px;
  padding: 0 16px;
  font-weight: 500;
  border-radius: 5px;
  &:disabled {
    opacity: 0.5;
  }
`;
