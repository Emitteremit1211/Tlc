const express = require("express");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const { upload } = require("../middleware/upload");

const {

    createBlog,

    getBlogs,

    getBlog,

    updateBlog,

    deleteBlog,

} = require("../controllers/blogController");

router.get("/", getBlogs);

router.get("/:slug", getBlog);

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