const campoaEncriptar = document.querySelector("#encryptedText");
const campoResultado = document.querySelector("#decryptText");

const matrizdeCifrado = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

function botondeCifrado( ) {
    const textoCifrado = funciondeCifrado(campoaEncriptar.value);
    campoResultado.value = textoCifrado;
}

function funciondeCifrado(textoaCifrar){
    for(let i = 0; i < matrizdeCifrado.length; i++) {
        if(textoaCifrar.includes(matrizdeCifrado[i][0])){
            textoaCifrar = textoaCifrar.replaceAll(
                matrizdeCifrado[i][0],
                matrizdeCifrado[i][1]
            )            
        }
    }
    return textoaCifrar;
}

function botondeDescifrado( ) {
    const textoCifrado = funciondeDescifrado(campoaEncriptar.value);
    campoResultado.value = textoCifrado;
}

function funciondeDescifrado(textoaCifrar){
    for(let i = 0; i < matrizdeCifrado.length; i++) {
        if(textoaCifrar.includes(matrizdeCifrado[i][1])){
            textoaCifrar = textoaCifrar.replaceAll(
                matrizdeCifrado[i][1],
                matrizdeCifrado[i][0]
            )            
        }
    }
    return textoaCifrar;
}

function botonReset(){
    campoaEncriptar.value='';
    campoResultado.value='';
}

function botonCopiar(){
    const textoCopiado = document.getElementById("decryptText").value;
    document.getElementById("encryptedText").value = textoCopiado;
    campoResultado.value='';
}