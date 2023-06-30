const palidromo = "ara"
const palidromoSplit = palidromo.split("")
const reverseSplit = palidromoSplit.reverse()
const reversePalidromo = reverseSplit.join("")
if (palidromo == reversePalidromo){
    console.log("É palidromo")
}
else{
    console.log("não é palidromo")
}