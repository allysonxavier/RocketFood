import {styled} from "styled-components";
import T from "../../styles";

export const Container = styled.footer`
    display: flex;
    width: 100%;
    min-width: 100%;
    height: 77px;
    background-color: ${T.colors.DARK_600};
    align-items: center;

`;

export const ContentFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: ${T.fonts.sizes.xxxs};
    color: ${T.colors.LIGHT_200};

`;

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    color: ${T.colors.LIGHT_700};
    font-size: ${T.fonts.sizes.xs};
    font-weight: ${T.fonts.weights.bold};
    gap: ${T.spacings.micro};
    
    img {
        width: 22px;
        height: 18px;
        color: ${T.colors.LIGHT_700};
    }


`;