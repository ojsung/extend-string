export as namespace extendStringLib
export function extendString(
  stringOrStringArray: string | string[],
  stringToExtend?: string | null,
  delimiter?: string,
  mode: "join" | "loop" | "buffer"
): string
