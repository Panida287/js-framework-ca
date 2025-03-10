import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function CheckoutSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkoutComplete = localStorage.getItem("checkoutComplete");

        if (!checkoutComplete) {
            navigate("/");
        } else {
            setTimeout(() => {
                localStorage.removeItem("checkoutComplete");
            }, 100);
        }
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-green-600">Order Successful!</h1>
            <p className="text-gray-700">Thank you for your purchase. Your order has been processed.</p>
        </div>
    );
}
