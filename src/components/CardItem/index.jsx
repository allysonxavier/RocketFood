import { useState } from "react";
import * as S from './styles';
import {ItemQuantityControl} from '../ItemQuantityControl';
export function CardItem({ item, onAddToBag }) {
    const { name, price, image } = item;
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <S.CardItemContainer>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span>R$ {price * quantity}</span> {/* Preço atualizado com base na quantidade */}
            <ItemQuantityControl onAddToBag={onAddToBag} itemName={name} itemPrice={price} quantity={quantity} onQuantityChange={handleQuantityChange} />
        </S.CardItemContainer>
    );
}