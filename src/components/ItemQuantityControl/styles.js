import styled from "styled-components";
import {Button} from "../Button";
import MinusIcon from '../../assets/Minus.svg';
import PlusIcon from '../../assets/Plus.svg';
export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;
    height: 100%;
    align-items: center;
    gap: 16px;
    flex-direction: ${props => props.$isColumn ? 'column' : 'row'};
  
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