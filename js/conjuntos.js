const conjuntos = [
	{	
		id:0,
		image:"./img/conjunto/conjunto10.jpg",
		title:"Brasier y Panty <br> Ref: 810 y 811",
		description:"Se puede pedir por separado",
		garment: "Brasier: $56.000 <br> Panty: $27.000",
		price: "Conjunto: 83.000"
	},
	{	
		id:1,
		image:"./img/conjunto/conjunto1.jpg",
		title:"Brasier y Panty <br> Ref: 806 y 807",
		description:"Se puede pedir por separado",
		garment: "Brasier: $56.000 <br> Panty: $25.000",
		price: "Conjunto: 81.000"
	},
	{	
		id:2,
		image:"./img/conjunto/conjunto2.jpg",
		title:"Brasier y Panty <br> Ref: 812 y 813",
		description:"Se puede pedir por separado",
		garment: "Brasier: $55.000 <br> Panty: $25.000",
		price: "Conjunto: 80.000"
	},
	{	
		id:3,
		image:"./img/conjunto/conjunto3.jpg",
		title:"Brasier y Panty <br> Ref: 808 y 809",
		description:"Se puede pedir por separado",
		garment: "Brasier: $67.000 <br> Panty: $25.000",
		price: "Conjunto: $92.000"
	},
	{	
		id:4,
		image:"./img/conjunto/conjunto4.jpg",
		title:"Conjunto Ref: 803",
		description:"Conjunto 2 piezas",
		garment: "Talla: 32 - 34 - 36",
		price: "Precio: $78.000 "
	},
	{	
		id:5,
		image:"./img/conjunto/conjunto5.jpg",
		title:"Conjunto Ref: 802",
		description:"Conjunto 2 piezas",
		garment: "Talla: 32 - 34 - 36 - 38",
		price: "Precio: $72.000 "
	},
	{	
		id:6,
		image:"./img/conjunto/conjunto6.jpg",
		title:"Conjunto Ref: 804",
		description:"Conjunto 2 piezas",
		garment: "Talla: 32 - 34 - 36 - 38",
		price: "Precio: $72.000 "
	},
	{	
		id:7,
		image:"./img/conjunto/conjunto7.jpg",
		title:"Conjunto Ref: 801",
		description:"Conjunto 2 piezas",
		garment: "Talla: 32 - 34 - 36",
		price: "Precio: $70.000 "
	},
	{	
		id:8,
		image:"./img/conjunto/conjunto8.jpg",
		title:"Conjunto Ref: 800",
		description:"Conjunto 2 piezas",
		garment: "Talla: 32 - 34 - 36 - 38",
		price: "Precio: $70.000 "
	},	
	{	
		id:9,
		image:"./img/conjunto/conjunto9.jpg",
		title:"Conjunto Ref: 805",
		description:"Conjunto 2 piezas",
		garment: "Talla: 32 - 34 - 36",
		price: "Precio: $71.000 "
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

function timex() {
	setTimeout(() => {
		send();
	}, 1)
}

function send() {
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
		timex();
		}
}
send();