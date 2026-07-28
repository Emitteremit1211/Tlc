const express = require("express");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const { upload } = require("../middleware/upload");

const {
    createBlog,
    getBlogs,
    getBlog,
    getAdminBlogs,        // ← ADD THIS
    getAdminBlogById,     // ← ADD THIS
    updateBlog,
    deleteBlog,
} = require("../controllers/blogController");

/* ====== ADMIN-ONLY ROUTES (must be BEFORE /:slug to avoid conflicts) ====== */

router.get("/admin/all", requireAuth, getAdminBlogs);       // ← ADD THIS
router.get("/admin/:id", requireAuth, getAdminBlogById);    // ← ADD THIS

/* ====== PUBLIC ROUTES ====== */

router.get("/", getBlogs);

router.get("/:slug", getBlog);

/* ====== PROTECTED CREATE/UPDATE/DELETE ROUTES ====== */

router.post(
    "/",
    requireAuth,
    upload.single("coverImage"),
    createBlog
);

router.put(
    "/:id",
    requireAuth,
    upload.single("coverImage"),
    updateBlog
);

router.delete(
    "/:id",
    requireAuth,
    deleteBlog
);

module.exports = router;