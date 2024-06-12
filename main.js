let create = document.getElementById("create");
let clear = document.getElementById("clear");
let TaskList = document.getElementById("TaskList");
let navUp = document.getElementById("navUp");
let taskListContainer = document.querySelector("task-list-container");


let vacio = true;


let textTitle = document.getElementById("textTitle");
textTitle.addEventListener("keyup", e=>{
    let onValue = e.target.scrollHeight;
    textarea.style.height="auto";
    textarea.style.height = `${onValue}px`;
});

let textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e=>{
    let inValue = e.target.scrollHeight;
    textarea.style.height="auto";
    textarea.style.height = `${inValue}px`;
});


clear.addEventListener("click", function (event) {
    event.preventDefault();
    textTitle.value = "";
    textInput.value = "";
    textarea.style.height="auto";
});

create.addEventListener("click", function (event){
    event.preventDefault();
    onValue = textTitle.value;
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
        //desaparecer alerta a los 1.5 segundos 
        setTimeout(() => {
            alerta.remove();
        }, 1500);
    } else {

       let tarea = JSON.parse(localStorage.getItem("tarea")) || [];

        let newTask = {
            titulo: onValue,
            descripcion: inValue
        };

        tarea.push(newTask);

        localStorage.setItem("tarea", JSON.stringify(tarea));
        
        TaskList.innerHTML = '';

        tarea.forEach(tarea => {
            let cardTask = document.createElement('div');
            cardTask.classList.add('TaskList');
            cardTask.innerHTML = `
            <div class="card text-bg-light mb-3" style="width: 15rem; height: 16rem;">
            <div class="card-body">
                <h3>${tarea.titulo}</h3>
                <p class="card-text">${tarea.descripcion}</p>
            </div>
            </div>
            `;
            TaskList.appendChild(cardTask);
            textTitle.value = "";
            textInput.value = "";
        });
        
            
            
        
    }

});
window.onload = function() {
    agregarTarea();
};
