
function resultado(){
    var km = window.document.getElementById("velocidade")
    var max = 60
    var min = 10
    var km1 = Number(km.value)
    
    res.innerText="Sua velocidade é de "+ km1 + " kilometros por hora! dirija com segurança"
    if(km1 > max){
        res.innerHTML = "Você está a " + km1 + " kilometros por hora! " + (km1 - max) + "Km acima do permitido!! Você recebeu uma multa de " + (km1 - min)/100 + "% em cima da sua velocidade atual"
            
    }
    else if(km1 < min){
        res.innerHTML = "você está a " + km1 + " kilometros por hora! " + ((km1 - min)*(-1)) + "Km abaixo do permitido! Você recebeu uma multa de " + (km1 - min)/100*(-1)+ "% em cima da sua velocidade atual"
            
    }
    else if(km1 == min){
        res.innerHTML = "você está a " + km1 + " kilometros por hora! Você esta no limite minimo permitido!"
            
    }

    else if(km1 == max){
        res.innerHTML = "você está a " + km1 + " kilometros por hora! Você esta no limite maximo permitido!"
            
    }

}
