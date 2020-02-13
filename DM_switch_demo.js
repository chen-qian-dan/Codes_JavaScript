function caseInSwitch(val) {
    let answer = ''; 

    switch(val) {
        // if no break, it will run to the end; 
        case 1, 2: answer = 'a'; break; 
        case '3': answer = 'b'; break; 
        default: answer = 'z'; 
    }
    console.log(answer)
}

caseInSwitch(1); 


