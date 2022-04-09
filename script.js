function imc(){
  var in1 = document.getElementById("in1")
  var in2 = document.getElementById("in2")
  var paragrafo1 = document.getElementById("p1")
  var paragrafo2 = document.getElementById("p2")
  
  var peso = in1.value
  var altura = in2.value
  var imc = peso / (altura **2)
  
  paragrafo1.innerHTML = "IMC =" + imc
  
  if(imc < 18.5){
    paragrafo2.innerHTML = "Você está na classificação: Abaixo"
  }else if(imc < 25){
    paragrafo2.innerHTML = "Você está na classificação: Normal"
  }else if(imc < 30){
    paragrafo2.innerHTML = "Você está na classificação: Acima"
  }else{
    paragrafo2.innerHTML = "Você está na classificação: Ob"
  }
  
}
