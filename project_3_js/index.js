//initializing some value
let totalAttempts = 10;
let attempts = 0;
let totalWons = 0;
var totalLosts = 0;


//finding element
const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");
const resultText= cardBody.querySelector(".resultText");
const lostWonMessage= document.createElement("p");
const remainingAttempts=cardBody.querySelector(".remainingAttemps");

form.addEventListener("submit",function(event){
event.preventDefault();
// console.log(guessingNumber.value);
// checkResult(guessingNumber.value);
attempts++;
if(attempts===10){
    guessingNumber.disabled=true;
    checkButton.disabled=true;
}if(attempts<11){
let guessNumber= Number(guessingNumber.value);
checkResult(guessNumber);

remainingAttempts.innerHTML=`Remaining Attempts : ${ totalAttempts - attempts}`;}
guessingNumber.value= "";

});
function checkResult(guessingNumber){
    console.log(guessingNumber);
    const randomNumber = getRandomNumber(10);
    console.log(randomNumber);
if(guessingNumber===randomNumber){
  resultText.innerHTML=`you have won`;
  totalWons++;
}
else{
    resultText.innerHTML=`you have lost; the random number was : ${randomNumber}`;
    totalLosts++;
}
lostWonMessage.innerHTML= `Won: ${totalWons}, Lost : ${totalLosts} `;
lostWonMessage.classList.add("large-text");
cardBody.appendChild(lostWonMessage);
}
 
function getRandomNumber(limit){
    return Math.floor(Math.random() * limit)+1;
}