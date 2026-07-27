import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedPost = ({ post }) => {

    if (!post) return null;

    return (

        <section className="mb-16">

            <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[32px] shadow-xl overflow-hidden">

                <div className="relative h-[420px]">

                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-6 left-6">

                        <span className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold">

                            Featured Article

                        </span>

                    </div>

                </div>

                <div className="p-10">

                    <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">

                        {post.category}

                    </span>

                    <h2 className="text-4xl font-bold text-slate-900 mt-5 leading-tight">

                        {post.title}

                    </h2>

                    <p className="text-slate-600 mt-6 leading-8">

                        {post.excerpt}

                    </p>

                    <div className="flex gap-6 mt-8 text-slate-500">

                        <div className="flex items-center gap-2">

                            <CalendarDays size={18} />

                            {new Date(post.createdAt).toLocaleDateString()}

                        </div>

                        <div className="flex items-center gap-2">

                            <Clock size={18} />

                            {post.readTime}

                        </div>

                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-3 mt-10 bg-[#0B2C40] hover:bg-[#154866] text-white px-7 py-4 rounded-xl transition-all"
                    >
                        Read Article

                        <ArrowRight size={20} />

                    </Link>

                </div>

            </div>

        </section>

    );

};

export default FeaturedPost;