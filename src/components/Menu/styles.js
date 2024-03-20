import styled from "styled-components";
import T from "../../styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 36px;
    font-size: 21px;
    
    svg{
        width: 24px;
        height: 24px;
    }
    
`

export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    height: 114px;
    background-color: ${T.colors.DARK_700};
    margin-top: 24px;
    padding-left: 28px;
    gap: 16px;
    
`

export const MenuItens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
        margin-bottom: 10px;
        padding-left: 10px;
        border-bottom: 1px solid ${T.colors.DARK_1000};
        color: ${T.colors.LIGHT_300};
    }

`