let create = document.getElementById("create");
let clear = document.getElementById("clear");
let TaskList = document.getElementById("TaskList");



let textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e=>{
    let inValue = e.target.scrollHeight;
    textarea.style.height="auto";
    textarea.style.height = `${inValue}px`;
});


clear.addEventListener("click", function (event) {
    event.preventDefault();
    textInput.value = "";
    textarea.style.height="auto";
});

create.addEventListener("click", function (event){
    event.preventDefault();
    inValue = textInput.value;
    

let cardTask = document.createElement('div');
cardTask.classList.add('TaskList');
cardTask.innerHTML = `
<div class="card text-bg-info mb-3 $cyan-100" style="max-width: 20rem;">
<div class="card-body">
  <p class="card-text">${inValue}</p>
</div>
`;
    TaskList.appendChild(cardTask);
});
   


