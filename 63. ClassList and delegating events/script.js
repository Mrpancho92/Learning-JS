
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');  // - прозволяет определять начиние класса если есть то true если нет то false
// }


btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');   // - в сложных скриптах такое поведение когда мы просто задем один toggle не всегда доступно иногда нам нужно именно вручную проверить
});

console.log(btns[0].className);   // - старое свойство уже не используется



wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    // if (event.target && event.target.tagName == "BUTTON") { или через matches
        if (event.target && event.target.matches("button.red")) {
        console.log('hello'); 
    }

    // if (event.target && event.target.classList.contains('blue')) {
    //          console.log('hello');
    // }
});
const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn);   // - позволит нам btn поместить в обертку wrapper 



