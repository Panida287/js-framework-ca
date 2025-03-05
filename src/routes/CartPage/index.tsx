import {CartItems} from "../../components/Cart";
import {useCartStore} from "../../store/cartStore";
import {Link} from "react-router-dom";

export default function CartPage() {
    const {cart, clearCart} = useCartStore();
    return (
        <>
            <h1 className="flex justify-center items-center font-bold text-xl text-gray-800 leading-tight mb-4">
                Cart
            </h1>
            <CartItems/>
            {cart.length > 0 ?
                (
                    <div className=" flex justify-between max-w-4xl mx-auto p-6">
                        <button
                            onClick={clearCart}
                            className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-all"
                        >
                            Clear Cart
                        </button>

                        <Link to="/checkout"
                              className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-all">
                            Check Out
                        </Link>
                    </div>
                ) : (
                    <div className="flex justify-center p-6">
                        <Link to="/"
                              className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-all"
                        >
                            Back to shopping
                        </Link>
                    </div>
                )
            }
        </>
    );
}
