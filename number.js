let input = document.querySelector('#tiles');

let input_string;
let input_number;
let main_value ;
let alpha ;
let set_check = 0;


input.addEventListener('change' ,() =>
{

    input_string = input.value;
    input_number = Number(input_string);
    alpha = Math.round(input_number);


if(input_string === "")
{
    main_value=NaN;
    
}else
{

if(isNaN(input_number)=== true|| !(alpha === input_number))
{
    main_value=NaN
}
else{
    main_value=alpha;
}
}
}
)

console.log('number.js is added');

console.log(main_value);

document.querySelector('#tiles_button').addEventListener('click',() =>

{
if(typeof main_value=== "undefined")
{
    error("Please select red tile number");
    document.querySelector('#retry').style.pointerEvents = "auto";

}
else{

if(isNaN(main_value)===true)
{
    error("Set number of red tiles properly")
    document.querySelector('#retry').style.pointerEvents = "auto";

}else{

if(main_value>=25)
{
    error("Number cannot be more than 24")
    document.querySelector('#retry').style.pointerEvents = "auto";


}
else{

    if(main_value<=0)
    {
        error("number cannot be less than 1")
        document.querySelector('#retry').style.pointerEvents = "auto";

    }
    else{

        set_check = 47;
        decider4(main_value);
        document.querySelector('#retry').style.opacity = "0";
        document.querySelector('#error').style.opacity = "1";
        document.querySelector('#Error').style.color = "rgb(255,255,255)"
document.querySelector('#Error').innerHTML = `Number of Red tiles set to ${main_value}` ;
      
           }
}}}})


document.querySelector('#retry').addEventListener('click',() =>

{

    location.reload();
})





