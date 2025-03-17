// Unused variables
const unusedVar = "I am never used";

// Hardcoded credentials (Security Issue)
const password = "123456";  

// Function inside loop (Code Smell)
for (let i = 0; i < 5; i++) {
    function badPractice() {
        console.log("This function is inside a loop, bad practice!");
    }
    badPractice();
}

// eval() is a major security risk
const userInput = "console.log('Hello World')";
eval(userInput);  // 🚨 Very bad security practice!

// Console logs (should be removed in production)
console.log("Debugging message here!");
