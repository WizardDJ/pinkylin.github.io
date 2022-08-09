const caballeros = [
	{
		id:0,
		image:"img/caballero/caballero1.jpg",
		title:"Boxer en algodon <br> Ref: 3011",
		description:"Marca Reymon",
		garment:"Tallas: XS S M L XL",
		price:"Precio: $ 16.000"
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