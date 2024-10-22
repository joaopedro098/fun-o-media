let resposta=""

do{
let n1 = parseFloat(prompt("informe o primeiro numero:"))
let n2=parseFloat(prompt("informe o segundo numero"))
document.write(`${media(n1,n2)}`)




function media(n1,n2){
    media=(n1+n2)/2
    return media

}
resposta=prompt("informe se deseja a continar ")
}while(resposta==="sim")
function media(n1,n2){
    media=(n1+n2)/2
    return media

}