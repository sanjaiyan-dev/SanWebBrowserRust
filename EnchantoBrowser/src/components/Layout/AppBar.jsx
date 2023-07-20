import { MenuOpenRounded, MenuRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { memo, useCallback } from "react";
import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { SAN_NAVBAR_OPEN_STATE } from "../../store/sanAtoms";

const SanAppBar = memo(() => {
  const [navbarState, setNavbarState] =
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE(SAN_NAVBAR_OPEN_STATE);

  const setNavbarNewState = useCallback(() => {
    setNavbarState((prevSanOpenState) => !prevSanOpenState);
  }, []);
  return (
    <div className="fixed bottom-0 m-5 right-0">
      <Fab
        color="primary"
        variant="extended"
        aria-label="Menu"
        onClick={setNavbarNewState}
      >
        {navbarState && <MenuOpenRounded sx={{ mr: 1 }} />}
        {!navbarState && <MenuRounded sx={{ mr: 1 }} />}
        Discover More
      </Fab>
    </div>
  );
});

export default SanAppBar;
