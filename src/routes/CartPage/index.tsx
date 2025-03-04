import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCartStore();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="flex justify-center items-center font-bold text-xl text-gray-800 leading-tight mb-4">
                Cart
            </h2>

            {cart.length === 0 ? (
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
                            {product.discountedPrice ? (
                                <p>
                                    Price: <del>${product.price}</del> ${product.discountedPrice}
                                </p>
                            ) : (
                                <p>Price: ${product.price}</p>
                            )}
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="px-4 py-2 rounded bg-red-600 text-white"
                            >
                                Remove from cart
                            </button>
                        </div>
                    ))}

                    <div className="flex justify-center mt-6">
                        <button
                            onClick={clearCart}
                            className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-all"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
