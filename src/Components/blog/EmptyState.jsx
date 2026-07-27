import { FileSearch } from "lucide-react";

const EmptyState = () => {

    return (

        <div className="text-center py-24">

            <div className="mx-auto w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">

                <FileSearch size={40} className="text-slate-500"/>

            </div>

            <h2 className="text-3xl font-bold mt-8">

                No Blog Found

            </h2>

            <p className="text-slate-500 mt-4">

                Try another keyword or category.

            </p>

        </div>

    );

};

export default EmptyState;