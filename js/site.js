// Get string from the page
// Controller Function
function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    // Set input string to lower case and cleanup input string of any whitespace, special characters, and numbers.
    let cleanedString = userString.toLowerCase()
    cleanedString = cleanedString.replace(/([^a-z])/g, '')
    cleanedString = cleanedString.trim()

    // Compare strings for palindrome check
    let reversedString = revString(cleanedString);
    let isPalindrome = (reversedString == cleanedString)
    
    let message = ""
    if (isPalindrome) {
        message = "Congratulations! You entered a palindrome."
    } else {
        message = "Nope. Your input isn't a palindrome."
    }
    displayString(reversedString,message);
}

// Reverse string for palindrome check
// Logic Function
function revString(userString) {
    
    let revString = [];
    // Reverse userString string via for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}

// Display reversed string to user
// View Function
function displayString(revString, message) {

    // Write message to heading
    document.getElementById("heading").innerHTML = message;
    // Write message to page
    document.getElementById("msg").innerHTML = `Your word/phrase reversed is: ${revString}`;
    // Show alert box
    document.getElementById("alert").classList.remove("invisible");
}