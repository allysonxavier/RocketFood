import styled  from "styled-components";
import { Link } from "react-router-dom";
import { Button } from '../Button';
import MenuIcon from '../../assets/menu.svg';
import Note from '../../assets/Note.svg';


export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 56px 28px 24px;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-weight: bold;
    > img {
        width: 24px;
        height: 24px;
      margin-right: 8px;
    }
    `

export const ContentHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 0;

    `

export const  MenuButton = styled(Button)`
    background-color: transparent;
    width: 24px;
    height: 24px;
    background-image: url(${MenuIcon});
    background-repeat: no-repeat;
    background-size: 24px;  
    background-position: center;
    border: none;
    margin-left: 8px;
    `
export const  NoteButton = styled(Button)`
    background-color: transparent;
    width: 24px;
    height: 24px;
    background-image: url(${Note});
    background-repeat: no-repeat;
    background-size: 24px;  
    background-position: center;
    border: none;
    margin-left: 8px;
    `