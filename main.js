let create = document.getElementById("create");
let clear = document.getElementById("clear");



const textarea = document.querySelector("textarea");
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
    
    console.log(inValue);
});
   


