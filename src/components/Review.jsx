export default function Review({review}) {
    return(
        
        <div className="p-4 border border-gray-500 rounded-lg bg-[#777c7650]">
            <div className="grid grid-cols-8 gap-4 items-center">
            <div className="col-span-5">
                <h3 className="text-lg font-bold text-white">{review.reviewer}</h3>
                <p className="text-sm text-gray-100 col-span-4">"{review.comment}"</p>
            </div>
            <div className="flex justify-end items-center col-span-3">
                    {[...Array(review.rating)].map((_, index) => (
                        <span key={index} className="text-yellow-500 text-lg">★</span>
                    ))}
                    {[...Array(5 - review.rating)].map((_, index) => (
                        <span key={index} className="text-gray-500 text-lg">★</span>
                    ))}
                </div>
            </div>
        </div>
    );    
}