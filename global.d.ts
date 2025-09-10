import type { NextRequest } from "next/server";

declare global {
  interface Request {
    kindeAuth?: unknown;
  }

  interface NextRequest {
    kindeAuth?: unknown;
  }
}
