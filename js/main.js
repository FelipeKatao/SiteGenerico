import Oct8 from "./Oct8-main/Oct8/Oct8.js"
import Banner from "./components/banner.js"
import Card from "./components/cards.js"

let oct8 = new Oct8()
let Banner_site =  new Banner()
let Cards_site = new Card()
function PaginaPrincipal(){

    Banner_site.CriarBanner("Id_01Banner","Pagina","Banner_01")
    Banner_site.RenderBanner("Banner_01")
    
    Cards_site.CriarPortCard("PortCard","Pagina","PortCard")
    Cards_site.RenderPortCard("PortCard")

    Cards_site.CriarCards("Card_backEnd","PortCard","Card_back","Aprenda Back End","back end para iniciantes.","../img/backend_card.jpg")
    Cards_site.renderCards("Card_back")

    Cards_site.CriarCards("Card_FrontEnd","PortCard","Card_front","Aprenda Front End","Crie sus proprios Sites.","../img/front_end_2.jpg")
    Cards_site.renderCards("Card_front")

    Cards_site.CriarCards("Card_Devops","PortCard","devOps","Seja um devOps","DevOps do zero até o avançado.","../img/DevOps.jpg")
    Cards_site.renderCards("devOps")
}



PaginaPrincipal()
