export const boton = document.createElement('div')
boton.className = 'boton_toggle'
boton.innerText = 'Nuestro menú de productos'

boton.addEventListener('click', () => {
  let toggle = document.getElementById('navegacion');
	if(!toggle) return false

	if(toggle.style.display === 'block' || toggle.style.width == "768" ){
		toggle.style.display = "none"
	} 
	else {
		toggle.style.display = "block"
	}
	return true;

	console.log('clickeee')
})

// menu hamburguesa
export function toggleButton() {
	let toggle = document.getElementById('navegar');
	if(!toggle) return false

	if(toggle.style.display === 'block' || toggle.style.width == "768" ){
		toggle.style.display = "none"
	} 
	else {
		toggle.style.display = "block"
	}
	return true;
}

