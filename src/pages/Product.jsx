import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import products from "../json/books_reviews.json";
import { use } from "react";

function Product() {

    const { productId } = useParams();
    const product = products.find((x) => x.ID === Number(productId));
    const title = "Product Detail";
    return (
        <div>
            <div className="container mx-auto main-layout">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header
                    title={title}
                    slogan="Explore the unknown, starting with this book." />
                <ProductDetail product={product} className="content" />
            </div>
            <Footer className="layout-footer" />
        </div>
    );
}

export default Product;

// const [searchParams] = useSearchParams();
// const [qty, setQty] = useState(1);

// useEffect(() => {
//     const qtyFromBasket = searchParams.get("qtyFromBasket");
//     const parsedQty = qtyFromBasket ? Number(qtyFromBasket) : (product.stock > 0 ? 1 : 0);
//     setQty(isNaN(parsedQty) || parsedQty < 0 ? 0 : parsedQty);
// }, [searchParams, product.stock]);