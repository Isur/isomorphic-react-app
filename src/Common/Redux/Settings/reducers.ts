import { CHANGE_THEME, IStateSettings, SettingsActionTypes } from "./types";

const initialState: IStateSettings = {
  app: "Boilerplate",
  theme: "dark",
};

export const settingsReducer = (state = initialState, action: SettingsActionTypes): IStateSettings => {
  switch(action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
