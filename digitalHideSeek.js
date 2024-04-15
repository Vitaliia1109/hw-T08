function hide(hidingLocation) {
    let hideLocation = hidingLocation;
    function seek() {
        return hideLocation;
    }
    return seek;
}

let startGame = hide("My favourite beautiful hiding place");
console.log(startGame());


// If we try to log hideLocation directly from outside of 
// the hide and seek functions, it will result in an error 
// because hideLocation is only accessible within the hide
// function due to scope.