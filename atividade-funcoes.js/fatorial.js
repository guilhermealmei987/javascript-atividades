function fatorial(b){
    let fat = b
    for(let i = b - 1; i >= 1; i--){ // "i" vai decrementando pra ir multiplicando o numero, e para quando chegar em 1
        fat = fat * i 
    }
    return fat
}