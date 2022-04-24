
console.log("hello");
const getClass = document.querySelector(".jackets");
const productsUrl = "https://mywebsite.no/wp-json/wc/store/products"; 

async function getProducts () {
    try {
        const response = await fetch (productsUrl); 
        const results = await response.json();
        console.log(results);
        
        addProducts (results);
    } catch (error) {

    }
    

}

function addProducts (results){
    for(let i = 0; i < results.length; i++) {
        console.log(results[i].id);
        getClass.innerHTML += ` 
                                <div class="jackets-rain">
                                 <a href="buy.html?id=${results[i].id}"> </a>
                                 <img class="jack" src= "${results[i].images[0].src}" />
                                 <h3>${results[i].short_description}</h3>
                                    <a class="himalaya-jacket" href="buy.html?id=${results[i].id}">${results[i].name}</a>
                                    <p class="regular-price">${results[i].prices.currency_symbol} ${results[i].prices.regular_price}</p>
                                    <p class="sale-price">${results[i].prices.currency_symbol} ${results[i].prices.sale_price}</p>
                                    <a class="buy" href="buy.html?id=${results[i].id}">buy now</a>
                                </div>`;
    }
}

getProducts (); 

