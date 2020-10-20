
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
    partImage.src = data.image
    partImage.className = data.part_type
    //console.log(data)

    partsDiv.appendChild(partImage)    
}
// The monsters Data gets passed through a forEach so
// Data is one monster Obj
function monsterList (data) {
    let monsterUL = document.querySelector("#monsterList")
    let monsterLI = document.createElement('li')
    monsterLI.textContent = data.name
    monsterUL.appendChild(monsterLI)
    
    monsterLI.addEventListener('click', () => {
        renderMonster(data)
    })
}

function renderMonster (data) {
    
    title = document.querySelector("#monster-name")
    title.innerText = data.name

    let head = document.querySelector("#head-div")
    let chest = document.querySelector("#chest-div")
    let legs = document.querySelector("#legs-div")
    let left_arm = document.querySelector("#leftArm-div")
    let right_arm = document.querySelector("#rightArm-div")


    data.parts.forEach(part => {
        if (part.part_type == "chest"){
            chest.innerHTML = `<img src=${part.image}>`
        } else if (part.part_type == "legs") {
            legs.innerHTML = `<img src=${part.image}>`
        }else if (part.part_type == "head") {
            head.innerHTML = `<img src=${part.image}>`
        }else if (part.part_type == "Larm") {
            left_arm.innerHTML = `<img src=${part.image}>`
        }else if (part.part_type == "Rarm") {
            right_arm.innerHTML = `<img src=${part.image}>`
        }else {
            console.log("error")
        }

    })



    // monsterImageDiv = document.querySelector("#assembleMoster")
    // let partsDiv = partsList.querySelectorAll("img")
    // partsDiv.forEach(part => {
    //     let newClone = part.cloneNode()
    //     monsterImageDiv.appendChild(newClone)
    // })
    // console.log("no")

}