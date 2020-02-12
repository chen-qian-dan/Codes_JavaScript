
var funcs = [];

// can try to change var to let; 
for (var i = 0; i < 3; i++){
    funcs[i] = function() {
        console.log("My value: " + i); 
    };
}

for (var j = 0; j < 3; j++) {
    funcs[j](); 
}

