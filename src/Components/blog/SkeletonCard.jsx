const SkeletonCard = () => {

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1,2,3,4,5,6].map((item)=>(

                <div
                    key={item}
                    className="animate-pulse bg-white rounded-3xl overflow-hidden shadow"
                >

                    <div className="h-60 bg-slate-200"></div>

                    <div className="p-6">

                        <div className="h-4 bg-slate-200 rounded w-24"></div>

                        <div className="h-8 bg-slate-200 rounded mt-5"></div>

                        <div className="h-4 bg-slate-200 rounded mt-4"></div>

                        <div className="h-4 bg-slate-200 rounded mt-3"></div>

                        <div className="h-4 bg-slate-200 rounded mt-3 w-2/3"></div>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default SkeletonCard;