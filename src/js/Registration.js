import Frame from "./Frame.js";

export default class Registration {
    static showRegistration() {
        Frame.body.appendChild(Frame.modalRegistration());
        Frame.createRegistration();

        const btnBack = document.querySelector("#modal-regis");
        btnBack.addEventListener("click", (e) => {

            console.dir(e.target)
            if(e.target.className === "btnClose") {
                Frame.body.children[Frame.body.children.length-1].remove();
                document.querySelector("#modal-login").style.display="flex";
            }
        })
    }
}


        