document.addEventListener('DOMContentLoaded', function() {
    const inputTextElem = document.getElementById('textInput');
    const clearButtonElem = document.getElementById('clearButton');
    const phoneticTypeToggle = document.getElementById('phoneticTypeToggle');

    // Define the NATO and civilian phonetic alphabets
    const natoAlphabet = {
        'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
        'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
        'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
        'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
        'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee', 'Z': 'Zulu'
    };
    const civilianAlphabet = {
        'A': 'Adam', 'B': 'Boy', 'C': 'Charles', 'D': 'David', 'E': 'Edward',
        'F': 'Frank', 'G': 'George', 'H': 'Henry', 'I': 'Ida', 'J': 'John',
        'K': 'King', 'L': 'Lincoln', 'M': 'Mary', 'N': 'Nora', 'O': 'Ocean',
        'P': 'Paul', 'Q': 'Queen', 'R': 'Robert', 'S': 'Sam', 'T': 'Tom',
        'U': 'Union', 'V': 'Victor', 'W': 'William', 'X': 'X-ray', 'Y': 'Young', 'Z': 'Zebra'
    };

    // Event listeners for input, clear, and toggle
    if (inputTextElem) {
        inputTextElem.addEventListener('input', convertToPhonetic); 
    }

    // Clear output and input on button click
    if (clearButtonElem) {
        clearButtonElem.addEventListener('click', clearOutput); 
    }

    function convertToPhonetic() {
        const inputText = document.getElementById('textInput').value.toUpperCase();
        const outputList = document.getElementById('outputList');
        const kebabCase = document.getElementById('toggleKebab').checked;
        const useNATO = phoneticTypeToggle.checked; // Check if NATO is selected
        const currentAlphabet = useNATO ? natoAlphabet : civilianAlphabet;

        outputList.innerHTML = '';
        let result = inputText.split('').map(char => currentAlphabet[char] || char);

        if (kebabCase) {
            result = result.join('-').toLowerCase();
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<div class="card-body">${result}</div>`;
            outputList.appendChild(card);
        } else {
            result.forEach(phonetic => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<div class="card-body">${phonetic}</div>`;
                outputList.appendChild(card);
            });
        }
        $(outputList).hide().fadeIn(500);
    }

    function clearOutput() {
        document.getElementById('outputList').innerHTML = '';
        document.getElementById('textInput').value = '';
        document.getElementById('textInput').focus(); // Refocus on input field for user convenience
    }
});
