import {create} from "zustand";
import {Product, SingleProduct} from "../types/product";

interface ProductsState {
    products: Product[];
    product: SingleProduct | null;
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    fetchSingleProduct: (productId: string) => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
    products: [],
    product: null,
    loading: false,
    error: null,

    fetchProducts: async () => {
        set({loading: true, error: null});
        try {
            const response = await fetch("https://v2.api.noroff.dev/online-shop");
            if (!response.ok) {
                throw new Error(`Failed to fetch product ${response.status}`);
            }
            const result = await response.json();
            set({products: result.data, loading: false});
        } catch (err) {
            set({
                loading: false,
                error: err instanceof Error ? err.message : "An unknown error occurred.",
            });
        }
    },

    fetchSingleProduct: async (productId: string) => {
        set({loading: true, error: null});
        try {
            const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch product ${response.status}`);
            }
            const result = await response.json();
            set({product: result.data, loading: false});
        } catch (err) {
            set({
                loading: false,
                error: err instanceof Error ? err.message : "An unknown error occurred.",
            });
        }
    }
}));