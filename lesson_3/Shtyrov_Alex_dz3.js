// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

var basket = {cake: 100, bread: 50, socks: 75}

function total_prise(some_obj){
    let total_prise = 0;
    for (let key in some_obj) {
        total_prise += some_obj[key]
    }
    return total_prise;
}

console.log(total_prise(basket))

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basket = [['cake', 100], ['bread', 50], ['socks', 75]]

function countBasketPrice(some_arry){
    let total_prise = 0;
    for(let el of some_arry ){
        total_prise += el[1];
    }
    return total_prise;
}

console.log(countBasketPrice(basket))

function countBasketPrice_2(some_arry){
    let sum = some_arry.reduce((acc, el) => {
        return acc + el[1];
    }, 0)
    return sum;
}

console.log(countBasketPrice_2(basket))


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for(let i = 0; i < 10; console.log(i++)){
}

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

var str = 'x';
for(let i = 1; i <= 20; i++){
    console.log(str)
    str += 'x'
}
