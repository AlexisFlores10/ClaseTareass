function tablaMultiplicar(numero){
    let resultados = [];

    for(let i= 1; i <= 10; i++) {
        resultados.push(numero * i)
    }

    return resultados;
}

const numeroBase = 5; 
console.table(tablaMultiplicar(numeroBase))