// Function to create a closure that hides a location
function hide(hidingLocation) {
    let hideLocation = hidingLocation; // Store the hiding location in a local variable
    // Inner function that reveals the hiding location
    function seek() {
        return hideLocation; // Return the stored hiding location
    }
    return seek; // Return the inner function
}

// Create a closure instance using the hide function and store it in startGame
const startGame = hide("My favourite beautiful hiding place");
// Call the inner function of the closure to reveal the hiding location and log it
console.log(startGame());


// If we try to log hideLocation directly from outside of 
// the hide and seek functions, it will result in an error 
// because hideLocation is only accessible within the hide
// function due to scope.