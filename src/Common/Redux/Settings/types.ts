export interface IStateSettings {
  app: string,
  theme: themes,
}
export type themes = "dark" | "light";
export const CHANGE_THEME = `[SETTINGS] CHANGE_THEME`;

interface IActionChangeTheme {
  type: typeof CHANGE_THEME,
  payload: themes,
}

export type SettingsActionTypes = IActionChangeTheme;
