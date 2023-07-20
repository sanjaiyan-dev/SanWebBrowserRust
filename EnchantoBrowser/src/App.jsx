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

function App() {
  const [, setTheme] = useRecoilState(SAN_CURRENT_THEME_DARK);
  const [sanjaiyanOpen] = useRecoilState(SAN_NAVBAR_OPEN_STATE);
  console.log("Sanjaiyan Coming Soon :)");
  return (
    <>
      <SanWrapper>
        <Slide direction="right" in={sanjaiyanOpen} mountOnEnter unmountOnExit>
          <div>
            <SanjaiyanNavbar />
          </div>
        </Slide>
        <Button
          onClick={() => {
            startTransition(() => {
              setTheme((prevTheme) => !prevTheme);
            });
          }}
          variant="contained"
        >
          Change Colors
        </Button>
        <SanAppBar />
      </SanWrapper>
    </>
  );
}

export default App;
