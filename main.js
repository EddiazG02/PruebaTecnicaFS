let create = document.getElementById("create");
let clear = document.getElementById("clear");
let TaskList = document.getElementById("TaskList");
let navUp = document.getElementById("navUp");

let vacio = true;

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

   


    if (textInput.value == "") {
        let alerta = document.createElement('div');
        alerta.classList.add('alert');
        alerta.innerHTML=`
        <div class="alert alert-danger" role="alert">
         No has ingresado una tarea
        </div>
        `
        navUp.appendChild(alerta);
        //desaparecer alerta a los 5 segundos 
        setTimeout(() => {
            alerta.remove();
        }, 1500);
    } else {
        let cardTask = document.createElement('div');
        cardTask.classList.add('TaskList');
        cardTask.innerHTML = `
        <div class="card text-bg-info mb-3 $cyan-100" style="max-width: 20rem;">
        <div class="card-body">
            <p class="card-text">${inValue}</p>
        </div>
        `;
        TaskList.appendChild(cardTask);
        textInput.value = "";  
        
    }


});
   


