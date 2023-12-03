import styled from 'styled-components';

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