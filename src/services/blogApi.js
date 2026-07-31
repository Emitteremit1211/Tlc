export async function deleteBlog(id) {
    const token = getToken();

    console.log("🔥 DELETE BLOG CALLED");
    console.log("🔥 Blog ID:", id);
    console.log("🔥 API URL:", `${API_URL}/api/blogs/admin/${id}`);
    console.log("🔥 Token exists:", !!token);

    if (!token) {
        throw new Error("Not authenticated. Please log in again.");
    }
console.log("🔥 ACTUAL DELETE URL:", `${API_URL}/api/blogs/admin/${id}`);
    const res = await fetch(`${API_URL}/api/blogs/admin/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    console.log("🔥 DELETE STATUS:", res.status);

    const text = await res.text();

    console.log("🔥 DELETE RESPONSE:", text);

    let data = {};

    try {
        data = JSON.parse(text);
    } catch {
        data = {};
    }

    if (!res.ok) {
        throw new Error(
            data.error ||
            data.message ||
            `Failed to delete blog. Server returned ${res.status}`
        );
    }

    return data;
}