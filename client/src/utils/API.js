import axios from "axios";

export default {
  register: function(registerInfo) {
    return axios.post("/api/signup", registerInfo);
  },
  login: function(loginInfo) {
    return axios.post("/api/login", loginInfo);
  },
  getUserData: function(id){
    console.log(id)
    return axios.get("/api/login/" + id)
  },
  postPost: function(id){
    console.log(id)
    return axios.post("/api/post", id)
  },
  newsfeed: function(){
    console.log("front end api")
    return axios.get("/api/newsfeed")
  },
  deletePost: function(id) {
    return axios.delete("/api/post/" + id);
  },
};
