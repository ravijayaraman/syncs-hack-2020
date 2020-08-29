import axios from 'axios';
const TOKEN_KEY = 'login';
const API = 'http://localhost:5000/api/v1/auth/me';
// export const login = () => {
//   localStorage.setItem(TOKEN_KEY, 'TestLogin');
// };

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY));
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};

export async function me() {
  const obj = getToken();

  console.log(obj.token);
  const config = {
    headers: { Authorization: `Bearer ${obj.token}` },
  };

  const resp = await axios.get(API, config);

  const data = resp.data;

  if (data.success) {
    return data.data;
  }
}
