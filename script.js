'use strict';
//об'єкт з продуктами
const productsData = {
    electronics: [
        {name: "Холодильник", description: "SAMSUNG"},
        {name: "Пральна машина", description: "Bosch"}
    ],

    clothing: [
        {name: "Джинси", description: "Next"},
        {name: "Футболка", description: "GAP"}
    ],

    books: [
        {name: "Наукова-фантастика", description: "Дюна"},
        {name: "Дитяча книга", description: "Гаррі Поттер і смертельні реліквії"}
    ]
};
//Функція для відображення продуктів відповідно до обраної категорії
function showProduct(category){
    const productList = document.getElementById("productList");
    productList.innerHTML = '';//Очищення списку товарів

    let productHTML = '';//Зміна для збереження списку товарів
    //Додавання кожного продукту до списку
    productsData[category].forEach(product => {
        productHTML += `<li><a href="#" class="productLink" data-name="${product.name}" data-description="${product.description}">${product.name}</a></li>`;
    });

    productList.innerHTML = productHTML;//Відображення списку товарів в HTML
    //Отримання посилань на товар
    const productLinks = document.querySelectorAll('.productLink');
    productLinks.forEach(link => {
        link.addEventListener('click', function(){
            showProductInfo(this.dataset.name, this.dataset.description)//Виклик функції для відображення інформації про товар
        });
    });
}
//Функція для відображення інформації про обраний продукт
function showProductInfo(name, description){
    document.getElementById("productName").innerHTML = name;
    document.getElementById("productDescription").innerHTML = description;
}
//Функція для показу форми замовлення 
function showOrderForm(){
    document.getElementById("orderForm").style.display = "block";
}
//Функція обробки форми замовлення
function submitOrder(){
    const fullName = document.getElementById("fullName").value;
    const city = document.getElementById("city").value;
    const delivery = document.getElementById("delivery").value;
    const payMethod = document.getElementById("payMethod").value;
    const count = document.getElementById("count").value;
    const comment = document.getElementById("comment").value;
    //Перевірка на заповненість полів
    if(fullName && city && delivery && payMethod && count && comment){
        //Інформація з деталями замовлення
        const orderDetails = `<b>Ім'я</b>: ${fullName}<br> 
        <b>Місто:</b> ${city}<br> 
        <b>Склад Нової пошти:</b> ${delivery}<br> 
        <b>Метод оплати:</b> ${payMethod}<br> 
        <b>Кількість:</b> ${count}<br> 
        <b>Коментар:</b> ${comment}`;
        document.getElementById("orderDetails").innerHTML = orderDetails;
        document.getElementById("confirmOrder").style.display = "block";
        document.getElementById("orderForm").style.display = "none";
    }else{
        alert("Будь ласка, заповніть всі обов'язкові поля!")//Інакше інформація про обов'язкове заповнення всіх полей у формі
    }
}