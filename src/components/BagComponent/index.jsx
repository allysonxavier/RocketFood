import { useEffect, useState } from "react";
import { Button } from "../Button";
import {Container, MinusButton, PlusButton, CardItemContainer, FavoriteButton} from "./styles.js";
import heartIcon  from '../../assets/heart.svg'

export function BagComponent({ itemName, itemPrice, itemImageUrl, isColumn = false }) {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(itemPrice);
    const [itemsInBag, setItemsInBag] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        console.log(isFavorite);
        const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const newFavorites = currentFavorites.filter((item) => item.name !== itemName);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            const newItem = { name: itemName, price };
            currentFavorites.push(newItem);
            localStorage.setItem('favorites', JSON.stringify(currentFavorites));
        }
    };


    useEffect(() => {
        const storedBagItems = JSON.parse(localStorage.getItem('bag')) || [];
        setItemsInBag(storedBagItems);

    }, []);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isItemFavorite = storedFavorites.some((item) => item.name === itemName);
        setIsFavorite(isItemFavorite);
    }, []);
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
        const newItem = { name: itemName, price, quantity };
        const currentBag = JSON.parse(localStorage.getItem('bag')) || [];
        currentBag.push(newItem);
        localStorage.setItem('bag', JSON.stringify(currentBag));
        setItemsInBag(currentBag);
        alert("Item adicionado à sacola.");
        setQuantity(1);
        setPrice(itemPrice);
    };

    return (
        <CardItemContainer>
            <img src={itemImageUrl} alt={itemName} />
            <h3>{itemName}</h3>
            <p>R$ {price.toFixed(2)}</p>
            <Container $isColumn={isColumn}>
                <div>
                    <MinusButton onClick={handleRemoveQuantity} disabled={quantity <= 1} />
                    <span>{quantity}</span>
                    <PlusButton onClick={handleAddQuantity} />
                </div>
                <Button title="Incluir" onClick={handleAddToBag} />
            </Container>
            <FavoriteButton icon={heartIcon}  onClick={toggleFavorite} isfavorite={`${isFavorite}`} />
        </CardItemContainer>
    );
}
