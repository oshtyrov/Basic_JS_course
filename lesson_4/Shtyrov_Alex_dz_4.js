// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// решил сделать не через %

var input = 245;

function obj_num_converter (num){
    var obj_number = {
        'еденицы': 0,
        'десятки': 0,
        'сотни': 0
    };
    if (num <= 9) {
        obj_number.еденицы = num;
        return obj_number;
    }
    if (num <= 99) {
        obj_number.десятки = Number(String(num)[0]);
        obj_number.еденицы = Number(String(num)[1]);
        return obj_number;
    }
    if (num <= 999) {
        obj_number.сотни = Number(String(num)[0]);
        obj_number.десятки = Number(String(num)[1]);
        obj_number.еденицы = Number(String(num)[2]);
        return obj_number;
    }
    else {
        console.log('Число превышает 999.')
        return obj_number = {};
    }
}

console.log(obj_num_converter(input))



// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


var basket = {
    products: {
        cake: 100,
        bread: 50,
        socks: 75
    },
    total_prise: 0,
    get_total_prise: function(){
        for (let key in this.products) {
            this.total_prise += this.products[key]
        }
    }
};


basket.get_total_prise();
console.log(basket.total_prise);


// 3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

var product = {
    name: 'ball',
    retail_prise: 50,
    wholesale_prise: null,
    color: 'green',
    in_stock: 120,
    need_to_buy: null,
    get_discount: function() {
        if (this.need_to_buy > this.in_stock) {
            console.log('На складе недостаточно товара.')
        }
        else {
            if (this.need_to_buy >= 100) {
                this.wholesale_prise = (this.retail_prise * this.need_to_buy) -
                ((this.retail_prise * this.need_to_buy) / 15);
            }
            if (this.need_to_buy >= 50) {
                this.wholesale_prise = (this.retail_prise * this.need_to_buy) -
                ((this.retail_prise * this.need_to_buy) / 12);
            }
            if (this.need_to_buy >= 20) {
                this.wholesale_prise = (this.retail_prise * this.need_to_buy) -
                ((this.retail_prise * this.need_to_buy) / 10);
            }
            if (this.need_to_buy < 20) {
                this.wholesale_prise = (this.retail_prise * this.need_to_buy);
            }
        }
    },
    add_to_stock: function(num_prod) {
        this.in_stock += num_prod
    }
}

console.log(product.in_stock)
product.add_to_stock(10)
console.log(product.in_stock)
product.need_to_buy = 25;
product.get_discount();
console.log(product.wholesale_prise)