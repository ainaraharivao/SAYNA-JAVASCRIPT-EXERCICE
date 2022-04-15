let restaurant = {
    name : "Bob's Burgers",
    location : "123 Ocean Avenue",
    propriétaires : ["Bob Belcher", "Linda Belcher"],
    création : 2011,
    menu : ["burgers", "frites", "milk-shakes"],
    } ;
    console.log(restaurant.name);
    console.log("propriétaires" + " dans le restaurant") ;
    console.log(restaurant.propriétaires);
    console.log("employés" + " dans le restaurant") ;

    let someKey = "menu" ;
    console.log(someKey +" dans le restaurant") ;
    console.log(restaurant.menu) ;
    console.log(restaurant["menu"]) ;
    console.log(restaurant[someKey]) ;
    console.log(restaurant.someKey) ;
    console.log(restaurant.menu.includes("frites")) ;
    