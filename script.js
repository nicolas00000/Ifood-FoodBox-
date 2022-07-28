 let contador = 0;
 let prato;
 let bebidas;
 let sobremesa;

 // indentificar se nao à mais de uma caixa verde



function ficarVerde(oprato, nome) {
       //OPRATO esta retornando qual o numero do prato ("DIV") clicada
       const selecionado = document.querySelector(".comidas .selecionado"); // seleciona quem tem a classe "Selecionado" de dentro de comidas
       //O NOME é o nome do prato que esta vindo do html
       prato = nome ;
     
       //quando clica em outro, tira a classe selecionado do q ja tinha, e....
      if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
      } else{
        contador = contador + 1
      
   }
       
   //ADCIONA NO NOVO CLICADO

       const seletor = "." + oprato;  //cria uma constante em que se passa o nome do prato selecionado "div" 
       const botao = document.querySelector(seletor); // pega a div em que tem a classe "seletor"
       botao.classList.add("selecionado"); //adiciona a classe selecionado na div clicada
       habilitarbotao()
 }

 
 
 
 function bebida(suco, nome) {
   const selecionado = document.querySelector(".bebidas .selecionado"); // tirar classe selecionada de quem tem ela
     bebidas = nome ;
   if (selecionado !== null) {
     selecionado.classList.remove("selecionado");
   } else {
     contador = contador + 1;
   }

   const seletor = "." + suco;
   const botao = document.querySelector(seletor); //acha a variavel selecionada

   botao.classList.add("selecionado"); //modifica a borda para verde
   habilitarbotao()
 }





 // sobremesas
 function doce(bolinho, nome) {
   const selecionado = document.querySelector(".bolos .selecionado"); // tirar classe selecionada de quem tem ela
   sobremesa = nome ;
   if (selecionado !== null) {
     selecionado.classList.remove("selecionado");
   } else {
     contador = contador + 1;
   }
   const seletor = "." + bolinho;
   const botao = document.querySelector(seletor); //acha a variavel selecionada

   botao.classList.add("selecionado"); //modifica a borda para verde
   habilitarbotao()
 }







 function habilitarbotao() {
  
   if (contador === 3) {
    const selecionado = document.querySelector(".finalizar")
  
     const agr = selecionado.classList.add("ativo");
    selecionado.innerHTML = "fechar pedido"            //encodeURIComponent(minhaString)
  }
 }

 function habilitar() {
   if (contador === 3) {
    const selecionado = document.querySelector(".finalizar")
    const sep = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato} e de bebida: ${bebidas} \n- Sobremesa: ${sobremesa} \nTotal: R$ 27.70`;
   
    const mensagem = encodeURI("https://wa.me/5512988030168?text=" + sep) ;
   
    const abrir = selecionado.setAttribute("href", mensagem)
      // window.open (abrir)  https://wa.me/1XXXXXXXXXX?text=
        location.href(abrir)
      // selecionado.setAttribute("href", mensagem)  
   }
 }
