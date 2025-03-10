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
            <div className="flex justify-center items-center">
                <SearchBar setResults={setSearchResults}/>
            </div>
            <div className="flex w-full justify-center">
                {searchResults.length > 0 && <SearchResultsList results={searchResults}/>}
            </div>

            <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">All Products</h2>

            <div className="grid gap-4 w-[90%] max-w-[1200px] mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
