for(let i = 0; true ; i++){
    let f = Number(prompt("Quantos graus a pessoa esta  (0 para sair): "));

if(f < 37.5){
    console.log("A pessoa está com febre.");
    f++
}else if(f == 0){
    break;
}

}