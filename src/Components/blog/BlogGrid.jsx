import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {

    return (

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {blogs.map(blog => (

                <BlogCard

                    key={blog._id}

                    blog={blog}

                />

            ))}

        </div>

    );

};

export default BlogGrid;
