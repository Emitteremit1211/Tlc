const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getBlogs() {
    const res = await fetch(`${API_URL}/api/blogs`);

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    return res.json();
}

export async function getBlog(slug) {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`);

    if (!res.ok) {
        throw new Error("Blog not found");
    }

    return res.json();
}