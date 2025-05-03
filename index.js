const todoListInput = document.getElementById("todo-input");
const todoListButton = document.getElementById("add-btn");
const todoListUl = document.getElementsByClassName("todo_list")[0];

let cpt = 0;

todoListButton.addEventListener("click", function () {

const li = document.createElement("li")
li.id = "li-"+cpt; 

const p = document.createElement("p")
p.innerText = todoListInput.value;

const checkBox = document.createElement('input')
checkBox.type = 'checkbox'
checkBox.id = 'checkbox-'+cpt

li.appendChild(p)
li.appendChild(checkBox)

checkBox.addEventListener('change',function(){
    console.log(checkBox.id,' is checked ? ',checkBox.checked)
    if (checkBox.checked) {
            li.className = li.className + "checked";
          } else {
            li.className = li.className.replace("checked", " ");
          }
})

cpt ++;
todoListUl.appendChild(li)
});

// const checkBox = document.getElementById("checkbox");
// const firstLi = document.getElementById("li-0");

// checkBox.addEventListener("change", function () {
//   if (checkBox.checked) {
//     firstLi.className = firstLi.className + "checked";
//   } else {
//     firstLi.className = firstLi.className.replace("checked", " ");
//   }
// });
