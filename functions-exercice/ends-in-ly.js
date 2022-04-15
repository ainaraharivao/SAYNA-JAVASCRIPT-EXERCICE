function  EndsInLy (Str){
    if (Str === "ly"){
    return true
}
else{
    return false
}
}
console.log(EndsInLy("pretty")) ; // false
console.log(EndsInLy("instant")) ; // false
console.log(EndsInLy("analytic")) ; // false
console.log(EndsInLy("timidly")) ; // vrai
console.log(EndsInLy("fly")) ; // true
console.log(EndsInLy("gallantly")) ; // true
