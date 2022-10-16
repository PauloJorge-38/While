const turista = prompt("E ai turista, Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")


while (continuar === "Sim") {
    let cidade = prompt("Qual a cidade visitada?")
    cidades += " - " +  cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista +
    "\n\nQuantidade de cidades: " + contagem + 
    "\nCidades visitadas:\n" + cidades
)

