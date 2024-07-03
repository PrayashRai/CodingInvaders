let countries = [ ]
let input = " "
do{
    input = prompt("Enter a country (0 : quit) ")
    if(input !=="0") {
        countries.push(input)
    }
}while(input !== "0") {
    countries.sort().toLo
    console.log(`Wow! There are coins from ${countries.length} countries in this collection:`)

    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i]);
}
}
