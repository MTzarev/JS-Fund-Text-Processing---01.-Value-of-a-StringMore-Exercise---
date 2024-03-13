function valueOfaString(input) {
    let string = input.shift().split(``);
    let command = input.shift();
    let sum = 0
    for (let letter of string) {
        let charCode = letter.charCodeAt(0);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            
            if (command === `UPPERCASE`) {
                if (letter.toUpperCase() === letter) {
                    sum += Number((letter.charCodeAt(0)));
                } else {
                    sum += 0;
                }
            }
            if (command === `LOWERCASE`) {
                if (letter.toLowerCase() === letter) {
                    letter = (Number(letter.charCodeAt(0)));
                    sum += Number(letter);
                } else {
                    sum += 0;
                }
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfaString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfaString(['AC/DC', 'UPPERCASE']);