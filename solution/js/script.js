let noteList = [];
let view = "grid"; //default view is grid-view

//task-1 : define function saveNote() to add note
function saveNote(event) {
    event.preventDefault();
    console.log("adding");
    let note = {
    id: document.getElementById("note-id").value,// Get the note details inputted by the user
    title: document.getElementById("note-title").value,
    content: document.getElementById("note-content").value// Get the note details inputted by the user
    }
    noteList.push(note);
    console.log(noteList);
    createNewCard(note);
    clearFields();  
}


   function clearFields(){
    document.getElementById("note-id").value = "";
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
   }
   function createNewCard(note) {
    let containerDiv = document.getElementById('note-container');
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardName = document.createElement('h5');
    cardName.textContent = note.title;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardDesc = document.createElement('p');
    cardDesc.classList.add('card-text');
    cardDesc.textContent = note.content; 

    cardHeader.appendChild(cardName);
    cardBody.appendChild(cardDesc);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    
    containerDiv.appendChild(cardDiv);
}



//task-2 : define function displayNotes() to display all notes

function displayNotes() {
    let containerDiv = document.getElementById('note-container');
    containerDiv.innerHTML = '';
    noteList.forEach(note => {
        createNewCard(note);
    })
}

// displayNotes();
 
// //task-3 : delete note - This task is Optional
 function deleteNote(index) {

 }
 
// //task-4 : toggle note view - This task is Optional
 function toggleView() {

 }

// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView
}
