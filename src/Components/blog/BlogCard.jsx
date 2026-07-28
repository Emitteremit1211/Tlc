import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

    return (

        <Link
            to={`/blog/${blog.slug}`}
            className="tlc-glass group relative overflow-hidden rounded-3xl flex flex-col hover:-translate-y-1.5 transition-all duration-300 tlc-sheen"
        >

            <div className="overflow-hidden">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-1">

                <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-widest">
                    {blog.category}
                </span>

                <h3 className="tlc-display text-xl font-semibold mt-3 text-[#0D2B3E] group-hover:text-[#1B8C86] transition leading-snug">
                    {blog.title}
                </h3>

                <p className="text-[#4A5D6B] text-sm mt-3 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                </p>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#0D2B3E]/10 text-xs text-[#4A5D6B]/70">
                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {blog.readTime}
                    </span>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0D2B3E] group-hover:text-[#1B8C86] transition">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
            </div>

        </Link>

    );

};

export default BlogCard;