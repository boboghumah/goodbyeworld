var readline = require('readline');
var names = ['tobby', 'clat', 'bob', 'bobclat', 'john'];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function matchName(name) {
    var matchedNames = [];

    for (var i=0; i < names.length; i++) {
        if (names[i].indexOf(name) >= 0) {
            matchedNames.push(names[i])
        }
    }

    if(matchedNames.length > 0){
        matchedNames.map(function (value, index) {
            console.log(index, value)
        });
    }else{
        console.log("No names found");
    }

    /*names.forEach(function(nom) {
     if (nom.indexOf(name) > -1) {
     console.log(nom);
     }
     });*/
}

function ask() {
    rl.question("\nWhat is your name? \n\nAnswer: \t", function (answer) {
        matchName(answer);
        ask();
        //rl.close();
    });
}

ask();
//console.log("what is your name? ");
//var userInput = process.argv[2];
