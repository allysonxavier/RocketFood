import styled from "styled-components";
import T from "../../styles";
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${T.colors.DARK_900};
  color: ${T.colors.LIGHT_500};
  margin-bottom: 8px;
  border-radius: 8px;
  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${T.colors.LIGHT_500};
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${T.colors.LIGHT_500};
    }
  }
  > svg {
    margin-left: 16px;      
  }

`;
