import {Product} from "../types/product";
import {SearchResult} from "./SearchResult";

interface SearchResultsListProps {
    results: Product[];
}

export function SearchResultsList({results}: SearchResultsListProps) {
    return (
        <div className="absolute flex flex-col z-10 bg-white">
            {results.map((result) => (
                <SearchResult result={result} key={result.id}/>
            ))}
        </div>
    );
}