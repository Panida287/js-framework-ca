import {useCartStore} from "../store/cartStore";
import {Product} from "../types/product";
import {Button} from "./Button";

interface AddToCartProps {
    product: Product;
}

export function AddToCart({product}: AddToCartProps) {
    const {addToCart, removeFromCart, cart} = useCartStore();

    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <Button
            text={isInCart ? "Remove from Cart" : "Add to Cart"}
            onClick={() => {
                if (isInCart) {
                    removeFromCart(product.id);
                    alert(`${product.title} removed from cart`);
                } else {
                    addToCart(product);
                    alert(`${product.title} added to cart`);
                }
            }}
            variant={isInCart ? "danger" : "primary"}
        />
    );

}