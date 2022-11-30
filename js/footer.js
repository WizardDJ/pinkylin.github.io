import { redes_container } from './redes_container.js'
export const footer = document.getElementById('footer')
footer.id = 'footer_container'
footer.className = 'footer_container'
const hooo = document.createElement('div')
hooo.innerHTML = `
<div class="redes__titulo"> Productos mas recientes y promociones en nuestras redes sociales </div>
<div class="derechos"> © Todos los derechos reservados 2020 </div>
`
footer.append(
  redes_container, 
  hooo,
  )

