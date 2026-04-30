let carsList = document.getElementById("carsList")

let addToList = function () {
    e.preventDefault()
    let yearValue = document.getElementById('year').value;
    let makeValue = document.getElementById('make').value;
    let modelValue = document.getElementById('model').value;
    let listItem = document.createElement("li")
    listItem.textContent = `${yearValue}, ${makeValue} ${modelValue}`
    carsList.appendChild(listItem);
}

let addToList = (e) => {
    e.preventDefault()
    let yearValue = document.getElementById('year').value;
    let makeValue = document.getElementById('make').value;
    let modelValue = document.getElementById('model').value;
    let listItem = document.createElement("li")
    listItem.textContent = `${yearValue}, ${makeValue} ${modelValue}`
    carsList.appendChild(listItem);
}

carsForm.addEventListener('submit', addToList)

function addToList(e) {
    e.preventDefault()
    let yearValue = document.getElementById('year').value;
    let makeValue = document.getElementById('make').value;
    let modelValue = document.getElementById('model').value;
    let listItem = document.createElement("li")
    listItem.textContent = `${yearValue}, ${makeValue} ${modelValue}`
    carsList.appendChild(listItem);
}