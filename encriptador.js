/* Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"  
    
    se cambio el orden para declarar la 
    función y quedaría de la siguiente manera:
    
    e = enter
    o = ober
    i = imes
    a = ai
    u = ufat    

    el mensaje secreto es:
    felicidades por enfrentar este desafio 
    y haberlo concluido con exito!

*/

    function encriptar(){

        var texto = document.getElementById("inputText").value.toLowerCase();
        /*  la i es para que no importe si son mayúsculas o minúsculas
            la g es para toda la línea u oración
            la m es para afectar a varias líneas o un parrafo */
        var textCifra = texto.replace(/e/igm,"enter");
        var textCifra = textCifra.replace(/o/igm,"ober");
        var textCifra = textCifra.replace(/i/igm,"imes");
        var textCifra = textCifra.replace(/a/igm,"ai");
        var textCifra = textCifra.replace(/u/igm,"ufat");

        document.getElementById("monoLupa").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("ingresaTexto").innerHTML = textCifra;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";

    }

    function desencriptar(){

        var texto = document.getElementById("inputText").value.toLowerCase();
        var textCifra = texto.replace(/enter/igm,"e");
        var textCifra = textCifra.replace(/ober/igm,"o");
        var textCifra = textCifra.replace(/imes/igm,"i");
        var textCifra = textCifra.replace(/ai/igm,"a");
        var textCifra = textCifra.replace(/ufat/igm,"u");

        document.getElementById("monoLupa").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("ingresaTexto").innerHTML = textCifra;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";

    }

    function copy(){

        var contenido = document.querySelector("#ingresaTexto");
        contenido.select();
        document.execCommand("copy");
        alert("Texto copiado!");

    }