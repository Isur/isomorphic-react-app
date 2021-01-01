import { Dispatch } from "redux";
import { Cookies } from "react-cookie";
import { AuthService } from "../../../Client/Services";
import { AuthActionTypes, LOGOUT, LOGIN_FAILED, LOGIN_SUCCESS } from "./types";

export const login = (email: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    const { userId, access_token } = await AuthService.login({ email, password });
    new Cookies().set("access_token", access_token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        userid: userId,
      },
    });
  } catch(e) {
    dispatch({
      type: LOGIN_FAILED,
      payload: {
        error: "failed",
      },
    });
  }
};

export const logout = () => async (dispatch: Dispatch<AuthActionTypes>) => {
  await AuthService.logout();
  new Cookies().remove("access_token");
  dispatch({
    type: LOGOUT,
  });
};

export const initFetch = () => async (dispatch: Dispatch<AuthActionTypes>) => {
  const access_token = new Cookies().get("access_token");
  if(!access_token) return;
  try {
    const userid = await AuthService.initFetch();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        userid,
      },
    });
  } catch(e) {
    dispatch({
      type: LOGIN_FAILED,
      payload: {
        error: "failed",
      },
    });
  }
};
