import "@mui/material/styles";
import type { PipelineSolucoesThemeTokens } from "./pipelinesolucoes";


declare module "@mui/material/styles" {
  interface Theme {
    pipesol?: PipelineSolucoesThemeTokens;
  }

  interface ThemeOptions {
    pipesol?: PipelineSolucoesThemeTokens;
  }
}
