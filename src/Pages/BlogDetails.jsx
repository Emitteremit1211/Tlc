import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CalendarDays, Clock, ArrowLeft, User, Share2, Heart, Mail } from "lucide-react";
import { getBlog } from "../services/blogApi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BlogDetails = () => {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);

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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#EAF6F6] to-white">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#7FDCD2]/30 border-t-[#1B8C86] rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-[#4A5D6B] font-semibold">Loading article...</p>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EAF6F6] to-white">
                <h2 className="text-3xl font-bold text-[#0D2B3E] mb-4">Article Not Found</h2>
                <p className="text-[#4A5D6B] mb-8">The article you're looking for doesn't exist.</p>
                <Link to="/blog" className="text-[#1B8C86] hover:text-[#0D2B3E] font-semibold">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    const shareUrl = window.location.href;
    const shareTitle = blog.title;

    return (
        <>
            <Navbar />
            <main className="bg-white">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                    
                    .tlc-display { font-family: 'Fraunces', Georgia, serif; }
                    .tlc-body { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }

                    .prose-content {
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: #2d3748;
                    }

                    .prose-content h2 {
                        font-family: 'Fraunces', Georgia, serif;
                        font-size: 2rem;
                        font-weight: 600;
                        color: #0D2B3E;
                        margin-top: 2.5rem;
                        margin-bottom: 1rem;
                    }

                    .prose-content h3 {
                        font-family: 'Fraunces', Georgia, serif;
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: #1B8C86;
                        margin-top: 2rem;
                        margin-bottom: 0.75rem;
                    }

                    .prose-content p {
                        margin-bottom: 1.5rem;
                    }

                    .prose-content ul, .prose-content ol {
                        margin-left: 2rem;
                        margin-bottom: 1.5rem;
                    }

                    .prose-content li {
                        margin-bottom: 0.75rem;
                    }

                    .prose-content blockquote {
                        border-left: 4px solid #1B8C86;
                        padding-left: 1.5rem;
                        margin: 2rem 0;
                        font-style: italic;
                        color: #4A5D6B;
                    }

                    .prose-content a {
                        color: #1B8C86;
                        text-decoration: none;
                        font-weight: 500;
                    }

                    .prose-content a:hover {
                        text-decoration: underline;
                    }

                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .fade-in-up {
                        animation: fadeInUp 0.6s ease-out;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .fade-in-up {
                            animation: none;
                        }
                    }

                    .sticky-header {
                        position: sticky;
                        top: 0;
                        z-index: 40;
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(10px);
                        border-bottom: 1px solid rgba(27, 140, 134, 0.1);
                    }
                `}</style>

                {/* HERO SECTION */}
                <section className="relative h-[600px] overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
                        {/* Back Button */}
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white hover:text-white font-bold mb-6 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all fade-in-up"
                            style={{ animationDelay: "0ms" }}
                        >
                            <ArrowLeft size={20} />
                            <span>← Back to Blog</span>
                        </Link>

                        {/* Title & Meta */}
                        <div className="fade-in-up" style={{ animationDelay: "100ms" }}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-block bg-gradient-to-r from-[#1B8C86] to-[#7FDCD2] text-white px-6 py-2 rounded-full font-semibold text-sm">
                                    {blog.category}
                                </span>
                                {blog.featured && (
                                    <span className="inline-block bg-amber-500/80 text-white px-4 py-2 rounded-full font-semibold text-xs">
                                        ⭐ Featured
                                    </span>
                                )}
                            </div>

                            <h1 className="tlc-display text-5xl md:text-6xl font-bold text-white leading-tight mb-8 max-w-4xl">
                                {blog.title}
                            </h1>

                            {/* Metadata */}
                            <div className="flex flex-wrap gap-6 md:gap-8 text-white/90">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/70 uppercase tracking-wider">By</p>
                                        <p className="font-semibold">TLC Assist Living</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CalendarDays size={20} className="text-[#7FDCD2]" />
                                    <div>
                                        <p className="text-xs text-white/70 uppercase tracking-wider">Published</p>
                                        <p className="font-semibold">{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock size={20} className="text-[#7FDCD2]" />
                                    <div>
                                        <p className="text-xs text-white/70 uppercase tracking-wider">Read Time</p>
                                        <p className="font-semibold">{blog.readTime || 5} min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Navigation Header */}
                <div className="sticky-header">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-[#1B8C86] hover:text-[#0D2B3E] font-bold px-4 py-2 rounded-lg hover:bg-[#1B8C86]/5 transition-all"
                        >
                            <ArrowLeft size={20} />
                            <span className="hidden sm:inline">Back to Articles</span>
                            <span className="sm:hidden">Back</span>
                        </Link>
                        <h2 className="tlc-display text-lg font-semibold text-[#0D2B3E] line-clamp-1 flex-1 px-4">
                            {blog.title}
                        </h2>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <section className="bg-gradient-to-b from-white via-[#F8FBFA] to-white">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-16 md:py-24">
                        {/* Prominent Back Button */}
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-[#1B8C86] hover:text-[#0D2B3E] font-bold mb-12 px-4 py-2 rounded-lg hover:bg-[#1B8C86]/5 transition-all"
                        >
                            <ArrowLeft size={20} />
                            <span>← Back to All Articles</span>
                        </Link>
                        
                        {/* Article Header with Share */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 pb-8 border-b border-[#E0E8EC]">
                            <div className="flex-1">
                                {blog.excerpt && (
                                    <p className="text-xl text-[#4A5D6B] italic leading-relaxed font-medium">
                                        "{blog.excerpt}"
                                    </p>
                                )}
                            </div>

                            {/* Social Share */}
                            <div className="flex gap-3 flex-shrink-0">
                                <button
                                    onClick={() => setLiked(!liked)}
                                    className={`p-3 rounded-full transition-all ${
                                        liked
                                            ? 'bg-red-100 text-red-600'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                    title="Like this article"
                                >
                                    <Heart size={20} fill={liked ? "currentColor" : "none"} />
                                </button>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-all font-bold text-sm"
                                    title="Share on Facebook"
                                >
                                    f
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-sky-50 text-sky-600 rounded-full hover:bg-sky-100 transition-all font-bold text-sm"
                                    title="Share on Twitter"
                                >
                                    𝕏
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-all font-bold text-sm"
                                    title="Share on LinkedIn"
                                >
                                    in
                                </a>
                            </div>
                        </div>

                        {/* Main Article Content */}
                        <article className="prose-content mb-16">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />
                        </article>

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="border-t border-b border-[#E0E8EC] py-8 mb-12">
                                <p className="text-sm font-semibold text-[#1B8C86] uppercase tracking-wider mb-4">Tagged as</p>
                                <div className="flex flex-wrap gap-3">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-gradient-to-r from-[#1B8C86]/10 to-[#7FDCD2]/10 text-[#1B8C86] rounded-full text-sm font-medium hover:from-[#1B8C86]/20 hover:to-[#7FDCD2]/20 transition-all"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Bio Section */}
                        <div className="bg-gradient-to-r from-[#EAF6F6] to-[#F0FBFA] rounded-3xl p-8 md:p-10 mb-16">
                            <div className="flex gap-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1B8C86] to-[#7FDCD2] flex items-center justify-center text-white text-3xl flex-shrink-0">
                                    🏥
                                </div>
                                <div>
                                    <h3 className="tlc-display text-2xl font-bold text-[#0D2B3E] mb-2">About TLC Assist Living</h3>
                                    <p className="text-[#4A5D6B] leading-relaxed mb-4">
                                        We're dedicated to providing compassionate, professional home care services that empower seniors and their families. Our team of experienced caregivers is committed to enhancing quality of life through personalized, dignified care.
                                    </p>
                                    <Link to="/" className="inline-flex items-center gap-2 text-[#1B8C86] hover:text-[#0D2B3E] font-semibold transition-colors">
                                        Learn more about us →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter CTA */}
                        <div className="bg-gradient-to-r from-[#1B8C86] to-[#0D2B3E] rounded-3xl p-8 md:p-12 text-white text-center mb-16">
                            <h2 className="tlc-display text-3xl md:text-4xl font-bold mb-4">
                                Stay Updated with Care Tips
                            </h2>
                            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                                Get the latest insights on senior care, wellness tips, and caregiver stories delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 rounded-full text-[#0D2B3E] font-medium focus:outline-none focus:ring-2 focus:ring-[#7FDCD2]"
                                />
                                <button className="px-8 py-3 bg-[#FFC9A3] hover:bg-[#FFB88C] text-[#0D2B3E] font-bold rounded-full transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Related Articles CTA */}
                        <div className="text-center">
                            <p className="text-[#4A5D6B] mb-6">Want to explore more?</p>
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1B8C86] to-[#7FDCD2] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
                            >
                                View All Articles
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#7FDCD2]/10 to-transparent rounded-full -z-10 blur-3xl pointer-events-none" />
            </main>
            <Footer />
        </>
    );
};

export default BlogDetails;