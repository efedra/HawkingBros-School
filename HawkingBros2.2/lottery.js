async function lottery() {
    console.log("Вы начали игру")
    return await new Promise(function (resolve, reject) {
            Math.random() > 0.5 ? resolve("Вы выиграли") : reject("Вы проиграли")
        }
    );
}

lottery().then((res) => console.log(res))
    .then(() => console.log("Вам заплатили"))
    .catch((e) => console.log(e))
    .finally(() => console.log("Игра закончена"))