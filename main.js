async function loadListing(){
    //makes a request to the pokemon listing API url
    //gets the data from the request and sends it to displayListing()
}

function displayListing(pokemon){
    //receives an array of pokemon objects and displays it on the page in #listing
}

async function getPokemon(pid){
   //makes a request to the get pokemon detail API url
   //gets the data from the request and sends it to displayPokemon() 
}

function displayPokemon(pokemon){
    //receives a pokemon object and displays its data on the page in #result
}

// Bonus Functions

async function catchPokemon(pid){
    const id = getId();//gets the userid from the text field or prompts the user
    //prompts the user to enter a name
    //makes a request to the capture pokemon API url passing the name data in the body
}

async function getMyPokemon(){
    //makes a request to the get captured pokemon API url
    //get the data from the request and sends it to displayMyPokemon()
}

function displayMyPokemon(mypokemon){
    //receives an array of mypokemon objects and displays its data on the page in #myPokeListing
}

async function releasePokemon(box_id){
    const id = getId();//gets the userid from the text field or prompts the user
    //makes a request to the release pokemon API url then call getMyPokemon() to reload the table
}