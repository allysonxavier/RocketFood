import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {BagComponent} from "../../components/BagComponent/index.jsx";
import * as S from './styles.js';
import MaskGroup from '../../assets/Maskgroup.png';

const itemExample = {
    name: "Camisa Casual Azul",
    price: 59.99,
    image: MaskGroup
};
const itemExample2 = {
    name: "Camisa Verde",
    price: 100.00,
    image: MaskGroup
};

export function Home() {
    return (
        <div>
            <Header />
            <h1>Refeições</h1>
            <S.Container >
            <BagComponent itemName={itemExample.name} itemPrice={itemExample.price} itemImageUrl={MaskGroup} />
            </S.Container>
            <Footer />

        </div>
    )
}