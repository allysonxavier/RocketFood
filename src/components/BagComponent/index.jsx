import {useEffect, useState} from "react";
import {Button} from "../Button";
import {Container, MinusButton, PlusButton, CardItemContainer, FavoriteButton} from "./styles.js";



const HeartIcon = (props) => <svg width="26" height="24" viewBox="0 0 26 24" fill="red"
                                  xmlns="http://www.w3.org/2000/svg">
    <path
        d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704V22.704Z"
        stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

export function BagComponent({itemName, itemPrice, itemImageUrl, isColumn = false}) {
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
            const newItem = {name: itemName, price};
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
        <CardItemContainer>
            <img src={itemImageUrl} alt={itemName}/>
            <h3>{itemName}</h3>
            <p>R$ {price.toFixed(2)}</p>
            <Container $isColumn={isColumn}>
                <div>
                    <MinusButton onClick={handleRemoveQuantity} disabled={quantity <= 1}/>
                    <span>{quantity}</span>
                    <PlusButton onClick={handleAddQuantity}/>
                </div>
                <Button title="Incluir" onClick={handleAddToBag}/>
            </Container>
            <FavoriteButton onClick={toggleFavorite} isfavorite={`${isFavorite}`}>
                <HeartIcon  />
            </FavoriteButton>
        </CardItemContainer>
    );
}
