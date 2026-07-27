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
                    className={`px-5 py-3 rounded-full transition ${
                        active === category
                            ? "bg-teal-600 text-white"
                            : "bg-white shadow text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    {category}
                </button>

            ))}

        </div>
    );
};

export default Categories;