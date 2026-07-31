const Blog = require("../models/Blog");
const slugify = require("slugify");

/* ---------------- CREATE ---------------- */

const createBlog = async (req, res) => {
    try {
        const {
            title,
            excerpt,
            content,
            category,
            tags,
            featured,
            status,
            readTime,
        } = req.body;

        const blog = await Blog.create({
            title,

            slug: slugify(title, {
                lower: true,
                strict: true,
            }),

            excerpt,

            content,

            category,

            tags: tags
                ? tags.split(",").map((tag) => tag.trim())
                : [],

            featured,

            status,

            readTime,

            coverImage: req.file ? req.file.path : "",
        });

        res.status(201).json(blog);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

/* ---------------- GET ALL (PUBLIC — published only) ---------------- */

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({
            status: "published",
        }).sort({
            createdAt: -1,
        });

        res.json(blogs);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

/* ---------------- GET ONE (PUBLIC — published only, by slug) ---------------- */

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            slug: req.params.slug,
            status: "published",
        });

        if (!blog) {
            return res.status(404).json({
                error: "Blog not found",
            });
        }

        res.json(blog);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

/* ---------------- GET ALL (ADMIN — every status) ---------------- */

const getAdminBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* ---------------- GET ONE (ADMIN — every status, by ID) ---------------- */

const getAdminBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* ---------------- UPDATE ---------------- */

const updateBlog = async (req, res) => {
    try {
        const updateData = {
            ...req.body,
        };

        if (req.body.title) {
            updateData.slug = slugify(req.body.title, {
                lower: true,
                strict: true,
            });
        }

        if (req.body.tags) {
            updateData.tags = req.body.tags
                .split(",")
                .map((tag) => tag.trim());
        }

        if (req.file) {
            updateData.coverImage = req.file.path;
        }

        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!blog) {
            return res.status(404).json({
                error: "Blog not found",
            });
        }

        res.json(blog);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

/* ---------------- DELETE ---------------- */

const deleteBlog = async (req, res) => {
    try {
        console.log("DELETE REQUEST RECEIVED");
        console.log("Blog ID:", req.params.id);

        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            console.log("BLOG NOT FOUND:", req.params.id);

            return res.status(404).json({
                error: "Blog not found",
            });
        }

        console.log("BLOG FOUND:", blog.title);

        await Blog.findByIdAndDelete(req.params.id);

        // Verify that it was actually deleted
        const deletedBlog = await Blog.findById(req.params.id);

        if (deletedBlog) {
            console.log("❌ BLOG STILL EXISTS AFTER DELETE");

            return res.status(500).json({
                error: "Blog could not be deleted from database",
            });
        }

        console.log("✅ BLOG SUCCESSFULLY DELETED:", blog.title);

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            deletedId: req.params.id,
        });

    } catch (err) {
        console.error("DELETE BLOG ERROR:", err);

        res.status(500).json({
            error: err.message,
        });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    getAdminBlogs,
    getAdminBlogById,
    updateBlog,
    deleteBlog,
};