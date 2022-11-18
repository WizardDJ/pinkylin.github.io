/*
805, 938 
937, 939, 
*/

const talla = "Talla: 32, 34, 36, 38"
const conjuntos = [
	{	
		id:0,
		image:"./img/conjunto/931-932.jpg",
		title:"Brasier y Panty <br> Ref: 931 y 932",
		description: talla,
		garment: "Tipo bustier en lycra y encaje, copa <br> entera transpirable, aro y varilla lateral para mayor ajuste, espalda sin costuras. Abrochadura 6x3. <br> Colores: Blanco, Negro, Rojo Candy, Maverick.",
		price: "Brasier $68 mil y Panty $35 mil $103.000 pesos"
	},
	{	
		id:1,
		image:"./img/conjunto/933-934.jpg",
		title:"Brasier y Panty <br> Ref: 933 y 934",
		description: talla,
		garment: "Tipo bustier en lycra y encaje, copa <br> entera transpirable, aro y varilla lateral para mayor ajuste, espalda sin costuras. Abrochadura 6x3.",
		price: "Colores: Blanco, Negro, Rojo Candy, Maverick"
	},
	{	
		id:2,
		image:"./img/conjunto/935-936.jpg",
		title:"Brasier y Panty <br> Ref: 935 y 936",
		description: talla,
		garment: "Tipo bustier en lycra y encaje, copa <br> entera transpirable, aro y varilla lateral para mayor ajuste, espalda sin costuras. Abrochadura 6x3.",
		price: "Colores: Blanco, Negro, Rojo Candy, Maverick"
	},
	{	
		id:3,
		image:"./img/conjunto/940-941.jpg",
		title:"Brasier y Panty <br> Ref: 931 y 932",
		description: talla,
		garment: "Tipo bustier en lycra y encaje, copa <br> entera transpirable, aro y varilla lateral para mayor ajuste, espalda sin costuras. Abrochadura 6x3.",
		price: "Colores: Blanco, Negro, Rojo Candy, Maverick"
	},
	{	
		id:4,
		image:"./img/conjunto/942-943.jpg",
		title:"Brasier y Panty <br> Ref: 931 y 932",
		description: talla,
		garment: "Tipo bustier en lycra y encaje, copa <br> entera transpirable, aro y varilla lateral para mayor ajuste, espalda sin costuras. Abrochadura 6x3.",
		price: "Colores: Blanco, Negro, Rojo Candy, Maverick"
	},
	{	
		id:5,
		image:"./img/conjunto/937.jpg",
		title:"Brasier y Panty <br> Ref: 931 y 932",
		description: talla,
		garment: "Tipo bustier en lycra y encaje, copa <br> entera transpirable, aro y varilla lateral para mayor ajuste, espalda sin costuras. Abrochadura 6x3.",
		price: "Colores: Blanco, Negro, Rojo Candy, Maverick"
	},
];

let dataBase = conjuntos;

let section = document.getElementById("section")

class Batman {
	constructor(title, image, description,garment,price) {
		this.title = `${title}`;
		this.image = `${image}`;
		this.description = `${description}`;
		this.garment = `${garment}`;
		this.price = `${price}`;
	}
}

let counter = 0;

const send = () => {
	if (counter < dataBase.length) {
		// console.log(counter, dataBase.length)
		const robin = new Batman(`${dataBase[counter].title}`,
			`${dataBase[counter].image}`,
			`${dataBase[counter].description}`,
			`${dataBase[counter].garment}`,
			`${dataBase[counter].price}`,)

		section.innerHTML += `
			<article class="article_home">
				<div class="article_container">
					<a href= "${robin.image}" target="_blank">
						<img src="${robin.image}" alt="${robin.title}">
					</a>
					<div class="content">
						<h2 class="title">${robin.title}</h2>
						<h3 class="description">${robin.description}</h3>
						<h3 class="garment">${robin.garment}</h3>
						<h3 class="price">${robin.price}</h3>
					</div>
				</div>
			</article>
		`;
		counter++
		send();
		}
}
send();