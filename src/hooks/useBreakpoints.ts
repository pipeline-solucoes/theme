"use client";

import { useTheme, useMediaQuery } from "@mui/material";

export interface BreakpointsState {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
}

export const useBreakpoints = (): BreakpointsState => {
  const theme = useTheme();

  return {
    isXs: useMediaQuery(theme.breakpoints.down("sm")),
    isSm: useMediaQuery(theme.breakpoints.between("sm", "md")),
    isMd: useMediaQuery(theme.breakpoints.between("md", "lg")),
    isLg: useMediaQuery(theme.breakpoints.between("lg", "xl")),
    isXl: useMediaQuery(theme.breakpoints.up("xl")),
  };
};
