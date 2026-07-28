import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="tlc-glass rounded-3xl p-5">

            <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-2xl bg-[#0D2B3E] flex items-center justify-center shrink-0">
                    <Search className="text-white w-5 h-5" />
                </div>

                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search healthcare articles..."
                    className="flex-1 bg-transparent outline-none text-base text-[#0D2B3E] placeholder:text-[#4A5D6B]/50"
                />

            </div>

        </div>
    );
};

export default SearchBar;