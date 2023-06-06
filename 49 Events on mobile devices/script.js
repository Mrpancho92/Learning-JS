// touchstart  - событие при возникновнии касания пальцем.

// touchmove - если палец при касании к элементу начинает двигаться по нему то при каждом смещении будет срабатывать.

// touchend - как только палец оторвался от элемента соотв touchand выполнилось.

// touchenter - оно будет срабатывать, когда вот мы ведем пальцем по экрану и при этом наскакиваем наскальзываем на какой то элемент на который повешено это событие.

// touchleave - когда наш палец продолжил скользить и ушел за пределы этого элемента.

// touchcancel - оно возникает тогда, когда точка соприкосновения больше не регистрируетс я на поверхности.

// touches - выдает список всех пальцев которые взаимодействуют с экраном.
// targetTouches - если интересуют все пальцы которые взаимодействуют с этим элементом конкретно.
// changedTouches - список пальцев которые участвуют в текущем событии. Пальцы которые совершили определенное назначенное действие.

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });


    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });

    // box.addEventListener('touchenter', (e) => {
    //     e.preventDefault();
    //     console.log('Enter');
    // }); 

});

