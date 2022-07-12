import Login from "./js/Login.js";
import Registration from "./js/Registration.js";
import Frame from "./js/Frame.js";

//Registration.showRegistration()
document.querySelector("header").style.display="none";
document.querySelector("main").style.display="none";
Login.showLogin();
Frame.createPost();
