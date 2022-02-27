let password = document.getElementById('password');
let background = document.getElementById('background');

console.log(password, background);

password.addEventListener('input',(e)=>{
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20-length * 2
    console.log(blurValue);
    background.style.filter = `blur(${blurValue}px)`;
});