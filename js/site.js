// Get string from the page
// Controller Function
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    // Get user string
    let userString = document.getElementById("userString").value;
    // Check palindrome
    let returnObj = checkPalindrome(userString)
    // Display result on page
    displayString(returnObj);
}

// Reverse string and perform palindrome check
// Logic Function
function checkPalindrome(userString) {

    // Set input string to lower case and cleanup input string of any whitespace, special characters, and numbers.
    let cleanedString = userString.toLowerCase();
    let regex = /([^a-z0-9])/gi;
    cleanedString = cleanedString.replace(regex, "")

    let revString = [];
    let returnObj = {};

    // Reverse cleanedString string via for loop
    for (let index = cleanedString.length - 1; index >= 0; index--) {
        revString += cleanedString[index];
    }

    // Set object property based on palindrome status
    if (revString == cleanedString) {
        returnObj.msg = "Congratulations! You entered a palindrome."
    } else {
        returnObj.msg = "Sorry. Your input isn't a palindrome."

    }

    returnObj.reversed = revString;

    return returnObj;
}

// Display reversed string to user
// View Function
function displayString(returnObj) {

    // Write message to heading
    document.getElementById("heading").innerHTML = returnObj.msg;
    // Write message to page
    document.getElementById("msg").innerHTML = `Your word/phrase reversed is: ${returnObj.reversed}`;
    // Show alert box
    document.getElementById("alert").classList.remove("invisible");
}