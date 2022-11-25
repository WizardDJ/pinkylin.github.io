// menu hamburguesa
function toggleButton() {
	let menu = document.getElementById('nav-bar');
	if(!menu) return false

	if(menu.style.display === 'block' || menu.style.width == "768" ){
		menu.style.display = "none"
	} 
	else {
		menu.style.display = "block"
	}
	return true;
}

// parametros del menu

let telefono = "3114689389";
let telefono2 = telefono + " 3166471805";

const arrMenu = ['Playa', 'Lenceria', 'index', 'Panty', 'Brasier', 'Pijama', 'Caballero', 'Pinkylin']

let principal = 'Conjuntos'

const telefonohtml = document.querySelector('.agreganos_banner span');
telefonohtml.textContent = telefono2

const whatsapp = document.querySelector('.redes__container a');
whatsapp.href = `https://api.whatsapp.com/send?phone=57${telefono}/`

let barra = () => {
	let arrItem;
	for (let i = 0; i < arrMenu.length; i++) {
		let a = document.createElement("a")	
		a.className = 'nav_a';
		a.href = `${arrMenu[i].toLowerCase()}.html`
		arrItem = arrMenu[i]
		if(arrItem === 'index'){
			arrItem = principal
		}
		let li = document.createElement("li")
		li.className = 'nav_li';
		li.appendChild(document.createTextNode(arrItem))
		document.getElementById("list").appendChild(a).appendChild(li)
	}
};
barra();
