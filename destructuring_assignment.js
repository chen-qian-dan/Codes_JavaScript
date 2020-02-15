// destructuring assignment

let voxel = {x: 3.6, y: 7.4, z:6.53}; 
/*
let a = voxel.x; 
let b = voxel.y; 
let c = voxel.z; 
*/

// the same as 
// must be the key x, y, z
let {x: a, y: b, z: c} = voxel; 

console.log(a);
console.log(b);
console.log(c);




