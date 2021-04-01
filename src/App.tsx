import "./assets/scss/style.scss"
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";

import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword";
import Register from "./views/auth/Register";
import Container from "./container/Container";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/forgotpassword'>
          <ForgotPassword />
        </Route>
        <Route path='/'>
          <Container />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
