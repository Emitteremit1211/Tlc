const Categories = ({ blogs, active, setActive }) => {

    const categories = [
        "All",
        ...new Set(blogs.map(blog => blog.category))
    ];

    return (
        <div className="flex flex-wrap gap-3 py-10">

            {categories.map(category => (

                <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                        active === category
                            ? "bg-[#0D2B3E] text-white"
                            : "tlc-glass text-[#4A5D6B] hover:text-[#0D2B3E]"
                    }`}
                >
                    {category}
                </button>

            ))}

        </div>
    );
};

export default Categories;