import { Link } from "react-router-dom";
import { Product, SingleProduct } from "../types/product";

interface ProductCardProps {
    product: Product;
}

interface SingleProductCardProps {
    product: SingleProduct;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div key={product.id} className="p-4 border">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <Link to={`/product/${product.id}`}>
                <img
                    height="200"
                    src={product.image.url}
                    alt={product.image?.alt || product.title}
                    className="object-cover"
                />
            </Link>
            <p>Description: {product.description}</p>
            {product.discountedPrice ? (
                <p>
                    Price: <del>${product.price}</del> Discounted: ${product.discountedPrice}
                </p>
            ) : (
                <p>Price: ${product.price}</p>
            )}
            <p>Rating: {product.rating} ⭐</p>
        </div>
    );
}

export function SingleProductCard({ product }: SingleProductCardProps) {
    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="mb-2">{product.description}</p>
            <img
                src={product.image?.url}
                alt={product.image?.alt || product.title}
                className="w-full max-w-md object-cover rounded-md"
            />
            {product.discountedPrice ? (
                <p>
                    Price: <del>${product.price}</del> Discounted: ${product.discountedPrice}
                </p>
            ) : (
                <p>Price: ${product.price}</p>
            )}
            <p className="text-sm text-gray-500">Rating: {product.rating} ⭐</p>

            <div>
                <h4 className="font-bold mb-2">Reviews</h4>
                {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review) => (
                        <div key={review.id} className="border-b py-2">
                            <p>
                                <strong>{review.username}</strong>: {review.description}
                            </p>
                            <p className="text-sm text-gray-500">Rating: {review.rating} ⭐</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews</p>
                )}
            </div>
        </div>
    );
}