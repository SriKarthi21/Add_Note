let noteList = [];

let view = "grid"; //default view is grid-view

const todoURL = "http://localhost:3000/todos";

//task-1 : add note
function saveNote() {
    console.log("adding");
    let note = {
    id: document.getElementById("note-id").value,// Get the note details inputted by the user
    title: document.getElementById("note-title").value,
    content: document.getElementById("note-content").value// Get the note details inputted by the user
    }
    noteList.push(note);
    console.log(noteList);
     
    // call saveNoteToServer() with note data to persist note to the server
    saveNoteToServer(note);
}




function saveNoteToServer(note) {
    // use axios to make HTTP POST request to save note to server
    console.log(typeof(note)  )
let addPromise=axios.post(todoURL,note)
addPromise
        .then(response =>{
        console.log(response.data);
        displayNotes();
    })
        .catch(error =>console.log(error))



    // the saved note should also be pushed to noteList array and displayed on the web page
}

//task-2 : display notes
function displayNotes() {
    // call fetchNotesFromServer() to fetch notes from server and display the notes
    fetchNotesFromServer();    
} 

function fetchNotesFromServer() {
     // use axios to make HTTP GET request to fetch notes from server
     let getData=axios.get(todoURL)
     getData.then(response=>{
        for(response of response.data){
            
    let containerDiv = document.getElementById('note-container');
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardName = document.createElement('h5');
    cardName.textContent = response.title;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardDesc = document.createElement('p');
    cardDesc.classList.add('card-text');
    cardDesc.textContent = response.content; 

    cardHeader.appendChild(cardName);
    cardBody.appendChild(cardDesc);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    
    containerDiv.appendChild(cardDiv);
        }
     }

     )
}
//task-3 : delete note
function deleteNote() {
    
}
 
//task-4 : toggle note view
function toggleView() {
    
}

//do not delete the code given below, it is written to make export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView,
    saveNoteToServer,
    fetchNotesFromServer
}
