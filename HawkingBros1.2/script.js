//Удалить из массива дубликаты
let arr = [1,2,3,5,1,6,2,5,6,7]
//Объединить 2 объекта в один
let obj1 = {
    id:1,
    name:'userName'
}

let obj2 = {
    id:1,
    name:'qwerty'
}

//Сократите объявление функции в одну строку с помощью ES6
let add = function (x,y){
    return x+y
}

//Напишите функцию, с помощью которой можно будет выполнять различные действия с зажержкой

let sleep = ms => {}

//пример использования
sleep(5000)(()=>{
    console.log('Выполнилось через ')
})