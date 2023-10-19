var rendaAnual = prompt("Insira sua renda anual:");

var limiteIsencao = 50000;

if (rendaAnual > limiteIsencao) {

    console.log("Você deve pagar impostos.");

} else {

    console.log("Você está isento de impostos.");

}