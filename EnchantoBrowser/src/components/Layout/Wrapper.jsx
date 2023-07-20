import { ThemeProvider, createTheme } from "@mui/material";
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { useLayoutEffect } from "react";
import { SAN_CURRENT_THEME_MODE } from "../../store/sanComputed";

const SanWrapper = ({ children }) => {
  const current_theme_color_mode = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
    SAN_CURRENT_THEME_MODE
  );
  const mui_theme = createTheme({
    palette: {
      mode: current_theme_color_mode,
    },
  });

  useLayoutEffect(() => {
    document.body?.classList?.toggle("dark");
  }, [current_theme_color_mode]);
  return <ThemeProvider theme={mui_theme}>{children}</ThemeProvider>;
};

export default SanWrapper;
