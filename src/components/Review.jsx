export default function Review({ review }) {
    return (

        <div className="p-4 border border-gray-500 rounded-lg bg-[#777c7650]">
            <div className="grid grid-cols-8 gap-4 items-center">
                <div className="col-span-5">
                    <h3 className="text-lg font-bold text-white">{review.reviewer}</h3>
                    <p className="text-sm text-gray-100 col-span-4">"{review.comment}"</p>
                </div>
                <div className="flex justify-end items-center col-span-3">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`text-lg ${index < review.rating ? "text-yellow-500" : "text-gray-500"}`}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}