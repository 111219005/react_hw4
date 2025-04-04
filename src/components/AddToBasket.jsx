import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

export default function AddToBasket({ product, qty }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const addToCart = () => {
        setShowToast(true);
        dispatch(addCartItems({
            id: product.ID,
            title: product.title,
            image: product.cover,
            price: product.price,
            stock: product.stock,
            qty,
        }));
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };
    return (
        <>
            <button className="text-white bg-[#1f282b] border-[#777c76] h-12 btn px-8 py-5 border-2 rounded-full font-bold flex items-center justify-center shadow-none" onClick={addToCart}>
                Add To Basket
            </button>
            {
            showToast && (
                <div className="toast toast-end">
                    <div className="alert">
                        <span>
                            {qty}{qty > 1 ? " pieces" : " piece"} of {product.title} {qty > 1 ? "have" : "has"} been added to your cart.
                        </span>
                    </div>
                </div>
            )
            }
        </>
    );
}