let key = document.getElementById("key")
let body = document.querySelector("body")
const addElement = (color) => {
    let div = document.createElement("div")
    console.log(div)
    div.style.backgroundColor = color
    div.style.width = "200px"
    div.style.height = "200px"
    body.appendChild(div)
}

document.addEventListener('keydown', function (event) {
    console.log(event)
    if (event.key === 'a') {
        key.style.backgroundColor = "pink"

    } else if (event.key === 's') {

        key.style.backgroundColor = "orange"
    } else if (event.key === 'd') {
        key.style.backgroundColor = "skyBlue"

    } else if (event.key === 'q') {

        addElement("purple")
    } else if (event.key === 'w') {
        addElement("gray")
    } else if (event.key === 'e') {
        addElement("brown")
    }
})