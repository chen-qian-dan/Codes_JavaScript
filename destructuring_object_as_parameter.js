let stats = {
    max: 45, 
    standard_deviation: 3.2, 
    median: 34.6, 
    mode: 23.44, 
    min: -0.45, 
    average: 35.6
}; 

const half = (function() {
    return function half({max, min}) {
        return (max + max) / 2.0
    };

})(); 

console.log(stats); 
console.log(half(stats)); 





