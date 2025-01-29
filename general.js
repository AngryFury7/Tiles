// here is the list of the array which contain the ranges of the boxes  , array name is box_range
// for example box number P have range equal to (P-1/25 , P/25);

let box_range = [];

// for loop to push elements inside this  i will have to use a approach 

let arrayone = [];
for(i=0;i<25;i++)
{
    arrayone.push(i);
}

//console.log(arrayone);

arrayone.forEach((value,index) => {
    
 let arraytwo = [];
 let A = value;
let B = value+1;
arraytwo.push(A/25);
arraytwo.push(B/25);
box_range.push(arraytwo);

})

console.log(box_range);

// now we have range for each box in this if i want to access range of P th button i can write box_range[P-1] 

//now i want to decide which buttons will be red based on number provided 



document.querySelector('#c').addEventListener('click',() =>
    {
    
    
    document.querySelector('.popup').style.zIndex = '100';
    setTimeout(display,400)
    document.querySelector('#restart').style.pointerEvents = "auto";
    document.querySelector('#restart').style.opacity = "1";
        document.querySelector('#input').style.pointerEvents = "none";
    
    })


function error(string)
{

document.querySelector('#error').style.opacity = "1";
document.querySelector('#Error').innerHTML = string;

}

document.querySelector('#restart').addEventListener('click',()=>

{location.reload();})


//---------------------------------------------------------------------------------------------------------
function display()
{




if(RED.includes(1))
{
    document.querySelector('.box1').classList.add('box1red');
    console.log('red');
}else{
    document.querySelector('.box1').classList.add('box1green');
    console.log('green');

}




if(RED.includes(2))
{
    document.querySelector('.box2').classList.add('red');
    console.log('red');
}else{
    document.querySelector('.box2').classList.add('green');
    console.log('green');

}




if(RED.includes(3))
{
    document.querySelector('.box3').classList.add('red');
    console.log('red');    


}else{
    document.querySelector('.box3').classList.add('green');
    console.log('green');

}




if(RED.includes(4))
{
    document.querySelector('.box4').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box4').classList.add('green');
    console.log('green');

}



if(RED.includes(5))
{
    document.querySelector('.box5').classList.add('box5red');
    console.log('red');   

}else{
    document.querySelector('.box5').classList.add('box5green');
    console.log('green');

}




if(RED.includes(6))
{
    document.querySelector('.box6').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box6').classList.add('green');
    console.log('green');

}




if(RED.includes(7))
{
    document.querySelector('.box7').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box7').classList.add('green');
    console.log('green');

}




if(RED.includes(8))
{
    document.querySelector('.box8').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box8').classList.add('green');
    console.log('green');

}




if(RED.includes(9))
{
    document.querySelector('.box9').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box9').classList.add('green');
    console.log('green');

}




if(RED.includes(10))
{
    document.querySelector('.box10').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box10').classList.add('green');
    console.log('green');

}




if(RED.includes(11))
{
    document.querySelector('.box11').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box11').classList.add('green');
    console.log('green');

}




if(RED.includes(12))
{
    document.querySelector('.box12').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box12').classList.add('green');
    console.log('green');

}




if(RED.includes(13))
{
    document.querySelector('.box13').classList.add('red');
    console.log('red');   

}else{
    document.querySelector('.box13').classList.add('green');
    console.log('green');

}




if(RED.includes(14))
{
    document.querySelector('.box14').classList.add('red');
    console.log('red');   

}else{
    document.querySelector('.box14').classList.add('green');
    console.log('green');

}




if(RED.includes(15))
{
    document.querySelector('.box15').classList.add('red');
    console.log('red');   

}else{
    document.querySelector('.box15').classList.add('green');
    console.log('green');

}




if(RED.includes(16))
{
    document.querySelector('.box16').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box16').classList.add('green');
    console.log('green');

}




if(RED.includes(17))
{
    document.querySelector('.box17').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box17').classList.add('green');
    console.log('green');

}




if(RED.includes(18))
{
    document.querySelector('.box18').classList.add('red');
    console.log('red');   

}else{
    document.querySelector('.box18').classList.add('green');
    console.log('green');

}




if(RED.includes(19))
{
    document.querySelector('.box19').classList.add('red');
    console.log('red');   

}else{
    document.querySelector('.box19').classList.add('green');
    console.log('green');
}



if(RED.includes(22))
{
    document.querySelector('.box22').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box22').classList.add('green');
    console.log('green');



if(RED.includes(23))
{
    document.querySelector('.box23').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box23').classList.add('green');
    console.log('green');

}




if(RED.includes(24))
{
    document.querySelector('.box24').classList.add('red');
    console.log('red');    

}else{
    document.querySelector('.box24').classList.add('green');
    console.log('green');

}






if(RED.includes(21))
{
    document.querySelector('.box21').classList.add('box21red');
    console.log('red');    ;

}else{
    document.querySelector('.box21').classList.add('box21green');
    console.log('green');

}







if(RED.includes(25))
{
    document.querySelector('.box25').classList.add('box25red');
    console.log('red');    

}else{
    document.querySelector('.box25').classList.add('box25green');
    console.log('green');

}











if(RED.includes(20))
{
    document.querySelector('.box20').classList.add('red');
    console.log('red');   

}else{
    document.querySelector('.box20').classList.add('green');
    console.log('green');

}


}




}


