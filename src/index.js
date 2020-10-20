
const URL = "http://localhost:3000"

function fetchMonster() {
    fetch("http://localhost:3000/monsters")
    .then(res => res.json())
    .then(monsters => {
        monsters.forEach(monster => {
            monsterList(monster)
        })
    })
}

function fetchParts() {
    fetch("http://localhost:3000/parts")
    .then(res => res.json())
    .then(res => {
        res.forEach(part => {
            renderPart(part)
        })
    })
}

//fetch("http://localhost:3000/parts")
//.then(res => res.json())
//.then(partsData => renderParts(partsData))

document.addEventListener("DOMContentLoaded", ()=> {
    fetchMonster()
    fetchParts()
})

function renderPart(data) {
    let partsDiv = document.querySelector("#partsList")
    
    let partImage = document.createElement("img")
    partImage.className = "img-thumbnail"
    partImage.src = data.image

    partsDiv.appendChild(partImage)    
}

function monsterList (data) {
    let monsterUL = document.querySelector("#monsterList")
    let monsterLI = document.createElement('div')
    monsterLI.className = "item"
    monsterLI.textContent = data.name
    monsterLI.style.color = 'orange'
    monsterUL.appendChild(monsterLI)
    
    // monsterLI.addEventListener('click', () => {
    //     renderMonster(data)
    // })
}

function renderMonster (data) {

    partsList = document.querySelector("#partsList")

    title = document.querySelector("#monster-name")
    monsterImageDiv = document.querySelector("#assembleMoster")
    let partsDiv = partsList.querySelectorAll("img")
    if (monsterImageDiv.firstElementChild.innerHTML == ""){
        partsDiv.forEach(part => {
            let newClone = part.cloneNode()
            monsterImageDiv.appendChild(newClone)
        })
    }
    else {
        console.log("no")
    }
    title.innerText = data.name

}