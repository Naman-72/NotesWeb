let addNote = document.getElementById("addNote");
addNote.addEventListener("click", function (e) {
    let addTxt = document.getElementById("TextArea1");
    let notes = localStorage.getItem("notes");
    //  notes -> string , notesObj -> Arry
    // MAYBE IT WAS POSSIBLE THAT THIS notes WAS ALREADY THERE SO WE FIRST CHECK BY BRINGING IT
    if (notes == null) {
        notesObj = [];
    } else {
        // it means u are extracting what u stored
    notesObj = JSON.parse(notes);
    //JSON USE TO TRANSFER DATA IN FORM OF STRING
    // the string we get we can  CHANGE BACK TO ARRAY BY PARSE
}
notesObj.push(addTxt.value);
localStorage.setItem("notes", JSON.stringify(notesObj));
addTxt.value = "";
showNotes();
let SearchArea = document.getElementById("SearchText");
SearchArea.value="";
});
showNotes = () => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html =
        html +
        `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title text-primary" style="font-family :Georgia, 'Times New Roman', Times, serif;">Note ${index + 1} </h5>
        <p class="card-text" style="font-family :Georgia, 'Times New Roman', Times, serif;">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">DELETE</button>
        </div>
        </div>`;
    });
    let notesElement = document.getElementById("notes");
    if (notes != null) {
        notesElement.innerHTML = html;
    }
};
showNotes();
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let SearchArea = document.getElementById("SearchText");
let btn = document.getElementById('ButtonSearch')
btn.addEventListener("click",function(){
    let inputValue = SearchArea.value;
    if(inputValue!=null)
    {
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        let t1 = cardText.toLowerCase();
        let t2 = inputValue.toLowerCase();
        if(t1.includes(t2))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display="none";
        }
    }
    );
    }
})
SearchArea.addEventListener("input",function(){
    let inputValue = SearchArea.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        let t1 = cardText.toLowerCase();
        let t2 = inputValue.toLowerCase();
        if(t1.includes(t2))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display="none";
        }
    }
    );
});

let deleteButton = document.getElementById('DeleteAll');
deleteButton.addEventListener("click",function(){
    alert("YOU HAVE CLEARED ALL NOTES");
    localStorage.clear();
    document.getElementById("notes").innerHTML=`<p style="font-family :Georgia, 'Times New Roman', Times, serif;">NO CURRENT NOTES</p>`;
})

// console.log(cardText);
// console.log(inputValue);
// console.log(cardText.includes(inputValue));
// console.log("I AM DELETING THIS ",index);
// console.log(notesObj);
// console.log("WELCOME TO APP.JS");

//ADDING CLOCK FEATURE
let time ;
let todayDate;
setInterval(() => {  
    a = new Date();
    hr = a.getHours();
    min = a.getMinutes();
    sec = a.getSeconds();  
    time = hr + ' : ' + min + ' : ' +sec;
    document.getElementById('time').innerHTML= `<span style="font-family: Georgia, 'Times New Roman', Times, serif;">Local Time</span> : ${a.toLocaleTimeString()}`;
}, 100);