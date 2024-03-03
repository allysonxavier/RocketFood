import styled from "styled-components";
import T from "../../styles/index.js";

export  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 428px;
    margin: 0 auto;
    `
export const Container = styled.div`
    display: flex;  
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 24px;
    h1 {
        text-align: left;
        margin-bottom: 24px;        
    }
`;

export const BannerBox = styled.div`
    width: 100%;
    height: 120px;
    max-width: 376px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to right, #091E26, #00131C);
    margin: 44px auto 62px;
    gap: ${T.spacings.micro};
    padding: 16px;

     img {
         width: 191px;
         height: 149px;
        margin-left: -24px;
        margin-top: -24px;
    }
    
    > div {
        width: 100%;
        h2 {
            font-family: "Poppins", sans-serif;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 3px;
        }

        p {
            font-family: "Poppins", sans-serif;
            font-size: 12px;
        }
    }
`