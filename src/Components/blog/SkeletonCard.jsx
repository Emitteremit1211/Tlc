const SkeletonCard = () => {

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {[1, 2, 3, 4, 5, 6].map((item) => (

                <div
                    key={item}
                    className="tlc-glass animate-pulse rounded-3xl overflow-hidden"
                >

                    <div className="h-56 bg-[#0D2B3E]/10"></div>

                    <div className="p-6">

                        <div className="h-3.5 bg-[#0D2B3E]/10 rounded-full w-24"></div>

                        <div className="h-7 bg-[#0D2B3E]/10 rounded-lg mt-5"></div>

                        <div className="h-3.5 bg-[#0D2B3E]/10 rounded-full mt-4"></div>

                        <div className="h-3.5 bg-[#0D2B3E]/10 rounded-full mt-3"></div>

                        <div className="h-3.5 bg-[#0D2B3E]/10 rounded-full mt-3 w-2/3"></div>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default SkeletonCard;