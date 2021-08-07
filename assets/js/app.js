
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
const game = {sel:'',scramble:'',score:0,incorrect:0,wordsLeft:0,played:myWords.length};

//event listner to listn when pressed the button. and we will add event tracker object using arrow format for the function.

//event listener
btn.addEventListener('click',(e)=>{
    //console.log(myWords);
    //score value has to be set to reseted eachtimes the game will start
    // we will replace all previouse values in If else  statemnt to evalute the length of the words 

    if(myWords.length <= 0){
        console.log('game over');
        gameArea.innerHTML = `<div>GAME OVER</div>`;
        gameArea.innerHTML += `<div>You Got ${game.score} correct vs ${game.incorrect} incorrect out of ${game.played} words total</div>`
    }else{

        inWord.disabled = false;
        inWord.value = "";
        inWord.style.borderWidth = '1px';
        inWord.style.borderColor = '#eee';
        scoreBoard.style.display = 'block';
        inWord.style.display = 'inline';
        btn.style.display = 'none';
        myWords.sort(()=>{ return 0.5 - Math.random()});
        game.sel = myWords.shift();
        game.wordsLeft = myWords.length;
        console.log(game);
        game.scramble = sorter(game.sel);
    
        addScore();   
        output.style.fontSize = '3em';
        output.style.letterSpacing = '0.5em';
        inWord.setAttribute('maxlength',game.sel.length);
        inWord.focus();
        output.textContent = `${game.scramble}`;
        console.log(game.sel,game.scramble);
        }
    })

// Adding an method to liston to the event keyup
inWord.addEventListener('keyup', (e)=>{
    console.log(e);
    
    inWord.style.borderColor = '#eee';
    inWord.style.borderWidth = '1px';
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
 


/*future works ready to go just need to repalace some names ot hte code 
 and need to generate jason uniqe code form excel sheet to update 
 words dynamicaly. */

// ///game start values
// const myArr = [];
// let myWords = [];
// //const myWords = ["hi","bird","dog","cat","cow"]; //min 2 character words or we end up in a loop
// //const myWords = ["hi","bird"];
// const game = {sel:'',scramble:'',score:0,incorrect:0,wordsLeft:0,played:myWords.length,inplay:false};
// const id = '1HTi9dPBVX5CTMmJ5HEE1QEJo64MW1iJL0T-_mnbHsXo';
// let url = 'https://spreadsheets.google.com/feeds/list/'+id+'/1/public/values?alt=json';
// fetch(url).then((res)=>res.json()).then((data)=>{
//     console.log(data.feed.entry[0]);
//     //let ele = data.feed.entry[0];
//     data.feed.entry.forEach((ele,index)=>{
//         let holder = [];
//         let opt = document.createElement('option');
//         opt.appendChild(document.createTextNode('Word List #'+(index+1)));
//         opt.value = index;
//         selWordList.append(opt);
//         for( let key in ele){
//             console.log(key);
//             if(key.substring(0,3) =='gsx'){
//                 holder.push(ele[key].$t);
//             }
//         }
//         myArr.push(holder);
//     })
//     btn.style.display = 'block';
//     output.textContent = "Please Select your word List";
//     selWordList.style.display = 'block';
//     console.log(myArr);
// })



