import {useParams} from "react-router-dom";
import {ErrorMessage, Loading} from "../../utilities";
import {useEffect} from "react";
import {useProductsStore} from "../../store/productsStore";
import {SingleProductCard} from "../../components/ProductCard";

export default function ProductPage() {
    const {productId} = useParams<{ productId: string }>();

    const {product, loading, error, fetchSingleProduct} = useProductsStore();

    useEffect(() => {
        if (productId) {
            fetchSingleProduct(productId);
        }
    }, [productId, fetchSingleProduct]);

    if (loading) return <Loading/>;
    if (error) return <ErrorMessage message={error}/>;
    return product ? <SingleProductCard product={product}/> : null;

}
