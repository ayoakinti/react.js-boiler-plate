import * as actionTypes from "../../actions/types";

type AuthState = {
  token: string | null;
  user: object | null;
  isLoggedIn: boolean;
};

type IPayload = {
  token: string;
  user: object;
};

const initialState: AuthState = {
  token: null,
  user: null,
  isLoggedIn: false,
};

type AuthAction = {
  type: string;
  payload: IPayload;
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
  }
  return state;
};

export default authReducer;
