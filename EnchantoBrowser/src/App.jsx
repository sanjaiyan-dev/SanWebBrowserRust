import { Button, Slide } from "@mui/material";
import SanWrapper from "./components/Layout/Wrapper";
import { useRecoilState } from "recoil";
import {
  SAN_CURRENT_THEME_DARK,
  SAN_NAVBAR_OPEN_STATE,
} from "./store/sanAtoms";
import { startTransition } from "react";
import SanjaiyanNavbar from "./components/Layout/Navbar";
import SanAppBar from "./components/Layout/AppBar";
import LayoutSan from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  const [, setTheme] = useRecoilState(SAN_CURRENT_THEME_DARK);

  console.log("Sanjaiyan Coming Soon :)");
  return (
    <>
      <SanWrapper>
        <LayoutSan>
          <Routes>
            <Route path="/" element={<>Home</>} />
            <Route path="/music" element={<>Music</>} />
            <Route path="/system" element={<>Sysytem</>} />
          </Routes>
        </LayoutSan>
      </SanWrapper>
    </>
  );
}

export default App;
