import {CartItems} from "../../components/Cart";
import {useCartStore} from "../../store/cartStore";
import {Button, BackToShopBtn} from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function CartPage() {
    const {cart, clearCart} = useCartStore();
    const navigate = useNavigate();

    useEffect(() => {
        const checkoutComplete = localStorage.getItem("checkoutComplete");

        if (!checkoutComplete) {
            navigate("/");
        } else {
            localStorage.removeItem("checkoutComplete");
        }
    }, [navigate]);

    const handleCheckout = () => {
        localStorage.setItem("checkoutComplete", "true");
        clearCart();
        navigate("/checkout/success");
    }
    return (
        <>
            <h1 className="flex justify-center items-center font-bold text-xl text-gray-800 leading-tight mb-4">
                Checkout
            </h1>
            <CartItems/>
            {cart.length > 0 ?
                (
                    <div className=" flex justify-between max-w-4xl mx-auto p-6">
                        <Button text="Clear cart" onClick={clearCart} variant="danger"/>
                        <Button text="Check Out" onClick={handleCheckout} variant="secondary"/>
                    </div>
                ) : (
                    <div className="flex justify-center p-6">
                        <BackToShopBtn/>
                    </div>
                )
            }
        </>
    );
}
