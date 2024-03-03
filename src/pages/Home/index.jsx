import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {BagComponent} from "../../components/BagComponent/index.jsx";
import * as S from './styles.js';
import MaskGroup from '../../assets/Maskgroup.png';
import Doces from '../../assets/docescaindo.png'
import {Wrapper} from "./styles.js";

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
        <S.Wrapper>
            <Header />
            <S.BannerBox>
                <img src={Doces} alt="Doces"/>
                <div>
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.
                    </p>
                </div>
            </S.BannerBox>
            <S.Container>
            <h1>Refeições</h1>
            <BagComponent itemName={itemExample.name} itemPrice={itemExample.price} itemImageUrl={MaskGroup} />
            </S.Container>
            <Footer />
        </S.Wrapper>
    )
}