import { data_menu } from './data_menu.js'

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

export const navegar = document.createElement('div')

const navegacion = document.createElement('ul')
navegacion.id = 'navegacion'
navegacion.className = 'navegacion'


let principal = 'Conjuntos'

let crear_navegacion = (arr) => {
	let arrItem;
	for (let i = 0; i < arr.length; i++) {
		let a = document.createElement("a")	
		a.className = 'link_a';
		a.href = `${arr[i].toLowerCase()}.html`
		arrItem = arr[i]
		if(arrItem === 'index'){
			arrItem = principal
		}
		let li = document.createElement("li")
		li.className = 'link_li';
		li.appendChild(document.createTextNode(arrItem))
		navegacion.appendChild(a).appendChild(li)
	}
};
crear_navegacion(data_menu);

navegar.append(
	navegacion,
)