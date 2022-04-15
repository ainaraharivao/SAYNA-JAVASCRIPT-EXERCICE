function longer (str1, str2){
  
if (str1.length> str2.length)
return str1
if(str2.length> str1.length)
return str2
else 
return str1


}

console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "durable".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)
