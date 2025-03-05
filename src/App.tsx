import {useEffect, useState} from "react";
import {ProductCard} from "./components/ProductCard";
import {Loading, ErrorMessage} from "./utilities";
import {useProductsStore} from "./store/productsStore";
import {SearchBar} from "./components/SearchBar";
import {SearchResultsList} from "./components/SearchResultsList";
import {Product} from "./types/product";

export default function App() {
    const {products, loading, error, fetchProducts} = useProductsStore();
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (loading) return <Loading/>;
    if (error) return <ErrorMessage message={error}/>;

    return (
        <>
            <div className="">
                <SearchBar setResults={setSearchResults}/>
                {searchResults.length > 0 && <SearchResultsList results={searchResults}/>}
            </div>

            <h2 className="text-2xl font-bold mb-4">All Products</h2>

            <div className="grid grid-cols-3 gap-4">
                {searchResults.length > 0
                    ? searchResults.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                    : products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </>
    );
}
