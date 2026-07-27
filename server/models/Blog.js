const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
        },

        excerpt: {
            type: String,
            required: true,
            trim: true,
        },

        content: {
            type: String,
            required: true,
        },

        coverImage: {
            type: String,
            default: "",
        },

        category: {
            type: String,
            required: true,
        },

        tags: [
            {
                type: String,
            },
        ],

        author: {
            type: String,
            default: "TLC Assist Living",
        },

        featured: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
        },

        readTime: {
            type: String,
            default: "5 min read",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Blog", blogSchema);