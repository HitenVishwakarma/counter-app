let inc = document.getElementById('increment');
let dec = document.getElementById('decrement');
let int = document.getElementById('number');
let integer = 0;

inc.addEventListener('click', function()
{
    integer += 1;
    int.innerHTML = integer;
})

dec.addEventListener('click', function()
{
    integer -= 1;
    int.innerHTML = integer;
})
