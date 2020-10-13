const caballeros = [
	{
		id:0,
		image:"img/caballero/caballero1.jpg",
		title:"Boxer en algodon Ref: 3011",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:1,
		image:"img/caballero/caballero2.jpg",
		title:"Boxer en algodon Ref: 3011",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:2,
		image:"img/caballero/caballero3.jpg",
		title:"Boxer en algodon Ref: 3010",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:3,
		image:"img/caballero/caballero4.jpg",
		title:"Boxer en algodon Ref: 3016",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:4,
		image:"img/caballero/caballero5.jpg",
		title:"Boxer en algodon Ref: 301",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:5,
		image:"img/caballero/caballero6.jpg",
		title:"Boxer en algodon largo Ref: 3023",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 18.000"
	},
	{
		id:6,
		image:"img/caballero/caballero7.jpg",
		title:"Boxer en algodon Ref: 3025",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:7,
		image:"img/caballero/caballero8.jpg",
		title:"Boxer en microfibra Ref: 3028",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 20.000"
	},
	{
		id:8,
		image:"img/caballero/caballero9.jpg",
		title:"Boxer en algodon Ref: 3030",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
	},
	{
		id:9,
		image:"img/caballero/caballero10.jpg",
		title:"Boxer tejido plano Ref: 3051",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 23.000"
	},
	{
		id:10,
		image:"img/caballero/caballero11.jpg",
		title:"Tejido plano con Boxer interno Ref: 3052",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 27.000"
	},
	{
		id:11,
		image:"img/caballero/caballero12.jpg",
		title:"Tejido plano pantaloncillo interno Ref: 3054",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 23.000"
	},
];

let dataBase = caballeros;

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