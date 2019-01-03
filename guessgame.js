
var guesses =[];
var guess =[parseInt(Math.random() * 10),parseInt(Math.random() * 10),parseInt(Math.random() * 10),parseInt(Math.random() * 10),parseInt(Math.random() * 10)];
var status = '';
var ran;

do{
    ran = parseInt(Math.random() * 10);    
    console.log(ran);
    for(i = 0; i < 5; i++) {
        console.log("my " + i + " guess is: "+ guess[i]);
        if (guess[i] == ran) {
            //console.log = 'correct';
            guesses.push(guess[i]);
            status = 'You Won!';
            break;
        }else{
            if(guesses.includes(guess[i])){
                //console.log = 'duplicate';
            }else{
                guesses.push(guess[i]);
            }
            status = 'You Lose!';                
        }        

    }
    console.log('Your guesses are ' + guesses + ' and the correct number is ' + ran);
    console.log(status);
} while(status != 'You Won!');