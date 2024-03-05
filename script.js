const campoaEncriptar = document.querySelector("#encryptedText");
const campoResultado = document.querySelector("#decryptText");

const matrizdeCifrado = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

campoaEncriptar.addEventListener("keyup", (event) => {
   const caracter = event.key;
   const regex = /[^\w\s]/; // Coincide con caracteres especiales

    if (regex.test(caracter)) {
    event.preventDefault();
    console.log(`Se elimino un caracter no admitido: ${caracter}`);
    campoaEncriptar.value = campoaEncriptar.value.slice(0,-1);
    }
});

 
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
    navigator.clipboard.writeText(textoCopiado);
    document.getElementById("encryptedText").value = textoCopiado;
    campoResultado.value='';
}