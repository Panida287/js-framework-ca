import {create} from "zustand";
import {Product} from "../types/product";

const CART_STORE_KEY = "cart";

interface CartProduct extends Product {
    quantity: number;
}

interface CartState {
    cart: CartProduct[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    incrementCart: (productId: string) => void;
    decrementCart: (productId: string) => void;
}


export const useCartStore = create<CartState>((set) => ({
    cart: JSON.parse(localStorage.getItem(CART_STORE_KEY) || "[]"),

    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        let updatedCart;

        if (existingItem) {
            updatedCart = state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...state.cart, { ...product, quantity: 1 }];
        }

        localStorage.setItem(CART_STORE_KEY, JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),

    removeFromCart: (productId) => set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== productId);
        localStorage.setItem(CART_STORE_KEY, JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),

    incrementCart: (productId) => set((state) => {
        const updatedCart = state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );

        localStorage.setItem(CART_STORE_KEY, JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),

    decrementCart: (productId) => set((state) => {
        const updatedCart = state.cart
            .map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        localStorage.setItem(CART_STORE_KEY, JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),

    clearCart: () => {
        localStorage.removeItem(CART_STORE_KEY);
        set({ cart: [] });
    },
}));