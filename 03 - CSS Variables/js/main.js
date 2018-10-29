const inputs = document.querySelectorAll("input"); // Get all the inputs

function handleInputChange() {
    const suffix = this.dataset.sizing || ""; // Get the data-sizing property
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Setting the properties
}

inputs.forEach(input => input.addEventListener('mousemove', handleInputChange));