

var a = 'Qian'; // a is visable in the whole file.
b = 'Chen'; // no var or let, then b is global.
let f = 3; // f is visable in the whole file. 

function fun1(){
    c = 'Dan'; // no var or let, then c is global.
    var d = 1; // d only visible in fun1. 
    let e = 2;  // e only visible in the block of fun1.
}

function fun2(){
    /*
    a: visible;
    b: visible; 
    f: visible; 
    c: visible; 
    d: not visible; 
    e: not visible; 
    */

}

fun1();
fun2(); 





















