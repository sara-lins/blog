import Registration from "./Registration.js";
import Frame from "./Frame.js";
import Requisitions from "./AcessApi.js";

export default class Login {

    static token = "";

    static showLogin() {
        Frame.body.appendChild(Frame.modalLogin());
        this.loginUser();
        const btnRegistration = document.querySelector(".div-registration");
        btnRegistration.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector("#modal-login").style.display="none";
            Registration.showRegistration();
        })
    }

    static loginUser() {
        const form = document.querySelector(".formLogin");
        const btnLogout = document.querySelector(".logout");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const emailUser = document.querySelector(".inputEmail").value;
            const passwordUser = document.querySelector(".inputPassword").value;
    
            if(emailUser != "" && passwordUser != "") {
                const response = await Requisitions.loginApi({
                    email: emailUser,
                    password: passwordUser
                });

                if(response) {
                    this.token = response.token;
                    for (const key in response) {
                        if(key === "userId") {
                            window.localStorage.setItem("id-User", JSON.stringify(response[key]));
                        }
                        if(key === "token") {
                            window.localStorage.setItem("token-User", JSON.stringify(response[key]));
                        }
                    }
                    this.verifyPassword(emailUser, passwordUser);
                } else {
                   console.log(response) 
                }
    
            } else {
                console.log("insira seus dados")
            }
        })

            btnLogout.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector("header").style.display="none";
                document.querySelector("main").style.display="none";
                window.location.reload(true);
            })
    }

    static async verifyPassword(emailUser, passwordUser) {
        if(emailUser != "" && passwordUser != "") {
            //verificação:
            //se os inputs tem valor
            //se a senha possui letra maiuscula
            //se a senha possui numero
            //se a senha possui 11 digitos
            let letterOk = "";
            let numberOk = "";
            const letras = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
            let arrNumber = [];

            for(let count = 0; count <= 10; count++) {
                arrNumber.push(count)
                
            }

            passwordUser.split("").forEach(letraPass => {

                letras.forEach(letraAlfabeto => {
                    const lettersTrue = letraPass.includes(letraAlfabeto)

                    if(lettersTrue) {
                        letterOk = lettersTrue;
                    }
                });

                arrNumber.forEach(numberGlobal => {
                    const numbersTrue = letraPass.includes(numberGlobal)

                    if(numbersTrue) {
                        numberOk = numbersTrue;
                    }
                })
                
            })

            if(!letterOk) {
                console.log("não possui letra maiuscula")
            }

            if(!numberOk) {
                console.log("não possui numeros")
            }

            if(passwordUser.length >= 6){
                if(letterOk && numberOk) {
                    if(!Frame.visibily) {
                        document.getElementById("modal-login").style.display="none";
                        document.querySelector("header").style.display="flex";
                        document.querySelector("main").style.display="flex";
                        //depoisque o usuário loga, chama o método que recebe o input do textarea
                        const promise = await Requisitions.searchPost(1)
                        for (const key in promise) {
                            if(key === "data") {
                                promise[key].forEach(post => {
                                    Frame.showPosts(post);
                                })
                            }
                        }
                        Requisitions.arrayPost = promise;
                        Requisitions.searchUser();
                    }
                }
            } else {
                console.log("não possui 6 digitos");
            }
        
        } else {
            //mostrar mensagem de erro
        }
    }
}