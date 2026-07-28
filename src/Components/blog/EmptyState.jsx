import { FileSearch } from "lucide-react";

const EmptyState = () => {

    return (

        <div className="tlc-glass max-w-lg mx-auto text-center py-16 px-8 rounded-3xl">

            <div className="mx-auto w-20 h-20 rounded-full bg-[#0D2B3E]/10 flex items-center justify-center">
                <FileSearch size={36} className="text-[#0D2B3E]" />
            </div>

            <h2 className="tlc-display text-2xl font-semibold mt-7 text-[#0D2B3E]">
                No Blog Found
            </h2>

            <p className="text-[#4A5D6B] mt-3 text-sm">
                Try another keyword or category.
            </p>

        </div>

    );

};

export default EmptyState;