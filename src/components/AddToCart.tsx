import {useCartStore} from "../store/cartStore";
import {Product} from "../types/product";
import {Button} from "./Button";

interface AddToCartProps {
    product: Product;
}

export function AddToCart({product}: AddToCartProps) {
    const {addToCart, removeFromCart, incrementCart, decrementCart, cart} = useCartStore();

    const cartItem = cart.find((item) => item.id === product.id);
    const isInCart = !!cartItem;

    return (
        <div className="flex items-center gap-2">
            {!isInCart ? (
                <Button
                    text="Add to Cart"
                    onClick={() => addToCart(product)}
                    variant="primary"
                />
            ) : (
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => decrementCart(product.id)}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                    >
                        -
                    </button>

                    <span className="text-lg font-semibold">{cartItem.quantity}</span>

                    <button
                        onClick={() => incrementCart(product.id)}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                    >
                        +
                    </button>

                    <Button
                        text="Remove"
                        onClick={() => removeFromCart(product.id)}
                        variant="danger"
                    />
                </div>
            )}
        </div>
    );
}
