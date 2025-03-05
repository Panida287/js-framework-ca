import {useCartStore} from "../store/cartStore";
import {Link} from "react-router-dom";
import {Button} from "./Button";

function CartTotal() {
    const {cart} = useCartStore();

    const totalPrice = cart.reduce((acc, product) =>
        acc + (product.discountedPrice ? product.discountedPrice : product.price), 0);

    return (
        <div className="flex justify-between items-center p-4 border-t mt-4">
            <h3 className="text-lg font-bold">Total:</h3>
            <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
        </div>
    );
}

export function CartItems() {
    const {cart, removeFromCart} = useCartStore();
    return (
        <div className="max-w-4xl mx-auto p-6">
            {cart.length === 0 ?
                (
                    <p className="text-sm text-red-600 text-center">
                        Your cart is empty.
                    </p>
                ) : (
                    <>
                        {cart.map((product) => (
                            <div key={product.id} className="flex justify-between items-center p-4 border mb-2">
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src={product.image.url}
                                        alt={product.image?.alt || product.title}
                                        className="object-cover h-20"
                                    />
                                </Link>
                                <h3 className="text-lg font-bold">{product.title}</h3>
                                {product.discountedPrice !== product.price ? (
                                    <p>
                                        Price: <del>${product.price}</del> ${product.discountedPrice}
                                    </p>
                                ) : (
                                    <p>Price: ${product.price}</p>
                                )}
                                <Button text="Remove" onClick={() => removeFromCart(product.id)} variant="danger" />
                            </div>
                        ))}
                        <CartTotal/>
                    </>
                )}
        </div>
    );
}
