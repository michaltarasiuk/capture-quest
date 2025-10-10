export function assertNever(v: never): never {
  throw new Error(`Unexpected value: ${v}`);
}
