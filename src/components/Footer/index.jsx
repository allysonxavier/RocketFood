import LogoIcon from '../../assets/logoDark.svg';
import * as S from './styles';
import {IconBox} from "./styles";

 const Footer = () => {
    return(
        <S.Container>
            <S.ContentFooter>
                <S.IconBox>
                <img src={LogoIcon} alt="Logo" />
                <span>food explorer</span>
                </S.IconBox>
                <p>© 2023 - Todos os direitos reservados.</p>
            </S.ContentFooter>
        </S.Container>
    )
}

export default Footer;