import {useCartStore} from "../store/cartStore";
import {Product} from "../types/product";

interface AddToCartProps {
    product: Product;
}

export function AddToCart({product}: AddToCartProps) {
    const {addToCart, removeFromCart, cart} = useCartStore();

    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <button
            className={`px-4 py-2 rounded mt-4 ${
                isInCart ? "bg-red-600 text-white" : "bg-blue-600 text-white"
            }`}
            onClick={() => (isInCart ? removeFromCart(product.id) : addToCart(product))}
        >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
    )
}