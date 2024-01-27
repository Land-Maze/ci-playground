import { Hono } from "hono";

export const auth = new Hono();

auth.get("/token", (c) => {
    c.header("Content-Type", "application/json");
    if(c.req.header("auth") !== "Baerer 1234567890") {
    c.status(401);
    return c.body(JSON.stringify({
        error: "unauthorized",
        message: "You are not authorized to access this resource.",
    }));
    }
    return c.body(JSON.stringify({
        token: "oibifhjvbjh2jo",
    }), 200);
}).delete((c) => {
    c.header("Content-Type", "application/json");
    if(c.req.header("auth") !== "Baerer 1234567890") {
    c.status(401);
    return c.body(JSON.stringify({
        error: "unauthorized",
        message: "You are not authorized to access this resource.",
    }));
    }
    return c.body(JSON.stringify({
        message: "Token revoked.",
    }), 200);
});

export default auth;