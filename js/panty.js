const panty = [
	{
		id:0,
		image:"./img/panty/panty7.jpg",
		title:"Cachetero encaje",
		description:"Ref: DNA01 Colores surtidos",
		garment: "Tallas: S M L",
		price: "Precio: $25.000"
	},
	{
		id:1,
		image:"./img/panty/panty8.jpg",
		title:"Tanga hilo",
		description:"Ref: DNA02 Colores surtidos",
		garment: "Tallas: S M L",
		price: "Precio: $21.000"
	},
	{
		id:2,
		image:"./img/panty/panty9.jpg",
		title:"Cachetero encaje 6",
		description:"Ref: DNA03 Colores surtidos",
		garment: "Tallas: S M L",
		price: "Precio: $25.000"
	},
	{
		id:3,
		image:"./img/panty/panty10.jpg",
		title:"Panty tanga", 
		description:"Ref: DNA04 Colores surtidos",
		garment:"Tallas: S M L",
		price: "Precio: $25.000"
	},
	{
		id:4,
		image:"./img/panty/panty11.jpg",
		title:"Panty hilo", 
		description:"Ref: DNA06 Colores surtidos",
		garment: "Tallas: S M L",
		price: "Precio: $25.000"
	},
	{
		id:5,
		image:"./img/panty/panty12.jpg",
		title:"Cachetero encaje", 
		description:"Ref: DNA05 Colores surtidos",
		garment: "Tallas: S M L",
		price: "Precio: $25.000"
	},
	{
		id:6,
		image:"./img/panty/panty1.jpg",
		title:"Panty hilo 721, 830 y 828",
		description:"Ref: 721 Precio: $ 20.000 <br> Ref: 830 Precio: $ 23.000 <br> Ref: 828 Precio: $ 23.000",
		garment:"",
		price:"Surtido disponible"
	},
	{
		id:7,
		image:"./img/panty/panty2.jpg",
		title:"Panty 827, 392 y 843",
		description:"Ref: 827 Precio: $ 23.000 <br> Ref: 392 Precio: $ 19.000 <br> Ref: 843 Precio: $ 30.000",
		garment:"",
		price:"Surtido disponible"
	},	
	{
		id:8,
		image:"./img/panty/panty3.jpg",
		title:"Panty 716, 391 y 829",
		description:"Ref: 716 Precio: $ 22.000 <br> Ref: 391 Precio: $ 22.000 <br> Ref: 829 Precio: $ 26.000",
		garment:"",
		price:"Surtido disponible"
	},
	{
		id:9,
		image:"./img/panty/panty4.jpg",
		title:"Panty 855, 826 y 829",
		description:"Ref: 855 Precio: $ 25.000 <br> Ref: 826 Precio: $ 25.000 <br> Ref: 829 Precio: $ 26.000",
		garment:"",
		price:"Surtido disponible"
	},
	{
		id:10,
		image:"./img/panty/panty5.jpg",
		title:"Panty 717 y 718", 
		description:"Ref: 717 Precio: $ 25.000 <br> Ref: 718 Precio: $ 25.000",
		garment:"",
		price:"Surtido disponible"
	},
	{
		id:11,
		image:"./img/panty/panty6.jpg",
		title:"Panty 825, 396 y 426",
		description:"Ref: 825 Precio: $ 27.000 <br> Ref: 396 Precio: $ 23.000 <br> Ref: 426 Precio: $ 23.000",
		garment:"",
		price:"Surtido disponible"
	}
	
];

let dataBase = panty;

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
		}
}
send();