import styled from "styled-components";
import T from '../../styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-radius:5px;
  
   input {
    height: 48px;
    width: 100%;    
    padding: 12px 14px;
    color: ${T.colors.LIGHT_300};
    background: transparent;
    border: 0;

    &::placeholder {
        color: ${T.colors.LIGHT_500};    
    }
  }
`;