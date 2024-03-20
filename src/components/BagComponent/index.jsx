import {useEffect, useState} from "react";
import Button from "../Button";
import * as S from "./styles.js";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const BagComponent = ({itemName, itemPrice, itemImageUrl, isColumn = false}) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(itemPrice);
    const [itemsInBag, setItemsInBag] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!isFavorite) {
            const newItem = {name: itemName, price};
            currentFavorites.push(newItem);
            localStorage.setItem('favorites', JSON.stringify(currentFavorites));
        } else {
            const newFavorites = currentFavorites.filter((item) => item.name !== itemName);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
        setIsFavorite(!isFavorite);
    };



    useEffect(() => {
        const storedBagItems = JSON.parse(localStorage.getItem('bag')) || [];
        setItemsInBag(storedBagItems);

    }, []);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isItemFavorite = storedFavorites.some((item) => item.name === itemName);
        setIsFavorite(isItemFavorite);

    }, [itemName]);
    const updatePrice = (newQuantity) => {
        setPrice(itemPrice * newQuantity);
    };

    const handleAddQuantity = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            updatePrice(newQuantity);
            return newQuantity;
        });
    };

    const handleRemoveQuantity = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = Math.max(prevQuantity - 1, 1);
            updatePrice(newQuantity);
            return newQuantity;
        });
    };

    const handleAddToBag = () => {
        const newItem = {name: itemName, price, quantity};
        const currentBag = JSON.parse(localStorage.getItem('bag')) || [];
        currentBag.push(newItem);
        localStorage.setItem('bag', JSON.stringify(currentBag));
        setItemsInBag(currentBag);
        alert("Item adicionado à sacola.");
        setQuantity(1);
        setPrice(itemPrice);
    };

    return (
        <S.CardItemContainer>
            <img src={itemImageUrl} alt={itemName}/>
            <h3>{itemName}</h3>
            <p>R$ {price.toFixed(2)}</p>
            <S.Container $isColumn={isColumn}>
                <div>
                    <FaMinus  onClick={handleRemoveQuantity} disabled={quantity <= 1}/>
                    <span>{quantity}</span>
                    <FaPlus  onClick={handleAddQuantity} />
                </div>
                <Button title="Incluir" onClick={handleAddToBag}/>
            </S.Container>
            <S.FavoriteButton>
                <FaRegHeart size={24}  onClick={toggleFavorite}  color={isFavorite ? 'red' : 'white'}/>
            </S.FavoriteButton>
        </S.CardItemContainer>
    );
}

export default BagComponent;