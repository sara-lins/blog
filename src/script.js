import Login from "./js/Login.js";
import Registration from "./js/Registration.js";
import Frame from "./js/Frame.js";
import Requisitions from "./js/AcessApi.js";

//Registration.showRegistration()
const header = document.querySelector("header");
const main = document.querySelector("main");

header.style.display = "none";
main.style.display = "none";

Login.showLogin();
Frame.createPost();

Frame.body.appendChild(Frame.modalEdit());
document.querySelector(".modalEdit").style.display = "none";

Frame.body.appendChild(Frame.modalRemovePost());
document.querySelector(".modalRemove").style.display = "none";

	/* setTimeout(async () => {
		let cards = document.querySelector(".cards");
		let arrayUsers = await Requisitions.searchPost(1);
		cards.innerHTML = "";
		Frame.showPosts(arrayUsers.data);
	}, 10000); */

