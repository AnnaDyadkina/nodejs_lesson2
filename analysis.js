const fs = require('fs');

var message;

fs.readFile('message.txt', (err, data) => {
    if(err) {
      return console.error(err);
    }  
    message = data.toString();
    var resultsArr = message.split(',');
    resultsArr = resultsArr.filter(function(index) {
        return index !== '';
    });
    var winArr = resultsArr.filter(function(index) {
        return index === 'true';
    });

    var winMax = message.split("false,");
    var winMax = winMax.filter(function(index) {
        return index!==""
    });
    winMax = winMax.map(function(index) {
        return index.split(",").length-1;
    });
    winMax = Math.max.apply(null, winMax);
    var losingMax = message.split("true,");
    var losingMax = losingMax.filter(function(index) {
        return index!==""
    });
    losingMax = losingMax.map(function(index) {
        return  index.split(",").length-1;
    });
    losingMax = Math.max.apply(null, losingMax);   
    
    console.log("Общее количество партий: " + resultsArr.length);
    console.log("количество выигранных партий: " +  winArr.length);
    console.log("количество проигранных партий: " + (parseInt(resultsArr.length) - parseInt(winArr.length)));
    console.log("соотношение побед и проигрышей: " + parseInt(winArr.length)/(parseInt(resultsArr.length) - parseInt(winArr.length)));
    console.log("максимальное число побед подряд: " + winMax );
    console.log("максимальное число проигрышей подряд: " + losingMax);
  });
