import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 316px;
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
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
  }
  
  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: 500; 
  }
  
    `;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 32px;
    gap: 8px;
    `;
