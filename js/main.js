//Selecionando os elementos do formulario
const formulario =  document.querySelector('.formulario')
const btEnviar =  formulario.querySelector('.bt_enviar')
const tabela = document.querySelector('.tabela')


//Segura o evento padrao do bt
btEnviar.addEventListener('click',function (event) {
   event.preventDefault()
   
   //Seleciona os valores dos campos do formulario
   const data = formulario.querySelector('#data_campo').value
   const nome = formulario.querySelector('#nome_campo').value
   const peso = formulario.querySelector('#peso_campo').value
   
   //Criar uma linha na tabela
   var usuarioTr = document.createElement('tr')
   
   //Cria as celulas e insere os valores
   var dataTd = document.createElement('td')
   var nomeTd = document.createElement('td')
   var pesoTd = document.createElement('td')
   
   dataTd.textContent = data
   nomeTd.textContent = nome
   pesoTd.textContent = peso
   
   //Coloca os td como filho da tr
   usuarioTr.appendChild(dataTd)
   usuarioTr.appendChild(nomeTd)
   usuarioTr.appendChild(pesoTd)
   
   tabela.appendChild(usuarioTr)
})   
