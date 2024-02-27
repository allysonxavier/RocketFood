import styled from "styled-components";
import T from "../../styles/index.js";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 365px;
  padding-top: 158px
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap:12px;
    margin-bottom: 73px;

  h1 {
    font-size: 38px;
    color: ${T.colors.LIGHT_100};
      font-family: 'Roboto, sans-serif',serif;
  }
    
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

  label {
    align-self: flex-start;
    margin-bottom: 8px;
  }
 
  button{
    margin-bottom: 32px;
      width: 100%;
      height: 48px;
  }
  
  a {
    color: ${T.colors.LIGHT_100};
    font-family: 'Poppins, serif',serif;
    font-weight: ${T.fonts.weights.medium};
  } `;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 32px;
    `;
