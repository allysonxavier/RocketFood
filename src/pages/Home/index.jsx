import { Header } from "../../components/Header";
import { CardItem } from "../../components/CardItem";
import { ItemQuantityControl } from "../../components/ItemQuantityControl";
import * as S from './styles.js';
import MaskGroup from '../../assets/Maskgroup.png';

const itemExample = {
    name: "Camisa Casual Azul",
    price: 59.99,
    image: MaskGroup
};
export function Home() {
    return (
        <div>
            <Header />
            <h1>Refeições</h1>
            <S.Container >
            <CardItem item={itemExample} isColunm={true} onAddToBag={() => {console.log('oioi')}} />

                </S.Container>

        </div>
    )
}