const lenceria = [
	{
		id:0,
		image:"./img/lenceria/lenceria1.jpg",
		title:"Lencería cachetero",
		description:"Ref: DNL01 Colores surtidos",
		garment:"Tallas: S M L",
		price:"Precio: $ 60.000"
	},
	{
		id:1,
		image:"./img/lenceria/lenceria2.jpg",
		title:"Lencería hilo ",
		description:"Ref: DNL02 Colores surtidos",
		garment:"Tallas: S M L",
		price:"Precio: $ 60.000"
	},
	{
		id:2,
		image:"./img/lenceria/lenceria3.jpg",
		title:"Lencería hilo",
		description:"Ref: DNL03 Colores surtidos",
		garment:"Tallas: S M L",
		price:"Precio: $ 60.000"
	},
	{
		id:3,
		image:"./img/lenceria/lenceria4.jpg",
		title:"Teddy hilo",
		description:"Ref: DNL04 Colores surtidos",
		garment:"Tallas: Única",
		price:"Precio: $ 70.000"
	},
	{
		id:4,
		image:"./img/lenceria/lenceria5.jpg",
		title:"Teddy tanga",
		description:"Ref: DNL05 Colores surtidos",
		garment:"Tallas: M L ",
		price:"Precio: $ 70.000"
	},
	{
		id:5,
		image:"./img/lenceria/lenceria6.jpg",
		title:"Braleth ",
		description:"Ref: DNL06 Colores surtidos",
		garment:"Tallas: S M L ",
		price:"Precio: $ 45.000"
	},
	{
		id:6,
		image:"./img/lenceria/lenceria7.jpg",
		title:"Lencería hilo",
		description:"Ref: DNL07 Colores surtidos",
		garment:"Tallas: S M L",
		price:"Precio: $ 59.000"
	},
	{
		id:7,
		image:"./img/lenceria/lenceria8.jpg",
		title:"Braleth",
		description:"Ref: DNL08 Colores surtidos",
		garment:"Tallas: S M L",
		price:"Precio: $ 45.000"
	},	
	{
		id:8,
		image:"./img/lenceria/lenceria9.jpg",
		title:"Lencería cachetero",
		description:"Ref: DNL09 Colores surtidos",
		garment:"Tallas: S M L ",
		price:"Precio: $ 60.000"
	},
	{
		id:9,
		image:"./img/lenceria/lenceria10.jpg",
		title:"Lencería cachetero",
		description:"Ref: DNL10 Colores surtidos",
		garment:"Tallas: S M L",
		price:"Precio: $ 70.000"
	},
	{
		id:10,
		image:"./img/lenceria/lenceria15.jpg",
		title:"Corsette en Blonda 322",
		description:"Colores: Blanco y Negro Rojo Candy ",
		garment:"Tallas: 32 - 34 - 36 - 38 ",
		price:"Precio: $ 130.000"
	},
	{
		id:11,
		image:"./img/lenceria/lenceria21.jpg",
		title:"Conjunto Sensual 831",
		description:"Colores: Negro Azul Merlot",
		garment:"Tallas: 32 - 34 - 36",
		price:"Precio: $ 80.000"
	},
	{
		id:12,
		image:"./img/lenceria/lenceria11.jpg",
		title:"Conjunto Sensual 832",
		description:"Colores: Rojo Candy y Negro",
		garment:"Tallas: 32 - 34 - 36 ",
		price:"Precio: $ 79.000"
	},
	{
		id:13,
		image:"./img/lenceria/lenceria14.jpg",
		title:"Conjunto Sensual 833 ",
		description:"Satín y encaje <br> Colores: Negro Rojo",
		garment:"Tallas: 32 - 34 - 36 ",
		price:"Precio: $ 75.000"
	},
	{
		id:14,
		image:"./img/lenceria/lenceria16.jpg",
		title:"Corsette en Lycra 834",
		description:"Incluye medias <br> Colores: Negro ",
		garment:"Tallas: 32 - 34 - 36 - 38 ",
		price:"Precio: $ 135.000"
	},
	{
		id:15,
		image:"./img/lenceria/lenceria13.jpg",
		title:"Teddy 835",
		description:"Lycra y encaje <br> Colores: Negro y Rojo Candy",
		garment:"Tallas: 32 - 34 - 36 ",
		price:"Precio: $ 69.000",
	},
	{
		id:16,
		image:"./img/lenceria/lenceria18.jpg",
		title:"Teddy 836",
		description:"En maya y encaje <br> Color: Negro",
		garment:"Tallas: 32 - 34 - 36",
		price:"Precio: $ 75.000"
	},
	{
		id:17,
		image:"./img/lenceria/lenceria19.jpg",
		title:"Baby doll 837 ",
		description:"en tull y encaje <br> Color: Negro",
		garment:"Tallas: 32 - 34 - 36",
		price:"Precio: $ 75.000",
	},
	{
		id:18,
		image:"./img/lenceria/lenceria12.jpg",
		title:"Conjunto Sensual 838 y 839",
		description:"Kimono + Pijama Short <br> Colores: Negro",
		garment:"Tallas: S - M - L ",
		price:"Precio: $ 159.000"
	}
];

let dataBase = lenceria;

let section = document.getElementById("section")

class Batman {
	constructor(title, image, description, garment, price) {
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
	})
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
		// console.log(robin)
		}
}
send();