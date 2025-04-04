import {useState} from "react";
import { useEffect } from "react";
import AddToBasket from "./AddToBasket";
import Review from "./Review";

function ProductDetail({product}) {
    const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);

    useEffect(() => {
        window.scrollTo(0, 0); // 將頁面滾動到頂部
    }, []);

    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8">
            {/* 左側產品圖 */}
            <div className="lg:col-span-7 lg:col-start-3 mx-2">
                <img
                    alt={product.title}
                    className="w-full h-108 object-cover rounded-md"
                    src={product.cover}
                />
            </div>

            {/* 右側產品資訊 */}
            <div className="lg:col-span-14 px-4">
                <h2 className="text-white opacity-40 mb-1 text-lg">
                    {product.author}
                </h2>
                <h1 className="text-white text-2xl font-bold mb-2">
                    {product.title}
                </h1>
                <p className="text-white opacity-60 text-base mb-4">
                    {product.summary}
                </p>

                {/* 產品價格、庫存、數量、加入購物車按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold">
                        US${product.price}.00
                    </p>
                    <p>
                        <span className="font-bold" >Status</span> : {product.stock > 0 ? "In Stock" : "Unavailable."}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">Qty :</span>
                        <select
                            className="select select-bordered w-20 bg-[#111818] text-white"
                            defaultValue={product.stock > 0 ? 1 : 0}
                            onChange={event => setQty(Number(event.target.value))}
                        >
                            {[...Array(product.stock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p>
                        <span className="font-bold">Total : </span>
                        {product.price * qty}
                    </p>
                    <AddToBasket/>
                </div>
            </div>

            {/* 評論 */}
            <div className="lg:col-start-3 lg:col-span-21 grid grid-cols-1 gap-4 px-4">
                <h2 className="text-white opacity-80 text-2xl font-bold">
                    Reviews
                </h2>
                <div className="flex flex-col gap-4">
                    {product.reviews.map((product) => (
                        <Review key={product.ID} review = {product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;