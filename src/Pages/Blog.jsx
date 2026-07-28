import React, { useEffect, useState } from "react";
import BlogHero from "../Components/blog/BlogHero";
import FeaturedPost from "../Components/blog/FeaturedPost";
import SearchBar from "../Components/blog/SearchBar";
import Categories from "../Components/blog/Categories";
import BlogGrid from "../Components/blog/BlogGrid";
import Newsletter from "../Components/blog/Newsletter";
import CTA from "../Components/blog/CTA";
import SkeletonCard from "../Components/blog/SkeletonCard";
import EmptyState from "../Components/blog/EmptyState";
import { AlertCircle, RefreshCcw } from "lucide-react";

import { getBlogs } from "../services/blogApi";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true);
        setError("");
        try {
            const data = await getBlogs();
            setBlogs(data);
            setFilteredBlogs(data);
        } catch (err) {
            console.log(err);
            setError("We couldn't load articles right now. Please try again in a moment.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let filtered = blogs;

        if (category !== "All") {
            filtered = filtered.filter(blog => blog.category === category);
        }

        if (search) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredBlogs(filtered);
    }, [search, category, blogs]);

    const featured = blogs.find(blog => blog.featured);

    const clearFilters = () => {
        setSearch("");
        setCategory("All");
    };

    return (
        <>
            <Navbar />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                .tlc-root { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
                .tlc-display { font-family: 'Fraunces', Georgia, serif; }

                .tlc-blob {
                    position: absolute;
                    border-radius: 9999px;
                    filter: blur(70px);
                    opacity: 0.5;
                    pointer-events: none;
                }

                .tlc-glass {
                    background: rgba(255,255,255,0.5);
                    backdrop-filter: blur(22px) saturate(160%);
                    -webkit-backdrop-filter: blur(22px) saturate(160%);
                    border: 1px solid rgba(255,255,255,0.65);
                    box-shadow: 0 8px 32px rgba(15,42,61,0.14), inset 0 1px 0 rgba(255,255,255,0.6);
                }
                .tlc-glass-dark {
                    background: rgba(13,43,62,0.55);
                    backdrop-filter: blur(22px) saturate(160%);
                    -webkit-backdrop-filter: blur(22px) saturate(160%);
                    border: 1px solid rgba(255,255,255,0.14);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08);
                }
                .tlc-sheen::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(120deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 30%);
                    pointer-events: none;
                }
                .tlc-input-dark {
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.16);
                }
                .tlc-input-dark:focus {
                    outline: none;
                    border-color: #7FDCD2;
                    box-shadow: 0 0 0 3px rgba(127,220,210,0.2);
                }

                @keyframes tlc-fade-up {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .tlc-fade-up {
                    animation: tlc-fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                @media (prefers-reduced-motion: reduce) {
                    .tlc-blob, .tlc-fade-up { animation: none; }
                }
            `}</style>

            <main className="tlc-root relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white">

                {/* ambient background blobs, sitting behind the content sections */}
                <div className="tlc-blob w-[380px] h-[380px] bg-[#7FDCD2] top-[500px] left-[-120px]" />
                <div className="tlc-blob w-[340px] h-[340px] bg-[#FFC9A3] top-[1300px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[2200px] left-[-80px]" />

                <BlogHero />

                <section className="relative max-w-7xl mx-auto px-6 -mt-16 z-20">
                    <SearchBar value={search} onChange={setSearch} />
                </section>

                <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                    {featured && <FeaturedPost post={featured} />}
                </section>

                <section className="relative z-10 max-w-7xl mx-auto px-6">
                    <Categories
                        blogs={blogs}
                        active={category}
                        setActive={setCategory}
                    />
                </section>

                <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                    {loading ? (
                        <SkeletonCard />
                    ) : error ? (
                        <div className="tlc-glass max-w-lg mx-auto text-center py-12 px-8 rounded-3xl">
                            <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-4" />
                            <p className="text-[#0D2B3E] font-semibold">{error}</p>
                            <button
                                onClick={fetchBlogs}
                                className="mt-6 inline-flex items-center gap-2 bg-[#0D2B3E] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition"
                            >
                                <RefreshCcw className="w-4 h-4" /> Try Again
                            </button>
                        </div>
                    ) : filteredBlogs.length === 0 ? (
                        <div className="text-center">
                            <EmptyState />
                            {(search || category !== "All") && (
                                <button
                                    onClick={clearFilters}
                                    className="mt-6 text-[#1B8C86] font-semibold text-sm hover:underline"
                                >
                                    Clear search & filters
                                </button>
                            )}
                        </div>
                    ) : (
                        <BlogGrid blogs={filteredBlogs} />
                    )}
                </section>

                <div className="relative z-10">
                    <Newsletter />
                    <CTA />
                </div>

            </main>

            <Footer />
        </>
    );
};

export default Blog;