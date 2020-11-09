import axios from "axios";

export default {
  register: function(registerInfo) {
    return axios.post("/api/signup", registerInfo);
  },
  login: function(loginInfo) {
    return axios.post("/api/login", loginInfo);
  }
};
