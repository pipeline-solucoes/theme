import type { ThemeOptions } from "@mui/material/styles";
import deepmerge from "@mui/utils/deepmerge";

export function mergeThemeParts(...parts: ThemeOptions[]): ThemeOptions {
  return parts.reduce<ThemeOptions>((acc, part) => deepmerge(acc, part), {});
}
