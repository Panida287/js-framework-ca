import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
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
        element: _jsx(Layout, {}),
        children: [
            {
                path: "",
                element: _jsx(App, {})
            },
            {
                path: "product/:product:Id",
                element: _jsx(ProductPage, {})
            },
            {
                path: "cart",
                element: _jsx(CartPage, {})
            },
            {
                path: "checkout",
                element: _jsx(CheckoutPage, {}),
                children: [
                    {
                        path: "success",
                        element: _jsx(CheckoutSuccessPage, {})
                    }
                ]
            },
            {
                path: "contact",
                element: _jsx(ContactPage, {})
            }
        ]
    }
]);
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
