const API_URL =
  import.meta.env.VITE_API_URL || "https://tlc-6bt4.onrender.com";

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