const friend = 'BRUTUS';
const shiftValue = 3;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// step 1
function encrLetter(letter, value){
    // converts letter input to lowercase 
    // also finds the value of the letter in relation to alphabet
    const letterIndex = alphabet.indexOf(letter.toLowerCase());

    // shifts the value by however much the parameter value is set to
    // wraps around with % in case letter gets to the end
    const newIndex = (letterIndex + value) % alphabet.length;

    return alphabet[newIndex];
}

// step 2
function encrMessage(word, value){
    let finalMessage = '';

    for (let i = 0; i < word.length; i++){
        finalMessage += encrLetter(word[i], value);
    }

    return finalMessage;
}

// step 3
function decrLetter(letter, value){
    const encrLetterIndex = alphabet.indexOf(letter.toLowerCase());
    const newEncrLetterIndex = (encrLetterIndex - value) % alphabet.length;

    return alphabet[newEncrLetterIndex];
}

// step 4 
function decrMessage(word, value){
    let finalDecryMessage = '';
    for(let i = 0; i < word.length; i++){
        finalDecryMessage += decrLetter(word[i], value);
    }

    return finalDecryMessage;
}

// question 
// yes you will get brutus back since the value is being reverted to original 