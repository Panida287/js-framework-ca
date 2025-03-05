import {Product} from "../types/product";
import {Link} from "react-router-dom";

interface SearchResultProps {
    result: Product;
}

export function SearchResult({result}: SearchResultProps) {
    return (
        <Link
            to={`/product/${result.id}`}
            className=""
        >
            {result.title}
        </Link>
    );
}