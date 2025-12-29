import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { mergeThemeParts } from "./utils/mergeThemeParts";

/**
 * Cria o theme final do app.
 * Você pode colocar tokens base aqui (shape, typography, palette, etc.).
 */
export function createPipelineSoluoeslTheme(...parts: ThemeOptions[]) {
  const base: ThemeOptions = {
    // exemplos (opcional):
    // shape: { borderRadius: 12 },
    // typography: { fontFamily: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial` },
  };

  const merged = mergeThemeParts(base, ...parts);
  return createTheme(merged);
}
