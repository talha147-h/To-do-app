function addTask(){

    let inp=document.getElementById("taskInput");
    let txt=inp.value.trim();

    if(txt=="") return;

    let li=document.createElement("li");

    li.innerHTML=
    `
    <span>${txt}</span>
    <button class="del">X</button>
    `;

    li.querySelector(".del").onclick=function(){
        li.remove();
    };

    document.getElementById("todoList").appendChild(li);

    inp.value="";
}
