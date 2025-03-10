import {useCartStore} from "../store/cartStore";
import {Link} from "react-router-dom";
import {Button} from "./Button";

export function CartTotal() {
    const { cart } = useCartStore();

    const totalPrice = cart.reduce((acc, product) =>
        acc + (product.discountedPrice ? product.discountedPrice : product.price) * product.quantity, 0
    );

    return (
        <div className="flex justify-between items-center p-4 border-t mt-4 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold">Total:</h3>
            <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
        </div>
    );
}

export function CartItems() {
    const { cart, removeFromCart, incrementCart, decrementCart } = useCartStore();

    return (
        <div className="max-w-4xl mx-auto p-6">
            {cart.length === 0 ? (
                <p className="text-sm text-red-600 text-center">
                    Your cart is empty.
                </p>
            ) : (
                <>
                    {cart.map((product) => (
                        <div key={product.id} className="flex flex-col md:flex-row justify-between items-center p-4 border mb-2 gap-4">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image.url}
                                    alt={product.image?.alt || product.title}
                                    className="object-cover h-20 w-20"
                                />
                            </Link>
                            <h3 className="text-lg font-bold">{product.title}</h3>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decrementCart(product.id)}
                                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                                >
                                    -
                                </button>
                                <span className="text-lg font-semibold">{product.quantity}</span>
                                <button
                                    onClick={() => incrementCart(product.id)}
                                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                                >
                                    +
                                </button>
                            </div>

                            <div className="text-center">
                                {product.discountedPrice !== product.price ? (
                                    <>
                                        <p className="text-red-700 line-through">${product.price}</p>
                                        <p className="font-bold">${product.discountedPrice}</p>
                                    </>
                                ) : (
                                    <p className="font-bold">${product.price}</p>
                                )}
                            </div>

                            <Button text="Remove" onClick={() => removeFromCart(product.id)} variant="danger" />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
