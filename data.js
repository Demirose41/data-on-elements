window.addEventListener("DOMContentLoaded", () => {

    
    const add_button = document.getElementById("add")
    const list = document.getElementById("shopping-list")

    add_button.addEventListener("click", event => {
        const type = document.getElementById("type")
        const name = document.getElementById("name")
        const newLi =  document.createElement("li");
        newLi.setAttribute("data-type", type.value);
        newLi.innerText = name.value;
        list.appendChild(newLi);
        event.preventDefault();
    })

})