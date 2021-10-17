// 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 -  a = a + 1;
// d = b++; alert(d);           // 1 - плюсы после переменной, а не перед, по тому результат 1;
// c = (2+ ++a); alert(c);      // 5 - на момент выполнения a = 2. И того 2 + 2 + 1 = 5;
// d = (2+ b++); alert(d);      // 4 - на момент выполнения b = 2, плюсы после b. По тому 2 + 2 = 4;
// alert(a);                    // 3 - к переменной два раза применялся инкремент ++;
// alert(b);                    // 3 - к переменной два раза применялся инкремент ++.

// 2

// var a = 2;
// var x = 1 + (a *= 2); // (работает как a = a * 2), 1 + 4 = 5;


// 3
function myfunc(x, y){
    if (x >= 0 && y >= 0) {
        return x - y;
    } else if (x <= 0 && y <=0) {
        return x * y;
    } else if ((x <= 0 && y >= 0) || (y <= 0 && x >= 0)) {
        return x + y
    }
}

console.log(myfunc(2, 3));
console.log(myfunc(-2, -3));
console.log(myfunc(2, -3));

// 4

function from_x_to_15(some_les_15){
    switch (some_les_15) {
        case 0:
            console.log(0) 
        case 1:
            console.log(1)
        case 2:
            console.log(2)
        case 3:
            console.log(3)
        case 4:
            console.log(4)       
        case 5:
            console.log(5)
        case 6:
            console.log(6)
        case 7:
            console.log(7)
        case 8:
            console.log(8)
        case 9:
            console.log(9)
        case 10:
            console.log(10)
        case 11:
            console.log(11)
        case 12:
            console.log(12)       
        case 13:
            console.log(13)
        case 14:
            console.log(14)
        case 15:
            console.log(15)    
    }
}

console.log(from_x_to_15(10))

//5, 6

function sum(x, y){
    return x + y;
}

function subtraction(x, y){
    return x - y;
}

function multiplication(x, y){
    return x * y;
}

function division(x, y){
    if (y > 0) {
        return x / y;
    } else {
        console.log('you cannot divide by zero');
    }
}

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
            break;
        case 'subtraction':
            return subtraction(arg1, arg2);
            break;
        case 'multiplication':
            return multiplication(arg1, arg2);
            break;
        case 'division':
            return division(arg1, arg2);
            break;
    }
}

console.log(mathOperation(2, 3, 'sum'));
console.log(mathOperation(2, 3, 'subtraction'));
console.log(mathOperation(2, 3, 'multiplication'));
console.log(mathOperation(2, 3, 'division'));
console.log(mathOperation(2, 0, 'division'));


// 7
// результат false. Насколько понял null - тип данных, значит отсутствие объекта,
// 0 - тип данных Number, по тому  0 != null

var zero = 0;
var _null = null;

if (zero == _null) {
    console.log('true');
} else {
    console.log('false');
}

// 8

function power(val, pow, res=val){
    if (pow == 1) {
        return res;
    }
    res *= val
    return power(val, pow - 1, res)
}

console.log(power(2, 3))
