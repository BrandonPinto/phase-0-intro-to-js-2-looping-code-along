for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts);
function writeCards(nameArray,eventName) {
    var myArray = [];
    var name = "";
    for (let i = 0; i < nameArray.length; i++) {
        name = nameArray[i];
        myArray.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
    }
    return myArray;
}
writeCards(["Guadalupe","Ollie","Aki"],"surprise");
function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown);
        countDown--;
    }
}