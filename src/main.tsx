import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout"
import ProductPage from "./routes/ProductPage";
import CheckoutPage from "./routes/CheckoutPage";
import CheckoutSuccessPage from "./routes/CheckoutSuccessPage";
import CartPage from "./routes/CartPage";
import ContactPage from "./routes/ContactPage";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />
            },
            {
                path: "product/:product:Id",
                element: <ProductPage />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
                children: [
                    {
                        path: "success",
                        element: <CheckoutSuccessPage />
                    }
                ]
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
