let btn = document.getElementById("pp");
let input = document.getElementById("add");
let list = document.getElementById("list");

btn.addEventListener("click", function () {
    let val = input.value;

    if (val === "") {
        alert("Enter a task");
        return;
    }

    // create task
    let li = document.createElement("li");
    li.innerText = val;

    // create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});

