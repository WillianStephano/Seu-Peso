//Selecionando os elementos do formulario
const formulario = document.querySelector(".formulario");
const btEnviar = formulario.querySelector(".bt_enviar");
const tabela = document.querySelector(".tabela");

btEnviar.addEventListener("click", function (event) {
   event.preventDefault();
   
   //extrai os dados do form
   var usuario = obtemUsuarioForm(formulario);
   
   //valida o formulario
   var validacao = validacaoForm(usuario.nome, usuario.data, usuario.peso);
   
   if (validacao == false) {
      window.alert("ERRO: Campos invalidos");
   } else if (validacaoPeso(usuario.peso) == true) {
      var user = montaTr(usuario);
   }
});




function obtemUsuarioForm(formulario) {
   var usuario = {
      nome: formulario.querySelector("#nome_campo").value,
      data: formulario.querySelector("#data_campo").value,
      peso: formulario.querySelector("#peso_campo").value,
   };
   return usuario;
}




function validacaoForm(nome, data, peso) {
   if (data == "" || nome == "" || peso == "") {
      validacao = false;
   } else {
      validacao = true;
   }
   
   return validacao;
}



function validacaoPeso(peso) {
   if (peso >= 350 || peso <= 0) {
      alert("Peso invalido");
      return false;
   }
   return true;
}



//Criar uma linha na tabela
function montaTr(usuario) {
   var usuarioTr = document.createElement("tr");
   
   //Cria as celulas e insere os valores
   var tagNome = montaTd(usuario.nome);
   var tagData = montaTd(usuario.data);
   var tagPeso = montaTd(usuario.peso);
   
   //Coloca os td como filho da tr
   usuarioTr.appendChild(tagNome);
   usuarioTr.appendChild(tagData);
   usuarioTr.appendChild(tagPeso);
   
   tabela.appendChild(usuarioTr);
}



function montaTd(valor) {
   var td = document.createElement("td");
   td.textContent = valor;
   
   return td;
}









/* Toggle menu */

//Selecao de itens
const btMenu = document.querySelector(".menu_mobile");
const toggleMenu = document.querySelector(".menu_nav");

//ao clicar no bt ele ira adicionar a classe que mostra o menu
btMenu.addEventListener("click", function () {
   toggleMenu.classList.toggle("menu_ativo");
});
