const maintittle = document.querySelector('#tittle');
const btnDecrement = document.querySelector('#Decrement');
const btnReset = document.querySelector('#Reset');
const btnIncrement = document.querySelector('#Increment');
btnIncrement.addEventListener('click',() =>
{
curValue++;
maintittle.textContent = curValue;
});
btnDecrement.addEventListener('click',() =>
    {
    curValue--;
    maintittle.textContent = curValue;
    });
btnReset.addEventListener('click',() =>
        {
        curValue = 0;
        maintittle.textContent = curValue;
        });    