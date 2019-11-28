var y = parseInt(prompt("Enter range"));
var x;
for (x = 0; x <= y; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(x + " PingPong");
    }
    else if (x % 5 == 0) {
        console.log(x + " Pong");
    }
    else if (x % 3 == 0) {
        console.log(x + " Ping")
    }
    else {
        console.log(x);
    }
}