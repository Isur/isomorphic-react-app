import React from "react";
import { connect } from "react-redux";
import Link from "../Components/Link";
import { AppThunkDispatch, IAppState } from "../../Common/Redux/store";
import { IStateSettings, themes } from "../../Common/Redux/Settings/types";
import { changeTheme } from "../../Common/Redux/Settings/actions";

interface IStateProps {
  settings: IStateSettings,
}
interface IDispatchProps {
  changeTheme: (theme: themes) => void,
}

interface IHomePage extends IStateProps, IDispatchProps {}

const HomePage = (props: IHomePage) => {
  const handleChangeTheme = () => {
    if(props.settings.theme === "light") props.changeTheme("dark");
    else props.changeTheme("light");
  };

  return (
    <div>
      <Link content="Go Example" to="/example" />
      <Link content="Go Error" to="/error" />
      <p> App: {props.settings.app} </p>
      <p> Theme: {props.settings.theme} </p>
      <button onClick={handleChangeTheme}> Change Theme </button>
    </div>
  );
};

export default connect<IStateProps, IDispatchProps, {}, IAppState>(
  state => ({
    settings: state.settings,
  }),
  (dispatch: AppThunkDispatch) => ({
    changeTheme: theme => dispatch(changeTheme(theme)),
  }),
)(HomePage);
