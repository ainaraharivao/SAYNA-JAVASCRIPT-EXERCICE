function stringSize (bolean){
    if (bolean.length <5){
    return "small"
}
    if (bolean.length >5){
        return "large"
    }
  
else{
    return "medium"
}
    
}
console.log(stringSize("cat")) ; // 'small' (petit)
console.log(stringSize("bell")) ; // 'small' (petit)
console.log(stringSize("ready")) ; // 'medium' (moyen)
console.log(stringSize("shirt")) ; // 'medium' (moyen)
console.log(stringSize("shallow")) ; // 'large' (grand)
console.log(stringSize("intelligence")) ; // 'large' (grand)
