const test = (param)=> {
    param('everyone!');
}

test((name) =>{
    console.log('Hello ' + name);
}
)

//--------------------------------------//

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Prachi", sayBye);
