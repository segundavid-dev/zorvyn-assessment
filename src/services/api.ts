import type { ApiResponse } from "../types/api";

export async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: T = await res.json();
    return { data, status: "success" };
  } catch (e) {
    return {
      data: [] as unknown as T,
      status: "error",
      error: (e as Error).message,
    };
  }
}
