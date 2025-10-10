function reverseWordInSentence(sentence) {
    let wordArr = sentence.split(" ");
    let reversedArr = wordArr.reverse();
    console.log(reversedArr.join(" "));
}

reverseWordInSentence("I am a good");

function ispalindrome(str) {
    return str === str.split("").reverse().join("");
}