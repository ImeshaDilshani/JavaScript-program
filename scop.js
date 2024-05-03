let globalVariable = "This is a global variable";

function printbothVariables(){
    let localVariable = "This is a local variable";

    console.log(globalVariable);
    console.log(localVariable);
}

printbothVariables();
console.log(globalVariable);
// console.log(localVariable);