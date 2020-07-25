// break age no bloco mais próximo dele, que seria eles: for, while e switch, não executa em if

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if(x == 5) {
        break //causa um desvio de fluxo para fora
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue //interrope a situação atual e vai para próxima, usar em laços de repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')

//obs: não usar esse tipo de código, foi exemplo de não uso 