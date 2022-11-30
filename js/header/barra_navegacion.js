export const navegacion_container = document.createElement('nav')
export const navegacion_movile = document.createElement('div')
export const list = document.createElement('')

navegacion_container.className = 'nav-bar'
navegacion_container.id = 'nav-bar'

navegacion_container.innerHTML = `
  <ul class="nav_ul" id="list"></ul>
`
navegacion_movile.className = 'nav-container icon-camera text'
navegacion_movile.id = 'nav-container'
navegacion_movile.value = 'Catálogo'
navegacion_movile.innerHTML = `
  <div value="Catálogo"  onclick="return toggleButton('nav-bar') "> Catálogos</div>
`

