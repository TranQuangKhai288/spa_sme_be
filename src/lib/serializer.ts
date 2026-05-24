/**
 * Recursively converts BigInt values to numbers (or strings if too large
 * to be safely represented as a JS number) so JSON.stringify doesn't throw.
 *
 * This replaces the global `BigInt.prototype.toJSON` patch that was used in
 * the Express server — we apply the transform explicitly at each response
 * boundary instead.
 */
export function serialize<T>(value: T): unknown {
  if (typeof value === "bigint") {
    const n = Number(value);
    return Number.isSafeInteger(n) ? n : value.toString();
  }

  if (Array.isArray(value)) {
    return value.map(serialize);
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [
        k,
        serialize(v),
      ])
    );
  }

  return value;
}
