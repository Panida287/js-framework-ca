import {create} from "zustand";
import {Product} from "../types/product";

const CART_STORE_KEY = "cart";

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>(
    (set) => ({
        cart: JSON.parse(localStorage.getItem(CART_STORE_KEY) || "[]"),

        addToCart: (product) => set((state) => {
            if (state.cart.find((item) => item.id === product.id)) {
                return state;
            }
            const updatedCart = [...state.cart, product];
            localStorage.setItem(CART_STORE_KEY, JSON.stringify(updatedCart));
            console.log("Cart Updated:", updatedCart);
            return {cart: updatedCart};
        }),

        removeFromCart: (productId) => set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== productId);
            localStorage.setItem(CART_STORE_KEY, JSON.stringify(updatedCart));
            console.log("Cart Removed:", updatedCart);
            return {cart: updatedCart};
        }),

        clearCart: () => {
            localStorage.removeItem(CART_STORE_KEY);
            set({cart: []});
        }
    }));