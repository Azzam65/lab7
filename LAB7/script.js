const header = document.getElementById('main-header');
const form = document.getElementById('color-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const colourIN = document.getElementById('color-input');
    const newColor = colourIN.value;

    if (newColor.startsWith("#") && newColor.length === 7) {
            header.style.color = newColor;
    } else if (/[a-z]+$/.test(newColor)) {
            header.style.color = newColor;
    } else {
            alert("invalid ,enter either hex or color name");
    }

    colourIN.value = "";
});
