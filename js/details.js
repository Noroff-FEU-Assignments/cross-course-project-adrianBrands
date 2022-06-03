const jackets1 = document.querySelector(".jackets1"); 
const details = document.querySelector(".details"); 
const abouProduct = document.querySelector(".about-product"); 
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const detailsUrl = "https://mywebsite.no/wp-json/wc/store/products/" + id;
console.log(detailsUrl);


async function getDetails() {
    try {
      const response = await fetch(detailsUrl);
      const results = await response.json();
      console.log(results);
  
      
      createDetails (results);

  
      
    } catch (error) {
      console.log(error);
    }
  }

  function createDetails (results) {
      jackets1.innerHTML +=`<img src= "${results.images[0].src}" /> `;
      details.innerHTML += `<h2>${results.name}</h2>
                            <h1>${results.short_description}</h1>
                            <p class="regular-price">before: ${results.prices.currency_symbol} ${results.prices.regular_price} </p>
                            <p>Sale: ${results.prices.currency_symbol} ${results.prices.sale_price}</p>
                            <h3>select a size:</h3>
                            <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                                <li>XXL</li>
                            </ul>`;
abouProduct.innerHTML = `${results.description}`;
                            
      
  }



  getDetails()