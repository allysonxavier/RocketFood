import styled from "styled-components";
import {Button} from "../Button";
import MinusIcon from '../../assets/Minus.svg';
import PlusIcon from '../../assets/Plus.svg';

export const CardItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 210px;
    min-height: 292px;
    height: 100%;
    padding: 24px;
    border-radius: 8px;
    background-color: inherit;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  
    `;
export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;
    height: 100%;
    align-items: center;
    gap: 16px;
flex-direction: column;  
  >div{
    display: flex;
    align-items: center;
    text-align: center ;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 14px;
    padding: 4px 0;

  }
`;

export const MinusButton = styled(Button)`
    background-color: transparent;
    width: 24px;
    height: 24px;    
    background-image: url(${MinusIcon});
    background-repeat: no-repeat;
    background-size: 24px;  
    background-position: center;
    border: none;
    padding: 0;
    `;

export const PlusButton = styled(Button)`
    background-color: transparent;
    width: 24px;
    height: 24px;
    background-image: url(${PlusIcon});
    background-repeat: no-repeat;
    background-size: 24px;  
    background-position: center;
    border: none;
    padding: 0;
`;