import { memo } from "react";
import {
  CottageRounded,
  DevicesRounded,
  MusicNoteRounded,
  SettingsApplicationsRounded,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/base";
import { useSetRecoilState } from "recoil";
import { SAN_NAVBAR_OPEN_STATE } from "../../store/sanAtoms";

const SanjaiyanNavbar = memo(() => {
  const setNavbarState = useSetRecoilState(SAN_NAVBAR_OPEN_STATE);
  return (
    <>
      <ClickAwayListener onClickAway={() => setNavbarState(false)}>
        <nav className="transition-colors fixed z-[100] top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg dark:bg-slate-900 ark:text-white text-black bg-slate-100 justify-evenly rounded-r-lg">
          <SanNavcBarIcons
            sanjaiyanIcon={<CottageRounded />}
            sanTooltipText="Home"
          />
          <SanNavcBarIcons
            sanjaiyanIcon={<MusicNoteRounded />}
            sanTooltipText="Music"
          />
          <SanNavcBarIcons
            sanjaiyanIcon={<DevicesRounded />}
            sanTooltipText="Devices"
          />
          <SanNavcBarIcons
            sanjaiyanIcon={<SettingsApplicationsRounded />}
            sanTooltipText="Settings"
          />
        </nav>
      </ClickAwayListener>
    </>
  );
});
export default SanjaiyanNavbar;

const SanNavcBarIcons = memo(({ sanjaiyanIcon, sanHref, sanTooltipText }) => {
  return (
    <div className="relative flex flex-col justify-evenly place-items-center text-center h-12 w-12 my-2 mx-auto shadow-xl hover:shadow-lg dark:shadow-cyan-300 bg:slate-300 text-teal-700 dark:text-teal-500  hover:bg-teal-800 hover:text-white dark:hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer p-3 group">
      {sanjaiyanIcon}

      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 dark:text-gray-900 dark:bg-slate-50 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {sanTooltipText}
      </span>
    </div>
  );
});
