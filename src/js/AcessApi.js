import Login from "./Login.js";
import Frame from "./Frame.js";

export default class Requisitions {
    static urlBase = "https://blog-m2.herokuapp.com/";

    static async registrationApi(data) {
        const url = this.urlBase + "users/register";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        
        return response;
    }

    static async loginApi(data) {
        const url = this.urlBase + "users/login";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .catch((err) => console.log(err));
        
        return response;
    }

    static async searchUser() {

        const idUser = window.localStorage.getItem("id-User");
        const url = this.urlBase + "users/" + idUser;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${Login.token}`
            },
        })
        .then(res => res.json())
        .catch((err) => console.log(err));

        for (const key in response) {
            if(key == "avatarUrl") {
                document.querySelector(".img-user").src=`${response[key]}`;
            }
            if(key == "username") {
                document.querySelector(".name-user").textContent=`${response[key]}`;
            }
        }

        return response;
    }

    static async searchPost(numbPage) {
        const url = this.urlBase + `posts?page=${numbPage}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${Login.token}`
            },
        })
        .then(res => res.json())
        .catch((err) => console.log(err));

        return response;
    }

    static async createPostApi(text) {
        const url = this.urlBase + "posts";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${Login.token}`
            },
            body: JSON.stringify(text)
        })
        .then(res => res.json())
        .catch((err) => console.log(err));

        return response;
    }

    static async deletePost(idPost) {
        console.log(idPost)
        const url = this.urlBase + "posts/" + idPost;
        const token = JSON.parse(window.localStorage.getItem("token-User"));
        console.log(token)

        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .catch((err) => console.log(err));

        return response;
    }

}
