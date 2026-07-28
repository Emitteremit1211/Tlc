import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {

    return (

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">

            {blogs.map((blog, i) => (

                <div
                    key={blog._id}
                    className="tlc-fade-up"
                    style={{ animationDelay: `${i * 70}ms` }}
                >
                    <BlogCard blog={blog} />
                </div>

            ))}

        </div>

    );

};

export default BlogGrid;