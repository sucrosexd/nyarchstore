const value = document.querySelector('#absurdvalue');
const input = document.querySelector('#absurd');
value.textContent = input.value;
input.addEventListener("input", (event) => {
    
    if (value.textContent < 1)
    {
        value.textContent = event.target.value;
    }
    else
    {
        value.textContent = "Более " + event.target.value;
    }
});