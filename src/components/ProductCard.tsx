import {Link} from "react-router-dom";
import {Product, SingleProduct} from "../types/product";
import {AddToCart} from "./AddToCart";
import {BackToShopBtn} from "./Button";

interface ProductCardProps {
    product: Product;
}

interface SingleProductCardProps {
    product: SingleProduct;
}

export function ProductCard({product}: ProductCardProps) {
    return (
        <div key={product.id} className="p-4 border flex flex-col items-center justify-between">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image.url}
                    alt={product.image?.alt || product.title}
                    className="object-cover w-80 h-80"
                />
            </Link>
            <p className="justify-start indent-4 p-3">
                {product.description}
            </p>
            {product.discountedPrice !== product.price ? (
                <span className="flex flex-col justify-start w-full p-3">
                    <p>Price: <del className="text-red-700">${product.price}</del></p>
                    <p>Discounted: ${product.discountedPrice}</p>
                </span>
            ) : (
                <p className="flex justify-start p-3 w-full">Price: ${product.price}</p>
            )}
            <p className="flex justify-start w-full p-3 mb-4">Rating: {product.rating} ⭐</p>
            <AddToCart product={product}/>
        </div>
    );
}

export function SingleProductCard({product}: SingleProductCardProps) {
    return (
        <div className="flex flex-col items-center mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

            <img
                src={product.image?.url}
                alt={product.image?.alt || product.title}
                className="object-cover rounded-md h-80 w-80"
            />

            <p className="mb-2 w-[80%] mx-auto m-4 indent-4">{product.description}</p>

            {product.discountedPrice !== product.price ? (
                <p className="flex flex-col justify-start w-full p-3">
                    <p>Price: <del className="text-red-700">${product.price}</del></p>
                    <p>Discounted: ${product.discountedPrice}</p>
                </p>
            ) : (
                <p className="flex justify-start p-3 w-full">Price: ${product.price}</p>
            )}

            <p className="text-sm text-gray-500 m-4">Rating: {product.rating} ⭐</p>

            <div className="flex justify-between w-full p-3">
            <AddToCart product={product}/>
            <BackToShopBtn />
            </div>


            <div className="flex flex-col justify-end w-full p-3 border-t border-gray-300 mt-4">
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