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
        let Informacoes = ["Todos os cursos de informação aqui","Cursos de DataCloud"]
        let Titulo = ["Cursos para todos","Saiba mais do mundo de Cloud"]
        let Index = 0
        let Teste = setInterval(()=>{
            this.oct8.ModifyContentContainer(Object,
                "<div class='banner_tip'>"+
                 " <h1>"+Titulo[Index]+"</h1>"+
                 "<h3>"+Informacoes[Index]+"</h3>"+
                "</div>",true
                )
            Index+=1
            if(Index>=Informacoes.length)
            {
                Index = 0
            }
        },3600)
        }
        ,NomeComponente)
    }   
    
    RenderBanner(NomeComponente){
        this.oct8.AppendObjectFacyotyTo(NomeComponente,null)
    }
}

export default Banner