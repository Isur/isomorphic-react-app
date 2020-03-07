import { Dispatch } from "redux";
import { CHANGE_THEME, SettingsActionTypes, themes } from "./types";

export const changeTheme = (theme: themes) => async (dispatch: Dispatch<SettingsActionTypes>) => {
  dispatch({
    type: CHANGE_THEME,
    payload: theme,
  });
};
