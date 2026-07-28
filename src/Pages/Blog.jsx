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

import { getBlogs } from "../services/blogApi";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    useEffect(() => {

        fetchBlogs();

    }, []);

    const fetchBlogs = async () => {

        try {

            const data = await getBlogs();

            setBlogs(data);

            setFilteredBlogs(data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        let filtered = blogs;

        if (category !== "All") {

            filtered = filtered.filter(

                blog => blog.category === category

            );

        }

        if (search) {

            filtered = filtered.filter(blog =>

                blog.title.toLowerCase().includes(search.toLowerCase())

            );

        }

        setFilteredBlogs(filtered);

    }, [search, category, blogs]);

    const featured = blogs.find(blog => blog.featured);

    return (
        <>
<Navbar/>
        <main className="bg-[#F6F8FB] overflow-hidden">

            <BlogHero />

            <section className="relative max-w-7xl mx-auto px-6 -mt-16 z-20">

                <SearchBar

                    value={search}

                    onChange={setSearch}

                />

            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">

                {

                    featured &&

                    <FeaturedPost

                        post={featured}

                    />

                }

            </section>

            <section className="max-w-7xl mx-auto px-6">

                <Categories

                    blogs={blogs}

                    active={category}

                    setActive={setCategory}

                />

            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">

                {

                    loading ?

                        <SkeletonCard />

                        :

                        filteredBlogs.length === 0 ?

                            <EmptyState />

                            :

                            <BlogGrid

                                blogs={filteredBlogs}

                            />

                }

            </section>

            <Newsletter />

            <CTA />

        </main>
        <Footer/>
        </>

    );

};

export default Blog;