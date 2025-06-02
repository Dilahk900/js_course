
let list = [];

function add_task(){

    list.push(document.querySelector('.new-task').value);
    for(let i = 0; i < list.length; i++){
     console.log(list[i]);        
    }
    document.querySelector('.new-task').value = ``;
}

