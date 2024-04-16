const inputs = document.querySelectorAll('input');

function handleInputs()
{
    // dataset contains all the data attributes that we make by using "data-" like in this we've created data-sizing and we use '' empty for the color. 
    const suffix = this.dataset.sizing || ''; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('input', handleInputs));
// inputs.forEach(input => input.addEventListener('mousemove', handleInputs));