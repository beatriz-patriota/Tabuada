function gerar (){
    var N = Number (document.getElementById("numero").value)
    var Res = window.document.getElementById("resul")
    Res.innerHTML = " "
    for ( var i = 1;  i <=10; i++){
        T = i * N
        Res.innerHTML += `${N} x ${i} = ${T} <br>`
        
    }
   
}
