import styled from "styled-components";
export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  height: 56px;
  padding: 0 16px;
  font-weight: 500;
  border-radius: 5px;
  &:disabled {
    opacity: 0.5;
  }
`;
