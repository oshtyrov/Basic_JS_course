var catalog = [
    ['Cake', 100],
    ['Bread', 50],
    ['Socks', 75]
];


var basket = {
    products: {},
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

function create_catalog (arr_catalog) {
    for (let i = 0; i < arr_catalog.length; i++) {
        var div = document.createElement("div");
        div.className = "card_style" + i;
        div.id = "card_style" + i;
        div.innerHTML = '<h4 class="h4class">' + arr_catalog[i] + 'RUR</h4>';
        div.style="width: 359px; line-height: 30px; letter-spacing: 0.05em; color: #1F3F68; height: 150px; margin-bottom: 14px padding: 44px 32px; box-sizing: border-box; background: #FFFFFF; box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2); border-radius: 10px; display: flex; flex-direction: column; align-self: center; margin-bottom: 51.38px;";
        card__box.appendChild(div);
        var bottomn = document.createElement("div");
        bottomn.className = "bottomn" + i;
        bottomn.id = "bottomn" + i;
        bottomn.innerHTML = "Купить"
        bottomn.style="font-size: 16px; line-height: 26px; text-align: center; letter-spacing: 0.04em; color: #FFFFFF; text-decoration: none; background: #5A98D0; padding: 15px 80px;"
        if (i == 0) {
            card_style0.appendChild(bottomn);
        }
        if (i == 1) {
            card_style1.appendChild(bottomn);
        }
        if (i == 2) {
            card_style2.appendChild(bottomn);
        }
    }
}

create_catalog(catalog);

if (basket.prod_in_basket == 0) {
    var a = 'Корзина пуста';
}
else {
    basket.get_prod_in_basket();
    basket.get_total_prise();
    var a = 'В корзине: ' + basket.prod_in_basket + ' товаров на сумму ' + basket.total_prise + ' рублей.';
}

var content_basket = document.getElementById("top__box");
content_basket.innerHTML = a;

const bottomn_0 = document.getElementById('bottomn0');
const bottomn_1 = document.getElementById('bottomn1');
const bottomn_2 = document.getElementById('bottomn2');



function click_but0_handler() {
    basket.products[catalog[0][0]] = catalog[0][1];
    basket.prod_in_basket += 1;
    basket.get_total_prise();
    var a = 'В корзине: ' + basket.prod_in_basket + ' товаров на сумму ' + basket.total_prise + ' рублей.';
    var content_basket = document.getElementById("top__box");
    content_basket.innerHTML = a;
}

function click_but1_handler() {
    basket.products[catalog[1][0]] = catalog[1][1];
    basket.prod_in_basket += 1;
    basket.get_total_prise();
    var a = 'В корзине: ' + basket.prod_in_basket + ' товаров на сумму ' + basket.total_prise + ' рублей.';
    var content_basket = document.getElementById("top__box");
    content_basket.innerHTML = a;
}

function click_but2_handler() {
    basket.products[catalog[2][0]] = catalog[2][1];
    basket.prod_in_basket += 1;
    basket.get_total_prise();
    var a = 'В корзине: ' + basket.prod_in_basket + ' товаров на сумму ' + basket.total_prise + ' рублей.';
    var content_basket = document.getElementById("top__box");
    content_basket.innerHTML = a;
}


bottomn_0.onclick = click_but0_handler
bottomn_1.onclick = click_but1_handler
bottomn_2.onclick = click_but2_handler