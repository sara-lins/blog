import Login from "./js/Login.js";
import Registration from "./js/Registration.js";
import Frame from "./js/Frame.js";

//Registration.showRegistration()
document.querySelector("header").style.display="none";
document.querySelector("main").style.display="none";
Login.showLogin();
Frame.createPost();



/* const list = {
	"totalPages": 42,
	"nextPage": "page=2",
	"previousPage": null,
	"data": [
		{
			"id": 736,
			"content": "123",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 27,
				"username": "Kenzinho",
				"avatarUrl": "https://ae01.alicdn.com/kf/HTB1d1nOXNSYBuNjSsphq6zGvVXa7.jpg"
			}
		},
		{
			"id": 735,
			"content": "Oi minha linda",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 40,
				"username": "Adam N.",
				"avatarUrl": "https://media-exp2.licdn.com/dms/image/C4D03AQGOP6oBTEl1_w/profile-displayphoto-shrink_800_800/0/1654538995215?e=1663200000&v=beta&t=lly-yE28J_oYN0QXfnnHy4v1fKX5LZrlzlORb5XCAUE"
			}
		},
		{
			"id": 734,
			"content": "Teste",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 113,
				"username": "Frodo Baggins",
				"avatarUrl": "https://c.tenor.com/MqcKzznRfh0AAAAC/lotr-frodo.gif"
			}
		},
		{
			"id": 733,
			"content": "Olá 😸👋🏽",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 766,
				"username": "Emmy",
				"avatarUrl": "https://i.ibb.co/YZYcnfD/emmy.png"
			}
		},
		{
			"id": 732,
			"content": "Um teste de duas linhas de um post qualquer só pra ver se ta funcionando!",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 123,
				"username": "TchescoSt",
				"avatarUrl": "https://i2.wp.com/guildadosmestres.com.br/wp-content/uploads/2018/08/horda.jpg?resize=945%2C535"
			}
		},
		{
			"id": 731,
			"content": "1234",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 335,
				"username": "LuizinReiDelas",
				"avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6JOIep3YiTWHQ4LyD0OcQoR5XJV7u31tgg&usqp=CAU"
			}
		},
		{
			"id": 730,
			"content": "testetetete",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": "2022-07-10T00:00:00.000Z",
			"user": {
				"id": 40,
				"username": "Adam N.",
				"avatarUrl": "https://media-exp2.licdn.com/dms/image/C4D03AQGOP6oBTEl1_w/profile-displayphoto-shrink_800_800/0/1654538995215?e=1663200000&v=beta&t=lly-yE28J_oYN0QXfnnHy4v1fKX5LZrlzlORb5XCAUE"
			}
		},
		{
			"id": 729,
			"content": "q legal luva de predrero",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 954,
				"username": "vamo babidi",
				"avatarUrl": "https://pbs.twimg.com/media/FUv2nnHXEAIx4yP?format=jpg&name=large"
			}
		},
		{
			"id": 727,
			"content": "caracas galera nem dá pra acreditar, conseguir terminar boa parte do projeto já e tô aqu fascinado com o resultado até agora, to fazendo o teste com dois perfis um pelo celular e outro pelo computador e tá totalmente funcional! Que demais velho, mark zuckemberg que se cuide agora \n",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 581,
				"username": "Luva de Predrero",
				"avatarUrl": "https://c.tenor.com/IkETK1qP31IAAAAd/receba-luva-de-pedreiro.gif"
			}
		},
		{
			"id": 726,
			"content": "cASD",
			"createdAt": "2022-07-10T00:00:00.000Z",
			"updatedAt": null,
			"user": {
				"id": 696,
				"username": "amon3",
				"avatarUrl": "https://i.em.com.br/Okgez7qd28plPDF6_F5P4ZMLHmo=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/12/06/1328889/imagem-de-um-sapo-cururu_1_151268.jpg"
			}
		}
	]
}

for (const key in list) {
    if(key === "data") {
        console.log(list[key])
        list[key].forEach(post => {
            for (const key in post) {
                if(key === "content") {
                    console.log(post[key])
                }
                if(key === "user") {
                    console.log(post[key])
                    for (const data in post[key]) {
                        console.log(post[key][data])
                    }
                }
            }
        })
    }
} */