import { combineReducers } from "redux";

import authReducer from "./modules/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
