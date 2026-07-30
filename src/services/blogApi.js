const API_URL =
  import.meta.env.VITE_API_URL || "https://tlc-6bt4.onrender.com";

export function getToken() {
  return localStorage.getItem("tlc_admin_token");
}

export async function getBlogs() {
  const res = await fetch(`${API_URL}/api/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return await res.json();
}

export async function getBlog(slug) {
  const res = await fetch(`${API_URL}/api/blogs/${slug}`);

  if (!res.ok) {
    throw new Error("Blog not found");
  }

  return await res.json();
}

export async function deleteBlog(id) {
  const token = getToken();
  
  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(`${API_URL}/api/blogs/admin/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete blog");
  }

  return await res.json();
}