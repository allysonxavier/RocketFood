import styled from "styled-components";
import T from '../../styles';

export const CardItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 210px;
    max-height: 292px;
    height: 100%;
    padding: 24px;
    gap: 12px;
    border-radius: 8px;
    background-color: ${T.colors.DARK_300};
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
        
    &:hover {
        transform: scale(1.05);
    }
  
    img {
        width: 88px;
        height: 88px;        
        object-fit: cover;
    }
    
    p{
       color: ${T.colors.CAKE_200};
        text-align: center;
    }
  
    `;
export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 16px;
    flex-direction: column; 

    button {
        height: 32px;
    }
  >div {
    display: flex;
    align-items: center;
    text-align: center ;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 14px;
  }
`;

export const FavoriteButton = styled.div`
    position: absolute;
    right: 0;
    margin-right: 16px;   

`