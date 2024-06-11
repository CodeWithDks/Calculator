let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'Ac') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the string
            string = string.slice(0, -1);
            // Update the input value
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
