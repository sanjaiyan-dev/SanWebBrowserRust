import { Slide } from "@mui/material";
import { memo } from "react";
import SanjaiyanNavbar from "./Navbar";
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { SAN_NAVBAR_OPEN_STATE } from "../../store/sanAtoms";
import SanAppBar from "./AppBar";

const LayoutSan = memo(({ children }) => {
  const sanjaiyanOpen = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
    SAN_NAVBAR_OPEN_STATE
  );

  return (
    <>
      <Slide direction="right" in={sanjaiyanOpen} mountOnEnter unmountOnExit>
        <div>
          <SanjaiyanNavbar />
        </div>
      </Slide>
      {children}
      <SanAppBar />
    </>
  );
});

export default LayoutSan;
