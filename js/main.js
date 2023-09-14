import Oct8 from "./Oct8-main/Oct8/Oct8.js"
import Banner from "./components/banner.js"

let oct8 = new Oct8()
let Banner_site =  new Banner()
function PaginaPrincipal(){
    Banner_site.CriarBanner("Id_01Banner","Pagina","Banner_01")
    Banner_site.RenderBanner("Banner_01")
}



PaginaPrincipal()
