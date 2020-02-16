
let SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet; 
}

// old way to create an object. 
let zeus = new SpaceShuttle('Jupiter'); 

console.log(zeus.targetPlanet); 

// the same as -------------------------------
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet; 
    }
}

let zeus = new SpaceShuttle('Jupiter'); 

console.log(zeus.targetPlanet); 








