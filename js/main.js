let disply = document.getElementById('product-display');
let input = document.querySelector('.form-control');
const apilink = 'https://fakestoreapi.com/products';

input.addEventListener('keyup',() => {
   
})

let productData = function(){
    let output = '';
    fetch(apilink)
    .then(collet => collet.json() )
    .then (finalval => {
        finalval.forEach(prod => {
            //  JSX TO PUT HTML INSIDE JAVASCRIPT
            output += `
                
                
            <div class="col-md-3">
            <div class="card">
              <img src="${prod.image}" class="card-img-top image-fluid img-product" alt="...">
              <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">Price: $${prod.price}</p>
                <p class="card-text">Rating: ${prod.rating.rate}</p>
                <p class="card-text">Stock: ${prod.rating.count}</p>
              </div>
              <div class="card-footer">
                  <div class="d-grid">
                      <a href="" class="btn btn-secondary">View Product</a>
                  </div>
              </div>
            </div>
          </div>
                  
            `
        });

        disply.innerHTML = output;
    })
}


productData();