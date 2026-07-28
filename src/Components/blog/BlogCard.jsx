import { CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

    return (

        <Link
            to={`/blog/${blog.slug}`}
            className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300"
        >

            <img
                src={
                    blog.coverImage ||
                    "https://placehold.co/600x400?text=TLC+Blog"
                }
                alt={blog.title}
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-6">

                <span className="text-teal-600 text-sm font-semibold">

                    {blog.category}

                </span>

                <h3 className="text-2xl font-bold mt-3 group-hover:text-teal-600 transition">

                    {blog.title}

                </h3>

                <p className="text-slate-600 mt-4 line-clamp-3">

                    {blog.excerpt}

                </p>

                <div className="flex justify-between mt-6 text-sm text-slate-500">

                    <span className="flex items-center gap-2">

                        <CalendarDays size={16} />

                        {new Date(blog.createdAt).toLocaleDateString()}

                    </span>

                    <span className="flex items-center gap-2">

                        <Clock size={16} />

                        {blog.readTime}

                    </span>

                </div>

            </div>

        </Link>

    );

};

export default BlogCard;