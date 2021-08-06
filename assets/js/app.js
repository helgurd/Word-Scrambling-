
//we will use the selctor by the class and using a . with the class name gameArea.
const gameArea = document.querySelector('.gameArea');
//because or 2milestone project is about javascript we will create  button in javascript rather to go to do it in html. 
const btn = document.createElement('button');
//just creating a dive to add to the page dynamicly with js. 
const output = document.createElement('div');
//create input area 
const inWord = document.createElement('input');
//setting up a score area 
const scoreBoard = document.createElement('div');
//scoreBoard.textContent = 'Score: 0';
scoreBoard.style.color= 'black';
//over input score font size
scoreBoard.style.fontSize = '2em';
//scoreBoard.style.backgroundColor = 'black'; 
//adding padding between scoreboard and inWord
scoreBoard.style.padding = '10px';
// to define the input type  attrabut
inWord.setAttribute('type','text');
//adding some class to the inWord
inWord.classList.add('myInput');
//alligne text in the center
output.style.textAlign = 'center';
btn.textContent = "START GAME!";
//add some content into output and same thing as but.textContent. 
//output.textContent = "Click that button ";
output.style.letterSpacing = '0';
/// Add to HTML page
//Add to HTML page, this will done with JS code. 

//append div to the page 
gameArea.append(output);
//Add input to the page
gameArea.append(inWord);
//game area outPut prepend wich will out put on the top of the input
gameArea.prepend(scoreBoard);
// we append the obj
gameArea.append(btn);

//hide non needed
scoreBoard.style.display = 'none';
inWord.style.display = 'none';


console.log(btn );
///game start values
// creating an Array of words to scramble
const myWords = ["hi","bird","dog","cat","cow"]; //min 2 character words or we end up in a 
//information about the words inside game g
const game = {sel:'',scramble:'',score:0,incorrect:0, wordsLeft: 0, played:myWords.length};

//event listner to listn when pressed the button. and we will add event tracker object using arrow format for the function.

//event listener
btn.addEventListener('click',(e)=>{
    //console.log(myWords);
    //score value has to be set to reseted eachtimes the game will start
    scoreBoard.textContent = 'Score: 0';
    scoreBoard.style.display = 'block';
    inWord.style.display = 'inline';
      //remove the button while clikcking it
    btn.style.display = 'none';
    //console.log(myWords);
    /*the sort is expecting a function to be returned back and by adding (-) in front of random it will subtracting whatever the value is 
     and will return defferent order,  by this will allow us to scrample the words.*/
    myWords.sort(()=>{ return 0.5 - Math.random()});
        //out puting the first word with the index value of [0] to the outputing area. 
        //the word has to be removed and update with next random one with the shift(); methode.
    //game.sel = myWords[0];
    game.sel = myWords.shift(); 
    //chek how many words left after first attemtions.
    game.wordsLeft = myWords.length;

        //we will pass here whatever returend fro mthe functions sorter and the value will be the selective word.

    game.scramble = sorter(game.sel);
    //font size
    output.style.fontSize = '3em';
    output.style.letterSpacing = '0.5em';
    //to have the selected word or the scrambled word, the same length we have to set the attraibute max and length, in another word we will have the same length between input and scrambled words and more words will not alowed.

    inWord.setAttribute('maxlength',game.sel.length);

    //we will put fucs to the input area wehnever we open the browser.

    inWord.focus();
    //while the word has been selected , we can scramble that word and turn it to an array.
    output.textContent = `${game.scramble}`;
        //we make sure we not getting back the word selected as the value of word scrambled. 
    console.log(game.sel,game.scramble);
})

/* letter count event listoner that will wapply to the inWord element
 the cose has testd whether is working or not and the image in the test folder*/
inWord.addEventListener('keyup',(e)=>{
        /*after the key has been tracked and tested and added to the event we going to repalce this code with (e) eventlistinor reference. 
    console.log(inWord.value.length)*/
    console.log(e);
    inWord.style.borderColor = '#eee';
    inWord.style.borderWidth = '1px';
     /*if  value of the length is equal to game selectd length word or event code equal to Enter
        we will  run the cheking */
    if(inWord.value.length == game.sel.length || e.code == 'Enter'){
        winChecker();
    }
})



function addScore(){
    let tempOutput = `Score : <b>${game.score}</b> vs incorrect <i>(${game.incorrect})</i><small> ${game.wordsLeft} words left </small>`;
    scoreBoard.innerHTML = tempOutput;
}


// check if  the words are matching. we only passing the global value/ 
function winChecker(){
    inWord.style.borderWidth = '5px';
    if(inWord.value == game.sel){
        console.log('correct');
        inWord.style.borderColor = 'green';
        game.score++;
        inWord.disabled = true;
        btn.style.display = 'block';
        btn.textContent = 'Click for Next Word';
    }else{
        inWord.style.borderColor = 'red';
        console.log('incorrect');
        inWord.value = '';
        inWord.focus();
        game.incorrect++;
    }
    //calling addscore function
    addScore();
}

/*
to fix the bug that words are not scrambled sometimes 
ex: world  will show the same world after scrambling. 
function will continue to run until the word is scrambled
*/

function sorter(val){
    let temp = val.split('');
    temp.sort(()=>{ return 0.5 - Math.random()});
    temp = temp.join('');
    console.log(temp);
     //if condation will checks if the created word is same as the word selected if it is the same it will scramble it. 
    if(val === temp){
        console.log(val,temp);
        return sorter(val);
    }
    return temp;
}
 