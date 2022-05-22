// ВЫВЕСТИ КАРТОЧКУ ПОЛЬЗОВАТЕЛЯ С ИМЕНЕМ ДОЛЖНОСТЬЮ ПОЧТОЙ И НОМЕРОМ ТЕЛЕФОНА
const cards = document.getElementById("userCards")
const users = userData.users



placeUserCards(users,cards)
function placeUserCards(users,cards) {
    const insertCards = createHTMLstring(users,userCardTemplate)
    renderElement(insertCards,cards)
}

function createHTMLstring(someArray,template){
    const arrayString = someArray.map((e)=>template(e))
    const correctHTMLstring = arrayString.join('')
    return correctHTMLstring      
}
function userCardTemplate(user){
    const template = `<div class="card common-text">
    <img src="${user.photo}" alt="${user.name}">
    <h3>${user.name}</h3>
    <div class="card-text">
        <p>${user.position}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>
    </div>
</div>`
    return template;
}


function renderElement (e,div,where){
    if(where){
        div.insertAdjacentHTML(where,div,e) = e
    } else{
        div.innerHTML = e
    }
}

const submitUser = document.getElementById("submitUser")
const sentBlock = document.getElementById("formSent")
const formBlock = document.getElementById("newPerson")

submitUser.addEventListener("click", e =>{
     e.preventDefault()
     const newUser = {
         name: formBlock.name.value,
         email: formBlock.email.value,
         phone: formBlock.phone.value,
         position: formBlock.position.value
     }
     const newUserTemplate = userCardTemplate(newUser)
     const applyNewUser = renderElement(newUserTemplate,cards,"afterBegin")
     formBlock.classList.add("form-disabled")
     sentBlock.classList.add("form-sent-active")
     
})






