import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedPost = ({ post }) => {

    if (!post) return null;

    return (

        <section className="mb-16">

            <div className="tlc-glass grid lg:grid-cols-2 gap-10 items-center rounded-[32px] overflow-hidden">

                <div className="relative h-[420px]">

                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-6 left-6">
                        <span className="tlc-glass-dark text-white px-5 py-2 rounded-full text-sm font-semibold">
                            Featured Article
                        </span>
                    </div>

                </div>

                <div className="p-10">

                    <span className="inline-block bg-[#1B8C86]/10 text-[#1B8C86] px-4 py-2 rounded-full text-sm font-semibold">
                        {post.category}
                    </span>

                    <h2 className="tlc-display text-3xl md:text-4xl font-semibold text-[#0D2B3E] mt-5 leading-tight">
                        {post.title}
                    </h2>

                    <p className="text-[#4A5D6B] mt-6 leading-8">
                        {post.excerpt}
                    </p>

                    <div className="flex gap-6 mt-8 text-[#4A5D6B]/70 text-sm">

                        <div className="flex items-center gap-2">
                            <CalendarDays size={16} />
                            {new Date(post.createdAt).toLocaleDateString()}
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime}
                        </div>

                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-3 mt-10 bg-[#0D2B3E] hover:bg-[#1B8C86] text-white px-7 py-3.5 rounded-2xl transition-all font-semibold"
                    >
                        Read Article
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

        </section>

    );

};

export default FeaturedPost;