import { Button } from "../Button";
import {Container, MinusButton, PlusButton} from "./styles.js";

export function ItemQuantityControl({ onAddToBag, itemName, itemPrice, quantity, onQuantityChange, isColumn= false }) {

    const handleAddQuantity = () => {
        const newQuantity = quantity + 1;
        onQuantityChange(newQuantity);
    };

    const handleRemoveQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            onQuantityChange(newQuantity);
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
