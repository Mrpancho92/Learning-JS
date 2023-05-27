/* function f() {
    let value = Math.random();
  
    return function() { alert(value); };
  }
  
  // три функции в массиве, каждая из них ссылается на лексическое окружение
  // из соответствующего вызова f()
  let arr = [f(), f(), f()];
  console.log(arr); */

  function Counter() {   debugger 
    let count = 0;         
  
    this.up = function() {    
      return ++count;      
    };            
  
    this.down = function() {   
      return --count;     
    };
  }
  
  let counter = new Counter();  
  
  console.log( counter.up() ); /* 1  0 */  
  console.log( counter.up() ); /*  2   1 */   
  console.log( counter.down() ); /*  1   2 */  


  

  /* •	Какое будет выведено значение:  */ 
let x = 5; 
console.log( x++ );   // Ответ x = 5

 /*  •	Чему равно такое выражение: */ 
console.log([] + false - null + true); // Ответ: NaN 
  
  /* •	Что выведет этот код: */ 
let y = 1; 
let x = y = 2; 
console.log(x);  // Ответ x=2
  
 /*  •	Чему равна сумма */ 
console.log([] + 1 + 2); //Ответ 12
  
 /*  •	Что выведет этот код: */ 
console.log( "1" [0] ); //Ответ 1
  
 /*  •	Чему равно */ 
console.log(2 && 1 && null && 0 && undefined);  // Ответ null  И запинается на лжи
  
 /*  •	Есть ли разница между выражениями? */ 
 const a=2;
 const b=1;
console.log(!!( a && b));  //Ответ есть falser и number
console.log( a && b );

  
/*   •	Что выведет этот код: */ 
console.log((null || 2 && 3 || 4 )); //Ответ 3  ИЛИ запинается на правде
  
/* Правда ли что */
a = [1, 2, 3];
b = [1, 2, 3]; 
console.log(a==b);
  
/*   •	Что выведет этот код: */ 
console.log( typeof(+"Infinity") );  //Ответ infinity
  
/*   •	Верно ли сравнение: */ 
console.log("Ёжик" > "Яблоко");
  
 /*  •	Чему равно */ 
0 || "" || 2 || undefined || true || falsе 
   