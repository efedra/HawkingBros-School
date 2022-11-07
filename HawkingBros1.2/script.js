//Удалить из массива дубликаты
let arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]
let set = [...new Set(arr)]
console.log(`1) ${set}`)
//Объединить 2 объекта в один
let obj1 = {
    id: 1,
    name: 'userName'
}

let obj2 = {
    id: 1,
    name: 'qwerty'
}
let objUnion = {...obj1, ...obj2}
console.log(`2) ${objUnion.id}, ${objUnion.name}`)
//Сократите объявление функции в одну строку с помощью ES6
let add = function (x, y) {
    return x + y
}
let addShort = (x, y) => x + y
console.log(`3) ${addShort(4, 5)}`)

//Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой

let sleep = (ms) =>  new Promise((resolve) => {
    setTimeout(()=>resolve(ms),ms);

})

//пример использования
sleep(5000).then((value)=>{
    console.log(`4) Выполнилось через ${value / 1000} секунд`)
})