const btn = document.querySelector('.btn'),
      wrap = document.querySelector('.wrapper'),
      box = document.querySelector('.box');


   /*  let start = Date.now(); // запомнить время начала

    let timer = setInterval(function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
    
      if (timePassed >= 2000) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
      }
    
      // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    //   draw(timePassed);
    
    }, 20); */
    
    // в то время как timePassed идёт от 0 до 2000
    // left изменяет значение от 0px до 400px
  /*   function draw(timePassed) {
      btn.style.left = timePassed / 5 + 'px';
    } */

btn.onclick = () => {
    alert('dsfv');
}