const variabileNome = prompt ("Lascia qui il tuo nome");
let variabileCognome = prompt ("Lascia qui il tuo cognome")
const variabileColore = prompt("Lascia qui il tuo colore preferito")

const corsoBoolean = 114;

console.log(
    `Nome registrato : ${variabileNome}`
)

console.log(
    `Cognome registrato : ${variabileCognome}`
)

console.log(
    `Colore preferito : ${variabileColore}`
)



let sommaDati = `${variabileNome} ${variabileCognome} ${variabileColore} ${corsoBoolean}`;
document.writeln(sommaDati);


document.getElementById("psw").innerHTML = (sommaDati);