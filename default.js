const server = "https://pokedextr-api.herokuapp.com";

document.addEventListener('DOMContentLoaded', function() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Tabs.init(document.querySelectorAll('.tabs'));
    loadListing();
    getPokemon(1);
    loadUser();
});

function closeNav(){
    M.Sidenav.init(document.querySelector('#listing')).close();
}

async function sendRequest(url, method, data){
    const options = {method};
    if(data){
        options.body = JSON.stringify(data);
        options.headers = {'Content-Type':'application/json'};
    }
    let response = await fetch(url, options);
    return response.json();
}

function loadUser(){
    let userid = window.localStorage.getItem('userid');
    if(userid){
        getMyPokemon();
        document.querySelector('#student_id').value = userid;
    }
}

function setId(userId){
    window.localStorage.setItem('userid', userId);
    let id_input = document.querySelector('#student_id');
    id_input.value = student_id;
}

//gets the id from the id text field or prompts the user if the field is empty
function getId(){
    
    let student_id = window.localStorage.getItem('userid');
    if(!student_id){
        student_id = prompt("Please enter student ID");
        setId(student_id);
    }
    return student_id;
}

function toast(message){
    M.toast({html: message});
}