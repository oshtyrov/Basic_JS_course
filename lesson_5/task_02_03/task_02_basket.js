var basket = {
    products: {
        cake: 100,
        bread: 50,
        socks: 75
    },
    prod_in_basket: 0,
    get_prod_in_basket: function() {
        this.prod_in_basket = Object.keys(this.products).length
    },
    total_prise: 0,
    get_total_prise: function(){
        for (let key in this.products) {
            this.total_prise += this.products[key]
        }
    }
};

basket.get_prod_in_basket();
Window.onload = basket.get_prod_in_basket;
basket.get_total_prise();
Window.onload = basket.get_total_prise;

if (basket.prod_in_basket == 0) {
    var a = 'Корзина пуста';
}
else {
    var a = 'В корзине: ' + basket.prod_in_basket + ' товаров на сумму ' + basket.total_prise + ' рублей.';
}
var b = ' Товары в корзине: ' + JSON.stringify(basket.products) + '.';

var content_basket = document.getElementById("basket");
content_basket.innerHTML = a;
var content_catalog = document.getElementById("catalog");
content_catalog.innerHTML = b;
