import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useProductsStore} from "../store/productsStore";
import {Product} from "../types/product";

interface SearchBarProps {
    setResults: (results: Product[]) => void;
}

export function SearchBar({setResults}: SearchBarProps) {
    const [input, setInput] = useState<string>("");
    const {products} = useProductsStore();

    const filterProducts = (value: string) => {
        if (!value) {
            setResults([]);
            return;
        }

        const filteredResults = products.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filteredResults);
    };

    const handleChange = (value: string) => {
        setInput(value);
        filterProducts(value);
    };

    return (
        <div className="flex justify-center items-center gap-4 m-4">
            <FaSearch id="search-icon"/>
            <input
                className="border rounded p-2"
                type="text"
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}


