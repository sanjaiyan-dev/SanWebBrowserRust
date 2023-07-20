import { selector } from "recoil";
import { SAN_CURRENT_THEME_DARK } from "./sanAtoms";

export const SAN_CURRENT_THEME_MODE = selector({
  key: "sanjaiyan_enchanto_current_theme_enchanto_sanjaiyan_compute",
  get: ({ get }) => {
    const is_current_dark_mode_atom = get(SAN_CURRENT_THEME_DARK);

    return is_current_dark_mode_atom === true ? "dark" : "light";
  },
});
