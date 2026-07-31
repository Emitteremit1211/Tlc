const API_URL =
  import.meta.env.VITE_API_URL || "https://tlc-6bt4.onrender.com";

// Get admin authentication token
export function getToken() {
  return localStorage.getItem("tlc_admin_token");
}

/* ============================
   GET ALL PUBLIC BLOGS
============================ */

export async function getBlogs() {
  const res = await fetch(`${API_URL}/api/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return await res.json();
}

/* ============================
   GET SINGLE BLOG
============================ */

export async function getBlog(slug) {
  const res = await fetch(`${API_URL}/api/blogs/${slug}`);

  if (!res.ok) {
    throw new Error("Blog not found");
  }

  return await res.json();
}

/* ============================
   DELETE BLOG
============================ */

export async function deleteBlog(id) {
  const token = getToken();

  if (!token) {
    throw new Error("Not authenticated. Please log in again.");
  }

  const res = await fetch(`${API_URL}/api/blogs/admin/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  let data = {};

  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    console.error("Delete API error:", {
      status: res.status,
      statusText: res.statusText,
      data,
    });

    throw new Error(
      data.error ||
        data.message ||
        `Failed to delete blog. Server returned ${res.status}.`
    );
  }

  return data;
}