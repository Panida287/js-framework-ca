import {Product} from "../types/product";
import {SearchResult} from "./SearchResult";

interface SearchResultsListProps {
    results: Product[];
}

export function SearchResultsList({results}: SearchResultsListProps) {
    return (
        <div className="flex flex-col bg-white p-2 mx-auto items-center border border-gray-200 rounded">
            {results.map((result) => (
                <SearchResult result={result} key={result.id}/>
            ))}
        </div>
    );
}