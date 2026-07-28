const express = require("express");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");
const { upload } = require("../middleware/upload");

const {
    createBlog,
    getBlogs,
    getBlog,
    getAdminBlogs,
    getAdminBlogById,
    updateBlog,
    deleteBlog,
} = require("../controllers/blogController");

/* ===========================
   ADMIN ROUTES
=========================== */

router.get("/admin/all", requireAuth, getAdminBlogs);

router.get("/admin/:id", requireAuth, getAdminBlogById);

router.put(
    "/admin/:id",
    requireAuth,
    upload.single("coverImage"),
    updateBlog
);

router.delete(
    "/admin/:id",
    requireAuth,
    deleteBlog
);

router.post(
    "/",
    requireAuth,
    upload.single("coverImage"),
    createBlog
);

/* ===========================
   PUBLIC ROUTES
=========================== */

router.get("/", getBlogs);

router.get("/:slug", getBlog);

module.exports = router;