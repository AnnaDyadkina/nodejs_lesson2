const prompt = require('prompt');

const fs = require('fs');

var random;
function randomInteger(min, max) {
    random = min + Math.random() * (max + 1 - min);
    random = Math.floor(random);
    return random;
}

randomInteger(1, 2);

prompt.start();

prompt.get([{name: 'answer', description: 'Введите число 1 или 2'}], function (err, result) {
    var win;
    if (parseInt(result.answer) === 1 || parseInt(result.answer) ===2) {
        if(parseInt(result.answer) === random) {
            console.log('Ура! Вы угадали');
            win = true;
        } else {
            console.log('Вы не угадали');
            win = false
        }
        fs.appendFile('message.txt', win + ',', (err) => {
            if (err) throw err;
        });
    } else {
        console.error('Нужно ввести 1 или 2!');
    }
});


  
