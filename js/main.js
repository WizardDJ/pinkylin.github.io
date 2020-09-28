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

let telefono = "3192205259";

const arrMenu = ['index', 'Panty', 'Brasier', 'Lenceria', 'Pijama', 'Caballero', 'Promociones', 'Pinkylin']
let principal = 'Conjuntos'

const telefonohtml = document.querySelector('.agreganos_banner span');
telefonohtml.textContent = telefono

const whatsapp = document.querySelector('.redes__container a');
whatsapp.href = `https://api.whatsapp.com/send?phone=57${telefono}/`


// barra de navegacion
let barra = () => {
	let arrItem;
	for (let i = 0; i < arrMenu.length; i++) {
		console.log(arrMenu[i])
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
// toggleButton();
