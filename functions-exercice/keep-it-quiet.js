let keepItQuiet = function (str) {
    let add = str.toLowerCase("") ;
    return add + "...";
    } ;
    console.log(keepItQuiet("HOORAY")) ; // 'hooray...' (en anglais)
    console.log(keepItQuiet("Doggo")) ; // 'doggo...' (en anglais)
    console.log(keepItQuiet("WHAT ?!?!")) ; // 'what ?!?!...' (quoi ?!!...)
    