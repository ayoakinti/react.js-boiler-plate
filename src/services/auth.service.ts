import api from "../api";

const API_URL = "https://solarschoolproject.herokuapp.com/v1";

interface LoginInput {
  email: string;
  password: string;
}

const login = (loginInput: LoginInput) => {
  return api.post(`${API_URL}/auth/admin`, loginInput).then((res) => {
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  });
  // .
};

const AuthService = {
  login,
};

export default AuthService;
