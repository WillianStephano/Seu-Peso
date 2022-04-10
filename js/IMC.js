//Selecionando elementos do HTML
const formImc = document.querySelector('.form_imc')
const btCalcImc = formImc.querySelector('.bt_calcular_imc')
var resulTxt = document.querySelector('.txt_resultado_imc')

btCalcImc.addEventListener('click',function (event) {
   event.preventDefault()
   
   //selecionando os valores do input
   var alturaValor = formImc.querySelector('#altura_campo').value
   var pesoValor = formImc.querySelector('#peso_campo').value



   var imc = pesoValor / (alturaValor * alturaValor) 

  
   resulTxt.textContent = imc.toFixed(2)
   
   console.log(resulTxt);
})






