const firstRandomNumber = Math.floor(Math.random() * 6) + 1
const firstDiceImage = 'assets/dice' + firstRandomNumber + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
  

const secondRandomNumber = Math.floor(Math.random() * 6) + 1
const secondDiceImage = 'assets/dice' + secondRandomNumber + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
 
if (
    firstRandomNumber > secondRandomNumber){
        document.querySelector('h1').innerHTML = 'The Winner is User 1';
    }
    else if (firstRandomNumber < secondRandomNumber){
        document.querySelector('h1').innerHTML = 'The Winner is User 2';
    }
    else {  document.querySelector('h1').innerHTML = "It's a Draw!";
}
    