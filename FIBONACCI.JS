function sequencia (n){
let fibSequencia = [0, 1];


    while (true) {
        //Realiza a soma dos dos numeros anteriores para estabelecer o numero atual 
        let nextNumber = fibSequencia[fibSequencia.length - 1] + fibSequencia[fibSequencia.length - 2];
        if(nextNumber > n) break;
        fibSequencia.push(nextNumber);
    }

    //Verifica se o numero pertence a sequencia 
    if(fibSequencia.includes(n)){
        return `${n} Pertence a sequencia Fibonacci.`;
    } else {
        return `${n} Não pertenca a sequencia Fibonacci. `
    }
}

let number = 4;
console.log(sequencia(number)); 
