import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CalendarDays, Clock, ArrowLeft, User } from "lucide-react";
import { getBlog } from "../services/blogApi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BlogDetails = () => {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getBlog(slug);
                setBlog(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Blog not found.
            </div>
        );
    }

    return (
        <>
        <Navbar/>
            <main className="bg-[#F6F8FB] min-h-screen">

                <section className="relative h-[520px]">

                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="absolute inset-0 flex items-center">

                        <div className="max-w-6xl mx-auto px-6 text-white">

                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 mb-8 text-teal-300"
                            >
                                <ArrowLeft size={18} />

                                Back to Blog

                            </Link>

                            <span className="inline-block bg-teal-600 px-5 py-2 rounded-full">

                                {blog.category}

                            </span>

                            <h1 className="text-5xl font-bold mt-6 leading-tight max-w-4xl">

                                {blog.title}

                            </h1>

                            <div className="flex flex-wrap gap-6 mt-8">

                                <span className="flex items-center gap-2">

                                    <User size={18} />

                                    TLC Assist Living

                                </span>

                                <span className="flex items-center gap-2">

                                    <CalendarDays size={18} />

                                    {new Date(blog.createdAt).toLocaleDateString()}

                                </span>

                                <span className="flex items-center gap-2">

                                    <Clock size={18} />

                                    {blog.readTime}

                                </span>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="max-w-4xl mx-auto px-6 py-20">

                    <div className="bg-white rounded-3xl shadow-xl p-10">

                        <p className="text-xl text-slate-600 mb-10">

                            {blog.excerpt}

                        </p>

                        <div
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: blog.content,
                            }}
                        />

                    </div>

                </section>

            </main>
            <Footer/>
        </>
    );
};

export default BlogDetails;