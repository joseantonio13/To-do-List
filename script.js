const button = document.querySelector(".button-add");
const input = document.querySelector(".input-task");

button.addEventListener("click", addInput);

const completeList = document.querySelector(".list")

function deletar(position) {
    myList.splice(position, 1)
    showTask();
}

function concluir(position) {
    myList[position].concluir = !myList[position].concluir

    showTask()
}

let myList = []

function addInput() {
    myList.push({
        tarefa: input.value,
        concluir: false

    });


    input.value = ''
    showTask()
}

function showTask() {

    let newItem = ""

    myList.forEach((Item, position) => {

        newItem = newItem + `
        
        <li class="task ${Item.concluir && "done"}">

        <img src="./img/checked.png" 
        alt="Check-Feito" onclick="concluir(${position})">

        <p> ${Item.tarefa}</p>

        <img src="./img/trash.png" alt="inverse-check-NãoFeito" onclick="deletar(${position})">

    </li>
    
    `
    })

    completeList.innerHTML = newItem
}




