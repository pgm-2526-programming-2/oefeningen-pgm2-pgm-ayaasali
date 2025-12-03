let wordsArray = ['appel', 'peer', 'kiwi', 'banaan'];

let longest = wordsArray;
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longest.length) {
        longest = wordsArray[i];
    }
}

console.log(longest);