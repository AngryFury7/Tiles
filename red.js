//in this we will try to create a function that will decide which blocks will get red based on number given 
//the position of the blocks or boxes that will turn red will be sotred in an array called RED 

let RED=[];

//so the function will fill this RED array with position of blocks which will turn red ...... called decider 








console.log(RED);



function decider4(A) {
    console.log('function decider is toggled');
    
    let k = 0; 
    
    while (k < A) {
        let B = Math.random(); // Generate a random float between 0 and 1

        for (let i = 0; i < box_range.length; i++) {
            if (B >= box_range[i][0] && B < box_range[i][1]) {
                let C = i + 1; 
                if (!RED.includes(C)) {
                    RED.push(C); 
                    k++; 
                    break;
                }
            }
        }
    }
}




