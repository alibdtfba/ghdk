let seedPhraseLength = 0; // Variable to store the selected seed phrase length (12 or 24)

// Function to handle seed phrase length selection
function chooseSeedPhraseLength(length) {
    seedPhraseLength = length; // Store selected length
    document.querySelector('.selection-container').style.display = 'none'; // Hide the selection buttons
    document.getElementById('seedPhraseForm').style.display = 'block'; // Show the seed phrase input form
    createInputFields(length); // Create the input fields based on the selected length
}

// Create input fields dynamically based on the number of words
function createInputFields(length) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear existing fields (if any)

    // Create the necessary number of input fields
    for (let i = 0; i < length; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = `Word ${i + 1}`;
        inputField.id = `word${i + 1}`;
        inputContainer.appendChild(inputField);
    }

    // Update layout based on screen size
    adjustInputLayout(length);
}

// Function to dynamically adjust the input field layout based on screen size
function adjustInputLayout(length) {
    const inputContainer = document.getElementById('inputContainer');

    // Check screen width and adjust the number of columns
    if (window.innerWidth <= 600) {
        inputContainer.style.flexWrap = 'wrap';
        inputContainer.style.justifyContent = 'center';
        // 1 column per row on small screens
        inputContainer.style.columnCount = '1';
    } else if (window.innerWidth <= 768) {
        inputContainer.style.flexWrap = 'wrap';
        inputContainer.style.justifyContent = 'center';
        // 2 columns per row on medium screens (tablet)
        inputContainer.style.columnCount = '2';
    } else {
        inputContainer.style.flexWrap = 'wrap';
        inputContainer.style.justifyContent = 'center';
        // 3 columns per row on large screens
        inputContainer.style.columnCount = '3';
    }
}

// Validate seed phrase and check if the number of words matches the selected length
function validateSeedPhrase() {
    const seedPhrase = [];
    const inputContainer = document.getElementById('inputContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Gather all the words from the input fields
    for (let i = 0; i < inputContainer.children.length; i++) {
        const word = inputContainer.children[i].value.trim();
        if (word) {
            seedPhrase.push(word);
        }
    }

    // Check if the number of words matches the selected seed phrase length
    if (seedPhrase.length === seedPhraseLength) {
        // Proceed with the seed phrase processing (for example, show success or send data to backend)
        alert('Seed phrase is valid!');
        console.log('Valid seed phrase:', seedPhrase);
        errorMessage.style.display = 'none';
    } else {
        // Show error message if the seed phrase length is incorrect
        errorMessage.style.display = 'block';
    }
}

// Listen to window resizing to adjust input layout dynamically
window.addEventListener('resize', function() {
    adjustInputLayout(seedPhraseLength);
});