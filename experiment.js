// in this file i will try to do some trial and errors to find ways to make this game playable .

console.log('experiment.js is added successfully');

// i will comment out the code so you can see what things i performed in this ...


// EXPERIMENT 1

//comparing math.random with the ranges to see in which range the number lies in we will create a function which will ..
//.. decide in which box range does the float1 lies . function is called compare

function compare ()
{
    let float1 = Math.random();
    console.log(float1);

    for(i=0;i<25;i++)
    {
        if(  float1>=box_range[i][0] && float1<=box_range[i][1])
        {
            console.log(`this lies in the box range of box number : ${i+1} `);
            console.log(box_range[i][0]);
            console.log(box_range[i][1]);
            console.log('comparison done');

        }else{
            continue;
        }
    }
}




//experiment 1 done successfully 
//------------------------------------------------------------------------------------------------------------------------------

// EXP 2 
// here i will try to check if something is equal to the element present inside an defined array so i will try to build logic 
// suppose we define an array for this experiment E2 which contain numbers and we will check if number float1 is equal 
// to any element of this array E2 using a function called check 

function check (B2,float1)
{
        
        
        for(i=0;i<=B2.length;i++)
        {

           


            if(float1=== B2[i])
            {
                console.log(`the float was equal to element ${B2[i]}`);
                return false
                break
            }
            
                if(i===B2.length)
                    {
                        console.log('float1 was not equal to any element of array B2 ')
                        return true
                        break
                  
   
        }
}
}

// experiment 2 is done 








