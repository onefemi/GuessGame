
let guesses = [];
let guess = [];
let dstatus;
let ran;

do{
    guesses =[];
    guess =[parseInt(Math.random() * 10),parseInt(Math.random() * 10),parseInt(Math.random() * 10),parseInt(Math.random() * 10),parseInt(Math.random() * 10)];
    ran = parseInt(Math.random() * 10);    
    console.log(ran);
    for(i = 0; i < 5; i++) {
        console.log("my " + i + " guess is: "+ guess[i]);
        if (guess[i] == ran) {
            //console.log = 'correct';
            guesses.push(guess[i]);
            dstatus = 'You Won!';
            break;
        }else{
            if(guesses.includes(guess[i])){
                //console.log = 'duplicate';
            }else{
                guesses.push(guess[i]);
            }
            dstatus = 'You Lose!';                
        }        

    }
    console.log('Your guesses are ' + guesses + ' and the correct number is ' + ran);
    console.log(dstatus);
} while(dstatus != 'You Won!');