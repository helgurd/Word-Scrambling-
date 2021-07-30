
//we will use the selctor by the class and using a . with the class name gameArea.
const gameArea = document.querySelector('.gameArea');
//because or 2milestone project is about javascript we will create  button in javascript rather to go to do it in html. 

const btn = document.createElement('button');
//just creating a dive to add to the page dynamicly with js. 
const output = document.createElement('div');
//create input area 
const inWord = document.createElement('input');
// to define the input type  attrabute
inWord.setAttribute('type', 'text');
//adding some class to the inWord
inWord.classList.add('myInput');



//alligne text in the center
output.style.textAlign ='center';
btn.textContent = "START GAME!";
//add some content into output and same thing as but.textContent. 
output.textContent = "Click that button ";

//Add to HTML page, this will done with JS code. 
// we append the obj
gameArea.append(btn);
//append div to the page 
gameArea.append(output);
//Add input to the page 
gameArea.append(inWord);
// game start values
// creating an Array of words to scramble
console.log(btn );
///game start values
const myWords = ["hi", "bird","dog","cat","cow"];
//we create an object known as game and so this can be what we are able to use for selecting up  words.
const game ={sel: '', scramble:''};


//event listner to listn when pressed the button. and we will add event tracker object using arrow format for the function.
btn.addEventListener('click',(e)=>{
    //remove the button while clikcking it.
    btn.style.display='none';
    //console.log(myWords);
    /*the sort is expecting a function to be returned back and by adding (-) in front of random it will subtracting whatever the value is 
     and will return defferent order,  by this will allow us to scrample the words.*/
    
    myWords.sort(()=>{ return 0.5 - Math.random()});
    //out puting the first word with the index value of [0] to the outputing area. 
    game.sel = myWords[0];
    //we will pass here whatever returend fro mthe functions sorter and the value will be the selective word.
    game.scramble = sorter(game.sel);
    //font size 
    output.style.fontSize = '3em';

    //to have the selected word or the scrambled word, the same length we have to set the attraibute max and length, in another word we will have the same length between input and scrambled words and more words will not alowed.
    inWord.setAttribute('maxlength',game.sel.length);
    //we will put fucs to the input area wehnever we open the browser.
    inWord.focus();
    //while the word has been selected , we can scramble that word and turn it to an array.
    output.textContent = `${game.scramble} `;



    //we make sure we not getting back the word selected as the value of word scrambled. 
    console.log(game.sel, game.sel);
})

// letter count event listoner that will wapply to the inWord element
// the cose has testd whether is working or not and the image in the test folder
inWord.addEventListener('keyup', (e)=>{
    //after the key has been tracked and tested and added to the event we going to repalce this code with (e) eventlistinor reference. 
    //console.log(inWord.value.length);
    console.log(e);
    if(inWord.value.length == game.sel.length)

})

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




