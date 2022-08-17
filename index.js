const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Загадано число в диапазоне от 0 до 100 ',
});

let number = Math.floor(Math.random() * 101);
console.log(number);

rl.prompt();

rl.on('line', (line) => {
    if (line.trim() > number) {
        console.log('Больше');
    } else if (line.trim() < number) {
        console.log('Меньше');
    } else if (line.trim() == number) {
        console.log(`Отгадано число ${line.trim()}`);
        rl.close();
    } else {
        console.log(`Введите число`);
    }
})