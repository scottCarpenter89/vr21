/**
 * 
 * The DOM loads the content:
 *  1. The Randomizer assigns cards images and a data id
 *  2. The Randomizer is called in the Card Loader adding cards until 16 are filled up
 *      1a. The Click Listener adds event listeners to each element
 * 
 */

const stag = "https://bicyclecards.org/wp-content/uploads/2019/11/red-61.jpg";
const aceSpades = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/1200px-Ace_of_spades.svg.png";
const queenHearts = "https://media.gettyimages.com/id/165639019/vector/colored-queen-of-hearts-playing-card.jpg?s=612x612&w=gi&k=20&c=2H5xHweK0u4udQ6hIllR3Up0MXjkiaq_9hhGvljKNoE=";
// const summer = img/summer.jpg;
// const beth = img/beth.jpg;
// const jerry = img/jerry.jpg;
// const birdPerson = "http://pm1.narvii.com/6471/3f595a428938815dd148e69317e6f006a3d1e14f_00.jpg";
// const mrP = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-poopybuthole-1574420029.jpg?crop=0.704xw:1.00xh;0,0&resize=480:*";
const cardArray = [stag, aceSpades, queenHearts];

// Load the Javascript that shuffles the cards
    // Comes in as an array of objects that removes matches and inserts them into a match array
window.addEventListener('DOMContentLoaded', (event) => {
    loadCards;

});




// Randomization method: 
    // There should only be 8 matching images
    const idArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

    function randomizer(array) {
        max = idArray.length - 1 ;
        min = idArray[0];
        let randomNumber = Math.round(Math.random() * (max - min) + min);
        
        const filterNumber = idArray.filter( id => {
            id === randomNumber;
        });
    
        idArray.splice(filterNumber, 1);
    
        return randomNumber;
    }

// Card Loader: dynamically adds the images to the cards on the DOM load
    // also assigns a data
    // uses a map function to add random numbers to the element


let loadCards = cardArray.map( (img) => {
    // let dataID = randomizer;
    const newMatchCard = 
    `
    <div class="col-md-6 col-lg-3 col-xxl-2r">
    <div class="card" style="width: 18rem;" card-id="${randomizer()}">
        <img src="${img}" class="card-img-top" alt="Memory Card">
    </div>
</div>
    `;
    
    document.querySelector('.row').insertAdjacentHTML("beforeend", newMatchCard);
});

// Click Listener: Evaluates clicks by dynamically adds them to an empty match array


// Match Evaluator: runs independently of the DOM load method and evaluates matches
    // Matches are removed from the array holding them and are sent to a match array 
        // Matches should become static and not flip at that point
        // Increments a match counter with a max value of 8
    // Mismatches should flip back over after a second delay
    // Point Tallier counts clicks for matches and mismatches and evaluates the score
        // Also keeps track of the games by sending the data to session storage

// End Game: shows an alert after you get to the end and asks if you want to play again