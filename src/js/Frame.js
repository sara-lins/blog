/* import Registration from "./js/Registration.js";
import Login from "./js/Login.js"; */
import Requisitions from "./AcessApi.js";

export default class Frame {
    static body = document.querySelector("body");
    static main = document.querySelector("main");
    static visibily = false;
    static posts = [];

    static modalRegistration() {
        const modal = document.createElement("div");
        const boxMain = document.createElement("div");
        const boxSecondary = document.createElement("div");
        const buttonClose = document.createElement("button");
        const h1 = document.createElement("h1");
        const form = document.createElement("form");
        const inputName = document.createElement("input");
        const inputEmail = document.createElement("input");
        const inputImage = document.createElement("input");
        const inputPassword = document.createElement("input");
        const buttonRegistration = document.createElement("button");

        modal.className = "modal";
        modal.id = "modal-regis";
        form.className = "form-regis";
        buttonRegistration.className ="btn-registration";
        buttonClose.className = "btnClose";

        h1.innerText = "Cadastro";
        inputName.placeholder = "Nome do usuário";
        inputEmail.placeholder = "Email";
        inputImage.placeholder = "Foto do perfil";
        inputPassword.placeholder = "Senha";
        buttonRegistration.innerText = "Cadastrar";
        buttonClose.innerText = "X";
        
        inputName.type = "text";
        inputEmail.type = "email";
        inputImage.type = "text";
        inputPassword.type = "password";
        buttonRegistration.type = "submit";

        form.append(inputName, inputEmail, inputImage, inputPassword, buttonRegistration);
        boxSecondary.append(h1, form);
        boxMain.append(boxSecondary, buttonClose);
        modal.appendChild(boxMain);

        return modal;
    }

    static modalLogin() {
        const modal = document.createElement("div");
        const boxMain = document.createElement("div");
        const boxSecondary = document.createElement("div");
        const h1 = document.createElement("h1");
        const form = document.createElement("form");
        const inputEmail = document.createElement("input");
        const inputPassword = document.createElement("input");
        const buttonRegistration = document.createElement("button");
        const boxInto = document.createElement("div");
        const pRegistration = document.createElement("p");

        form.className = "formLogin";
        modal.className = "modal";
        modal.id = "modal-login"
        inputEmail.className = "inputEmail";
        inputPassword.className = "inputPassword";
        buttonRegistration.className = "buttonRegistration";
        boxInto.className = "div-registration";

        h1.innerText = "Login";
        inputEmail.placeholder = "Email";
        inputPassword.placeholder = "Senha";
        buttonRegistration.innerText = "Entrar";
        pRegistration.innerText = "Não possui cadastro? Clique aqui!";

        inputEmail.type = "email";
        inputPassword.type = "password";
        buttonRegistration.type = "submit";

        form.append(inputEmail, inputPassword, buttonRegistration);
        boxInto.appendChild(pRegistration);
        boxSecondary.append(h1, form, boxInto);
        boxMain.appendChild(boxSecondary)
        modal.appendChild(boxMain);

        return modal;
    }

    static createCardPost(objectUser) {

        let contentPost = "";
        let data = "";
        let img = "";
        let name = "";

        for (const key in objectUser) {
            data = objectUser.createdAt.split("-").join("/");
            contentPost = objectUser["content"];
            for (const data in objectUser.user) {
                img = objectUser.user["avatarUrl"];
                name = objectUser.user["username"];
            }
        }

        const day = data.slice(0,10).split("/").reverse().join("/");

        const box = document.createElement("div");
        const figure = document.createElement("figure");
        const imgUser = document.createElement("img");
        const divText = document.createElement("div");
        const nameUser = document.createElement("h3");
        const text = document.createElement("p");
        const options = document.createElement("div");
        const config = document.createElement("p");
        const edit = document.createElement("p");
        const remove = document.createElement("p");
        const date = document.createElement("p");

        divText.className = "divText";
        options.className = "options";
        config.className = "config";
        edit.className = "edit";
        remove.className = "remove";

        imgUser.src = img;
        imgUser.alt = "Imagem usuário";
        nameUser.innerText = name;
        text.innerText = contentPost;
        config.insertAdjacentHTML("afterbegin",`<i class="fa-solid fa-gear"></i>`);
        edit.innerText = "Editar";
        remove.innerText = "Excluir";
        date.innerText = day;

        figure.appendChild(imgUser);
        divText.append(nameUser, text);
        options.append(config, edit, remove, date);
        box.append(figure, divText, options);

        return box;
    }

    static async createPost() {

        const button = document.querySelector(".btn-post");
        const textPost = document.querySelector(".textarea");

        textPost.addEventListener("click", () => {
            document.querySelector(".btn-post").style.display="flex";
        })
        
        button.addEventListener("click", async (e) => {
            e.preventDefault();
            console.log(e.target)
            
            const text = textPost.value;
            console.log(text)

            document.querySelector(".btn-post").style.display="none";

            if(text) {
                const newPost = {
                    content: text
                }
                await Requisitions.createPostApi(newPost);

                textPost.value = "";

                this.main.addEventListener("click", (e) => {
                    console.log(e.target)
                    let editDisplay = document.querySelector(".edit");
                    let removDisplay = document.querySelector(".remove");

                    if(editDisplay.style.display === "none" && removDisplay.style.display === "none") {
                        editDisplay.style.display="none";
                        removDisplay.style.display="none";
                    }
                })
            }
        })
    }

    static async showPosts(objectUser) {
        this.main.children[1].appendChild(this.createCardPost(await objectUser));

    }

    static createRegistration() {
        const form = document.querySelector(".form-regis");
        let jsonUser = "";
        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            let username = form[0].value;
            let email = form[1].value;
            let avatarUrl = form[2].value;
            let password = form[3].value;

            if(username != "" && username.length <= 12) {
                if(email != "") {
                    //verificar se já existe esse email na api
                    if(avatarUrl != "") {
                        if(password != "") {
                            if(this.verifyPasswordRegistration(password) == true) {
                                jsonUser = {
                                    username,
                                    email,
                                    avatarUrl,
                                    password
                                };
                                const objectUser = await Requisitions.registrationApi(jsonUser)
                                console.log(objectUser)
                                
                                Frame.body.children[Frame.body.children.length-1].remove();
                                document.querySelector("#modal-login").style.display="flex";
                            }
                        }
                    }
                }
            }
        })
    }

    static verifyPasswordRegistration(passwordUser) {
        if(passwordUser) {
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
                return true;
            } else {
                console.log("não possui 6 digitos");
            }
        
        } else {
            //mostrar mensagem de erro
        }
    }

}