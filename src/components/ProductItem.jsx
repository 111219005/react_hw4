import {Link} from "react-router";
import _ from "lodash";

function ProductItem({ product }) {
  return (
    <section className="pt-4 px-3 lg:px-4 bg">
        <div className="p-5 border border-gray-500 rounded-xl overflow-hidden bg-[#EBE1D2]">
            <Link to={`/products/id/${product.ID}`}>
                <div className="flex justify-center items-center">
                    <img className="rounded-xl" src={product.cover} alt={product.name} />
                </div>
            </Link>
            <div className="p-4">
                <h6 className="text-[#593C3C] opacity-80 mb-1">
                    {product.author}
                </h6>
                <h5 className="text-[#593C3C] mb-3">
                    {product.title}
                </h5>
                <p className="text-[#593C3C] opacity-70 mb-3">
                    {_.truncate(product.summary, { length: 60, omission: "..." })}
                </p>
                <div className="flex justify-between flex-wrap">
                    <Link to={`/products/id/${product.ID}`} className="no-underline text-[#777c76] flex items-center font-bold">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 leading-none" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                    <span className="text-[#593C3C70] inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        {product.price}
                    </span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ProductItem;