import { auth } from "../auth";

describe('auth', () => {
    test('GET /token', async () => {
        const resT = await auth.request("/token", {
            method: "GET",
            headers: {
                "auth": "Baerer 1234567890",
            },
        });
        expect(resT.status).toBe(200);
        expect(resT.headers.get("Content-Type")).toBe("application/json");
        const resF = await auth.request("/token", {
            method: "GET",
            headers: {
                "auth": "Baerer notvalidtoken",
            },
        });
        expect(resF.status).toBe(401);
        expect(resF.headers.get("Content-Type")).toBe("application/json");
    });
    test('DELETE /token', async () => {
        const resT = await auth.request("/token", {
            method: "DELETE",
            headers: {
                "auth": "Baerer 1234567890",
            },
        });
        expect(resT.status).toBe(200);
        expect(resT.headers.get("Content-Type")).toBe("application/json");
        const resF = await auth.request("/token", {
            method: "DELETE",
            headers: {
                "auth": "Baerer notvalidtoken",
            },
        });
        expect(resF.status).toBe(401);
        expect(resF.headers.get("Content-Type")).toBe("application/json");
    });
});