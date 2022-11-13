let input = document.querySelector('.input-name')
const loadBtn = document.querySelector(".js-load");
const responseContainer = document.querySelector(".response-container");

loadBtn.addEventListener('click', function (event) {
    event.preventDefault();
    try {
        if (Number(input.value)) {
            if(input.value<5){
                throw 'Число меньше 5 =('
            }
            if (input.value>10){
                throw 'Число больше 10 =('
            }
            responseContainer.innerHTML =
                '<p>Содержимое инпута верное</p>'
        } else {
            throw 'Содержимое текста не является числом'
        }
    } catch (e) {
        responseContainer.innerHTML =
            `<p>${e}</p>`
    }
})