import { getStore } from "@netlify/blobs";

// Storage API for the MOVE GAME app, backed by Netlify Blobs.
// Mirrors the shape of Claude's window.storage (get/set/delete/list)
// so the frontend code barely had to change.

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async (req) => {
  const store = getStore("movegame");
  const url = new URL(req.url);

  try {
    if (req.method === "GET") {
      // List mode: /api/storage?list=1&prefix=xxx
      if (url.searchParams.get("list")) {
        const prefix = url.searchParams.get("prefix") || "";
        const { blobs } = await store.list({ prefix });
        return json({ keys: blobs.map((b) => b.key) });
      }
      // Get mode: /api/storage?key=xxx
      const key = url.searchParams.get("key");
      if (!key) return json({ error: "missing key" }, 400);
      const value = await store.get(key);
      return json({ value: value === null ? null : value });
    }

    if (req.method === "POST") {
      const body = await req.json();
      const { key, value } = body || {};
      if (!key) return json({ error: "missing key" }, 400);
      await store.set(key, value);
      return json({ ok: true });
    }

    if (req.method === "DELETE") {
      const key = url.searchParams.get("key");
      if (!key) return json({ error: "missing key" }, 400);
      await store.delete(key);
      return json({ ok: true });
    }

    return json({ error: "method not allowed" }, 405);
  } catch (err) {
    return json({ error: String(err) }, 500);
  }
};

export const config = {
  path: "/api/storage",
};
