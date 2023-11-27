import React, { useState } from "react";
import Plus from "../../assets/Plus.svg";
import Minus from "../../assets/Minus.svg";
import { Button } from "../Button";

export function ItemQuantityControl({ onAddToBag, itemName, itemPrice }) {
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
        alert("Adicionado ao carrinho!");
        onAddToBag({ itemName, itemPrice, quantity });
    };

    return (
        <div>
            <Button onClick={handleRemoveQuantity} disabled={quantity <= 1}>
                <Minus size={20} />

            </Button>
            <span>{quantity}</span>
            <Button onClick={handleAddQuantity}>
                <Plus size={20} />

            </Button>
            <Button title="Incluir" onClick={handleAddToBag} />
        </div>
    );
}
