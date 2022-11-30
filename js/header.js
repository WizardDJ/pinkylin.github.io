import { logo_container } from './header/logo.js'
import { icono_up } from './header/icono_up.js'
import { add_phone } from './header/add_phone.js'
import { navegar } from './header/navegacion.js'

export const cabecera = document.createElement('header');
cabecera.className = 'header_container'

cabecera.append(
  add_phone,
  logo_container,
  icono_up,
  navegar,
  )

export const header = document.getElementById('header')
header.append(
  cabecera
  )