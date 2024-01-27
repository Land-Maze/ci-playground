import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth } from "./auth";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World!", 200, {
    "Content-Type": "text/plain",
  });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

app.route("/auth", auth);

serve({
  fetch: app.fetch,
  port,
});
