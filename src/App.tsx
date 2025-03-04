import {useEffect} from "react";
import {ProductCard} from "./components/ProductCard";
import {Loading, ErrorMessage} from "./utilities";
import {useProductsStore} from "./store/productsStore";

export default function App() {
    const {products, loading, error, fetchProducts} = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (loading) return <Loading/>;
    if (error) return <ErrorMessage message={error}/>;

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">All Products</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                ) : (
                    <p className="text-lg text-gray-500">No products found.</p>
                )}
            </div>
        </>
    );
}
