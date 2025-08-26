function maiorN(c){
    let mn = 0
    for(let i of c){ //percorrer a lista
        if (i > mn){
            mn = i // guardar o maior numero
        }
    }
    return mn
}