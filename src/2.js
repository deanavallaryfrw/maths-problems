var i;
function getRandomInt(max) {
    // Return a random integer between 0 and max - 1.
    return Math.floor(Math.random() * max);
}
for (i = 0; i < 5; i++) {
    console.log(getRandomInt(5));
}
