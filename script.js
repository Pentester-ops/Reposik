const button = document.getElementById('myButton');
const message = document.getElementById('message');
let count = 0;

button.addEventListener('click', function () {
    count++;
    message.textContent = 'Button pressed ' + count + ' times';
});