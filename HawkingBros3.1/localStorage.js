//Написать textarea чтобы сохранялся его инпут после открытия и закрытия вкладки
let textValue = document.querySelector("textarea")
let button = document.querySelector("button")

window.addEventListener('DOMContentLoaded', function (){
    textValue.value = localStorage.textValue
    if(localStorage.length===0){
        textValue.value = ""
    }
})

textValue.addEventListener('keyup', function () {
    localStorage.setItem('textValue', textValue.value);
})
button.addEventListener('click', function () {
    localStorage.clear()
    textValue.value = " "
})