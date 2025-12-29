import "@mui/material/styles";
import type { PipelineSolucoesThemeTokens } from "./types/pipelinesolucoes";

declare module "@mui/material/styles" {
  interface Theme {
    pipelinesolucoes?: PipelineSolucoesThemeTokens;
  }

  interface ThemeOptions {
    pipelinesolucoes?: PipelineSolucoesThemeTokens;
  }
}

// 👇 export “real” (value) — isso NÃO some no JS
export const __PIPELINE_SOLUCOES_MUI_THEME__ = true as const;
