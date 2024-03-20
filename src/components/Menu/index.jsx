import Input from '../Input';
import Footer from "../Footer/index.jsx";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import * as S from './styles';

const Menu = ({onChage, isOpen}) => {
    return (

        <S.Container>
            <S.MenuHeader>
                <IoMdClose size={20} />
                Menu
            </S.MenuHeader>
        <Input placeholder={'Busque por pratos ou ingredientes'} icon={FiSearch}  />
            <S.MenuItens>
                <a>Novo Prato</a>
                <a>Sair</a>
            </S.MenuItens>
            <Footer />
        </S.Container>
    );
}

export default Menu;