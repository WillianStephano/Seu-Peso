//Selecionando os elementos do formulario
const formulario = document.querySelector(".formulario");
const btEnviar = formulario.querySelector(".bt_enviar");
const tabela = document.querySelector(".tabela_peso");

btEnviar.addEventListener("click", function (event) {
   event.preventDefault();
   
   //extrai os dados do form
   var usuario = obtemUsuarioForm(formulario);
   
   //valida o formulario
   var validacao = validacaoForm(usuario.nome, usuario.data, usuario.peso);
   
   if (validacao == false) {
      window.alert("ERRO: Campos invalidos");
   } else if (validacaoPeso(usuario.peso) == true) {
      montaTr(usuario);

      formulario.reset();
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



function montaTr(usuario) {
   var usuarioTr = document.createElement("tr");
   usuarioTr.classList.add('usuario_tabela_peso');

   
   //Cria as celulas e insere os valores
   var tagNome = montaTd(usuario.nome, 'info_tabela_peso');
   var tagData = montaTd(usuario.data, 'info_tabela_peso');
   var tagPeso = montaTd(usuario.peso, 'info_tabela_peso');
   
   //Coloca os td como filho da tr
   usuarioTr.appendChild(tagData);
   usuarioTr.appendChild(tagNome);
   usuarioTr.appendChild(tagPeso);
   
   tabela.appendChild(usuarioTr);
}



function montaTd(valor, classe) {
   var td = document.createElement("td");
   td.classList.add(classe)
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