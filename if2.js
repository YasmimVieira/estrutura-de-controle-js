function teste1(num) {
    if(num > 7) 
        console.log(num) //está associado ao bloco if
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) //cuidado com o ;, não usar com as estruturas de controles
        ; //setença de código vazia
    {
        console.log(num) // aí ele entra no bloco e executa o que está dentro, por isso sai os dois
    }
}

teste2(6)
teste2(8)