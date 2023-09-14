import Oct8 from "../Oct8-main/Oct8/Oct8.js";

class Banner{
    oct8 = new Oct8()
    CriarBanner(IdDobanner,Local,NomeComponente){
        this.oct8.CreateObjectFactory(()=>{ 
        let Object = this.oct8.CreateContainerElement(IdDobanner,Local,'BannerPrincipal','div')
        this.oct8.ModifyPropsDefault(Object,null,null,null,null)
        this.oct8.ModifyContentContainer(Object,
        "<div class='banner_tip'>"+
         " <h1> Todos os cursos de informação aqui </h1>"+
         "<h3>Cursos para todos</h3>"+
        "</div>"
        )
        }
        ,NomeComponente)
    }   
    
    RenderBanner(NomeComponente){
        this.oct8.AppendObjectFacyotyTo(NomeComponente,null)
    }
}

export default Banner