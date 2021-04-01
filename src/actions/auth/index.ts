import * as actionTypes from "../types";
import AuthService from "../../services/auth.service";

interface LoginInput {
  email: string;
  password: string;
}

type AuthAction = {
  type: string;
  payload: IData;
};

type IData = {
  user: object;
  token: string;
};

type DispatchType = (args: AuthAction) => AuthAction;

export const login = (loginInput: LoginInput) => async (
  dispatch: DispatchType
) => {
  const data = await AuthService.login(loginInput);
  const action: AuthAction = {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      user: data.user,
      token: data.token,
    },
  };
  dispatch(action);
  return data;
};
