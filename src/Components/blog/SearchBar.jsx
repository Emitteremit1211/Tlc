import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-xl p-5">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center">

                    <Search className="text-white w-6 h-6" />

                </div>

                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search healthcare articles..."
                    className="flex-1 bg-transparent outline-none text-lg"
                />

            </div>

        </div>
    );
};

export default SearchBar;