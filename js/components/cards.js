import Oct8 from "../Oct8-main/Oct8/Oct8.js";

class Card{
    oct8 = new Oct8()
    CriarPortCard(Id,Local,NomeComponente){
        this.oct8.CreateObjectFactory(()=>{ 
        //Your component base//
        let Object = this.oct8.CreateContainerElement(Id,Local,'Cards_Porta','div')
        this.oct8.ModifyPropsDefault(Object,null,null,null,null)}
        ,NomeComponente)
    }

    CriarCards(Id,Local,NomeComponente,Titulo,Corpo,Imagem){
        this.oct8.CreateObjectFactory(()=>{ 
        //Your component base//
        let Object = this.oct8.CreateContainerElement(Id,Local,'card_site','div')
        this.oct8.ModifyPropsDefault(Object,null,null,null,null)
        this.oct8.ModifyContentContainer(Object,
        "<div class='Card'>"+
         "<img src='"+Imagem+"'>"+
         " <h1>"+Titulo+"</h1>"+
         "<h3>"+Corpo+"</h3>"+
        "</div>"
        )}
        ,NomeComponente)
    }

    RenderPortCard(NomeComponente){
        this.oct8.AppendObjectFacyotyTo(NomeComponente,null)
    }

    renderCards(CompName){
        this.oct8.AppendObjectFacyotyTo(CompName,null)
    }
}

export default Card