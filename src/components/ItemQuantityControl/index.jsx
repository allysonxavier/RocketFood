import  { useState } from "react";
import { Button } from "../Button";
import {Container, MinusButton, PlusButton} from "./styles.js";

export function ItemQuantityControl({ onAddToBag, itemName, itemPrice, isColumn= false }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleRemoveQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToBag = () => {
        if (quantity > 1) {
            itemPrice *= quantity;
        }

        onAddToBag({ itemName, itemPrice, quantity, });
    };

    return (
        <Container $isColumn={isColumn}>
            <div>
                <MinusButton onClick={handleRemoveQuantity} disabled={quantity <= 1}/>
                <span>{quantity}</span>
                <PlusButton onClick={handleAddQuantity}/>
            </div>
            <Button title="Incluir" onClick={handleAddToBag} />
        </Container>
    );
}
