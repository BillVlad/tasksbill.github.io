// 2021 DS: BillVLad#4499

// Текст выводим в елемент .out
document.querySelector('.inp').addEventListener('input', function () {
    // Берём вывод и присваиваем текст из this (то есть нашего элемента, у которого мы и слушаем событие)
    document.querySelector('.out').innerHTML = this.value;
});
//

// Создаём картинку по клику по input
document.querySelector('.imgInp').addEventListener('click', function () {
    // Создаём элемент
    const img = document.createElement('img');
    // В аттрибуте alt у .imgInp прописана картинка, мы эту картинку "запихиваем" в src (источник)
    img.src = this.alt;
    // Задаём размеры (выходит мыло, мне пох)
    img.width = 60; img.height = 60;
    // Размещаем элемент посредством append в .outImg
    document.querySelector('.outImg').append(img);
    // Просто говорит, что это выполнено
    console.log(true);
});
//

// Логин и пароль

// Берём форму (чтобы не писать document.querySelector тыщу раз), при этом в HTML должна быть форма, в которой будут input'ы 
const coll = document.forms.login;

document.querySelector('#sub').addEventListener('click', function () {
    // Здесь мы выводим в консоль Login и Password со стилями CSS
    console.log(`%cLogin: ${coll.elements.login.value}`, `font-size: 20px; color: blue; font-weight: bold;`);
    console.log(`%cPassword: ${coll.elements.pass.value}`, `font-size: 20px; color: red;`);
    // Выводим на страницу данные (это для наглядности, так оно не нужно)
});
//

// Работа this в разных элементах
const lab = document.forms.lab;

//Мы двум элементам выдаём одну и ту же функцию
lab.elements.label1.addEventListener('input', textOut);

lab.elements.label2.addEventListener('input', textOut);

lab.elements.label3.addEventListener('input', textOut);

lab.elements.label4.addEventListener('input', textOut);


// Сама функция не имеет определённых данных и мы из контекста берём значение полей.
function textOut(event) {
    document.querySelector('.outText').innerHTML = this.value;
};
// Если создать ещё один input с этой функцией, то он будет делать аналогичное. Не важно, будет это type="text" или type="date"
// Исключением будет type="checkbox" и type="radio"

//

// Аналогична предыдущему, но мы имеем дело с кнопками
document.querySelector('.r').addEventListener('click', butOut);
document.querySelector('.a').addEventListener('click', butOut);

function butOut(event) {
    document.querySelector('.outBut').innerHTML += this.value + `<br />`;
}
//

// Range

// Берём "ползунок" и выводим его значение

//querySelector использует синтаксис CSS и если это будет id в HTML - используем "#"
document.querySelector('#rageShadowLegends').addEventListener('input', function () {
    document.querySelector('.rangeOut').innerHTML = this.value + '%';
})
//

// Date

// Аналогично предыдущим строкам
document.querySelector('#su').addEventListener('click', function () {
    let date = document.querySelector('#da-1');
    document.querySelector('.outDate').innerHTML = date.value;
});
//