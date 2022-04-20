//Selecionando elementos do HTML
const formImc = document.querySelector('.form_imc')
const btCalcImc = formImc.querySelector('.bt_calcular_imc')
const btLimparImc =formImc.querySelector('.bt_limpar_imc')
var resulTxt = document.querySelector('.txt_resultado_imc')

btCalcImc.addEventListener('click',function (event) {
   event.preventDefault()
   
   //selecionando os valores do input
   var alturaValor = formImc.querySelector('#altura_campo').value
   var pesoValor = formImc.querySelector('#peso_campo').value

   
   if (validacaoImc(alturaValor, pesoValor) == true && validacaoPeso(pesoValor)) {
     
      var imc = pesoValor / (alturaValor * alturaValor) 
      
      resulTxt.textContent = imc.toFixed(2)
   } 
})



//ao clilar no botao limpar ira remover o conteudo do resultado
btLimparImc.addEventListener('click', function () {
   resulTxt.textContent = '0.00'
})


function validacaoImc(alturaValor, pesoValor) {
   if (pesoValor == "" || alturaValor == "") {
      alert('ERRO: Campos invalidos')
      return false
   }else
   return true
}






