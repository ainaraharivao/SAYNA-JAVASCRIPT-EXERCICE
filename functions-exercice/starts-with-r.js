function startsWithR (Str){
    if (Str[0] === "R" || Str[0] === "r"){
    return true
}
else{
    return false
}
}

console.log(startsWithR("roger that")) ; // vrai
console.log(startsWithR("Row, row, row your boat")) ; // true
console.log(startsWithR("slip")) ; // false
console.log(startsWithR("Taxicab")) ; // false

