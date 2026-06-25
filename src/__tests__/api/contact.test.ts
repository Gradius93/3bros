import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import type { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/contact";

function mockReqRes(overrides: Partial<NextApiRequest> = {}) {
  const req = {
    method: "POST",
    body: {},
    ...overrides,
  } as NextApiRequest;

  const json = vi.fn();
  const setHeader = vi.fn();
  const status = vi.fn().mockReturnValue({ json });
  const res = { status, json, setHeader } as unknown as NextApiResponse<{
    message: string;
  }>;

  return { req, res, status, json, setHeader };
}

describe("contact API handler", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      RESEND_API_KEY: "test_key",
      CONTACT_FROM_EMAIL: "noreply@test.com",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it("rejects non-POST methods", async () => {
    const { req, res, status, setHeader } = mockReqRes({ method: "GET" });
    await handler(req, res);
    expect(setHeader).toHaveBeenCalledWith("Allow", ["POST"]);
    expect(status).toHaveBeenCalledWith(405);
  });

  it("silently accepts honeypot submissions", async () => {
    const { req, res, status } = mockReqRes({
      body: {
        name: "Bot",
        email: "bot@spam.com",
        subject: "Spam",
        message: "Buy now",
        website: "http://spam.com",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(200);
  });

  it("rejects missing required fields", async () => {
    const { req, res, status } = mockReqRes({
      body: { name: "Joe", email: "joe@test.com" },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(400);
  });

  it("rejects invalid email", async () => {
    const { req, res, status } = mockReqRes({
      body: {
        name: "Joe",
        email: "not-an-email",
        subject: "Hi",
        message: "Hello",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(400);
  });

  it("rejects overly long fields", async () => {
    const { req, res, status } = mockReqRes({
      body: {
        name: "A".repeat(101),
        email: "joe@test.com",
        subject: "Hi",
        message: "Hello",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(400);
  });

  it("returns 500 when env vars are missing", async () => {
    delete process.env.RESEND_API_KEY;
    const { req, res, status } = mockReqRes({
      body: {
        name: "Joe",
        email: "joe@test.com",
        subject: "Hi",
        message: "Hello",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(500);
  });

  it("sends email via Resend and returns 200", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ id: "123" }), { status: 200 })
    );
    const { req, res, status } = mockReqRes({
      body: {
        name: "Joe",
        email: "joe@test.com",
        subject: "Hi",
        message: "Hello",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(200);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("returns 502 when Resend fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response("error", { status: 500 })
    );
    const { req, res, status } = mockReqRes({
      body: {
        name: "Joe",
        email: "joe@test.com",
        subject: "Hi",
        message: "Hello",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(502);
  });

  it("returns 502 on network error", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("network"));
    const { req, res, status } = mockReqRes({
      body: {
        name: "Joe",
        email: "joe@test.com",
        subject: "Hi",
        message: "Hello",
      },
    });
    await handler(req, res);
    expect(status).toHaveBeenCalledWith(502);
  });
});
