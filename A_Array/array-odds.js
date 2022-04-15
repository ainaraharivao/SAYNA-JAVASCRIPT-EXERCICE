function arrayOdds (tabl){
    let odds =0;
    for (i=0; i<tabl.length; i++ ) {
    odds = odds + tabl[i];
    }
    return odds
    }
console.log(arrayOdds([4, 7, 2, 5, 9])) ;
console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ;
console.log(arrayOdds([100, 40, 4])) ;
