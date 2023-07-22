import { memo, startTransition, useCallback } from "react";
import {
  CottageRounded,
  DevicesRounded,
  LightModeRounded,
  MusicNoteRounded,
  NightsStayRounded,
  SettingsApplicationsRounded,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/base";
import {
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
  useSetRecoilState,
} from "recoil";
import {
  SAN_CURRENT_THEME_DARK,
  SAN_NAVBAR_OPEN_STATE,
} from "../../store/sanAtoms";
import SanStl from "./styles/Navabar.module.css";
import { Switch } from "@mui/material";
import { useHref, useNavigate } from "react-router-dom";

const SanjaiyanNavbar = memo(() => {
  const setNavbarState = useSetRecoilState(SAN_NAVBAR_OPEN_STATE);
  return (
    <>
      <ClickAwayListener onClickAway={() => setNavbarState(false)}>
        <nav className="transition-colors fixed z-[100] top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg dark:bg-slate-900 ark:text-white text-black bg-slate-100 justify-evenly rounded-r-lg">
          <SanNavcBarIcons
            sanjaiyanIcon={<CottageRounded />}
            sanTooltipText="Home"
            sanHref="/"
          />
          <SanNavcBarIcons
            sanjaiyanIcon={<MusicNoteRounded />}
            sanTooltipText="Music"
            sanHref="/music"
          />
          <SanNavcBarIcons
            sanjaiyanIcon={<DevicesRounded />}
            sanTooltipText="Devices"
          />
          <SanNavcBarIcons
            sanjaiyanIcon={<SettingsApplicationsRounded />}
            sanTooltipText="Settings"
          />
          <SanjaiyanThemeSwitch />
        </nav>
      </ClickAwayListener>
    </>
  );
});
export default SanjaiyanNavbar;

const SanNavcBarIcons = memo(({ sanjaiyanIcon, sanHref, sanTooltipText }) => {
  const sanRouterNavigate = useNavigate();
  const setNavbarState = useSetRecoilState(SAN_NAVBAR_OPEN_STATE);

  const sanNavigationFunc = () => {
    startTransition(() => {
      sanRouterNavigate(sanHref);
    });
    setNavbarState(false);
  };

  return (
    <div
      onClick={sanNavigationFunc}
      className="relative flex flex-col justify-evenly place-items-center text-center h-12 w-12 my-2 mx-auto shadow-xl hover:shadow-lg dark:shadow-cyan-300 bg-slate-200 dark:bg-slate-900 text-teal-700 dark:text-teal-500 hover:bg-teal-800 dark:hover:bg-slate-950 hover:text-teal-50 dark:hover:text-teal-100 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer p-3 group"
    >
      {sanjaiyanIcon}

      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 dark:text-gray-900 dark:bg-slate-50 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {sanTooltipText}
      </span>
    </div>
  );
});

const SanjaiyanThemeSwitch = memo(() => {
  const [sanTheme, setSanTheme] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(
    SAN_CURRENT_THEME_DARK
  );
  const sanThemeChane = useCallback(() => {
    startTransition(() => {
      setSanTheme((prevTheme) => !prevTheme);
    });
  }, []);
  return (
    <div className="flex justify-evenly place-items-center h-12 w-12 my-2 mx-auto shadow-md hover:shadow dark:shadow-cyan-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-teal-700 dark:text-teal-500 rounded-3xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer p-5 group">
      <Switch
        onChange={sanThemeChane}
        checked={sanTheme}
        icon={
          <LightModeRounded className="text-teal-700  animate-bounce animate-[spin_12s_infinite_linear]" />
        }
        checkedIcon={<NightsStayRounded className="animate-bounce" />}
        className={SanStl.enchanto_theme_theme_sanjaiyan_switch}
        defaultChecked
      />

      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 dark:text-gray-900 dark:bg-slate-50 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        Craft your ambiance
      </span>
    </div>
  );
});
