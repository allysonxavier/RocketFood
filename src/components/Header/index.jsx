import * as S from './styles';
import LogoIcon from '../../assets/logo.svg';
import MenuIcon from '../../assets/menu.svg';
import Note from '../../assets/Note.svg';
import { Button } from '../Button';

export function Header() {

    return(
        <S.Container>
            <S.ContentHeader>
                <S.MenuButton />
                <S.Title to="/">
                    <img src={LogoIcon} alt="Logo" />
                    <h1>food explorer</h1>
                </S.Title>
                <S.NoteButton/>
            </S.ContentHeader>
        </S.Container>
    )
}