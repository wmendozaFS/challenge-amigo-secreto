// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let cantidadAmigosenLista = 0;
//let indiceLista = 0;
let listaAmigos = [];
function muestraMsgEtiqueta(elemento,texto,colorTexto){
   let elementoHTML =document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   //function muestraMsgEtiqueta(idElemento, texto,colorTexto) {
   //let elementoHTML = document.getElementById(idElemento);
   elementoHTML.style.color = colorTexto;
   console.log(elemento);
   return;
}

muestraMsgEtiqueta("h1","Juego del Amigo Secreto ");
muestraMsgEtiqueta("h2","Introduce el nombre de tus amigos");

function mayusc(texInp) {
   texInp.value = texInp.value.toUpperCase();
}

function limpiarInput() {
   document.querySelector("#amigo").value = '';
}

function addItemLista(){
      var nomAmigo;
      var li = document.createElement("li");
      var p = document.createElement("p");
      indiceLista = listaAmigos.length-1;
      nomAmigo = listaAmigos[indiceLista];
      console.log(nomAmigo);
      p.appendChild(document.createTextNode(nomAmigo));
      document.querySelector("#listaAmigos").appendChild(li).appendChild(p);
      //for (i = 0; i < listaAmigos.length; i++) {          
      //}
  }   
function agregaAlistaAmigos() {
   let nombreAmigo = document.getElementById('amigo').value;
   nombreAmigo=nombreAmigo.toUpperCase();
   if (nombreAmigo==="") {
      muestraMsgEtiqueta("h2","Por favor introduce un nombre","red");
   }else{
      if (listaAmigos.includes(nombreAmigo)) {
         muestraMsgEtiqueta("h2","Nombre repetido ingrese el nombre mas un identificador","red");
      } else {
         listaAmigos.push(nombreAmigo);
         addItemLista();
      }
   }
   limpiarInput();
   console.log(listaAmigos.length);
   return;
}


function sorteaAmigoSecreto() {
   cantidadAmigosenLista = listaAmigos.length
   indiceLista = Math.floor(Math.random() * cantidadAmigosenLista) +1;
   amigoSecreto = listaAmigos[indiceLista];
   document.querySelector("#resultado").textContent=amigoSecreto;
   document.querySelector("#jugar").setAttribute("disabled","true");
   document.querySelector("#jugar").setAttribute("style","background-color: var(--color-disabled)");
   document.querySelector("#añadir").setAttribute("disabled","true");
   document.querySelector("#añadir").setAttribute("style","background-color: var(--color-disabled)");
   console.log(listaAmigos.length);
   console.log(indiceLista);
   return amigoSecreto
}

function reiniciarJuego() {
   //limpiar caja

   document.querySelector("#listaAmigos").textContent="";
   document.querySelector("#resultado").textContent="";
   document.querySelector("#jugar").setAttribute("enabled","true");
   document.querySelector("#jugar").setAttribute("style","background-color:var(--color-button)");
   document.querySelector("#añadir").setAttribute("style","background-color: var(--color-tertiary)");
   document.querySelector("#añadir").setAttribute("enabled","true");
   document.querySelector("#reiniciar").setAttribute("disabled","true");
   document.querySelector("#reiniciar").setAttribute("style","background-color:var(--color-disabled)");
   listaAmigos = [];
   console.log(listaAmigos.length);
}