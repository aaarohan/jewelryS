import products from './products.js';
import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file
const loadTemplate = () => {
    fetch('../more/sideCart.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();

const initApp = () => {
     // load list product
    let productItemHTML = document.querySelector('.product-item');
    productItemHTML.innerHTML = null;

    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML =
        `
            <div class="image-holder position-relative">
                <a href="../more/products.html?id=${product.id}">
                    <img src="${product.image}" alt="categories" class="product-image img-fluid">
                </a>

                <span>
                    <a href="" class="btn-icon btn-wishlist rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84m-1.41 7.46l-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 .08 6Z" />
                        </svg>
                    </a>
                </span>

                <span class="icon-cart">
                    <a href="" class="btn-icon btn-cart rounded-circle addCart" data-id='${product.id}'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </a>
                </span>

                <div class="product-content d-flex justify-content-between align-items-center">
                    <h6 class="element-title text-uppercase mt-3">
                        <a href="/more/products.html">${product.name}</a>
                    </h6>
                    <h6 class="element-title text-uppercase text-primary mt-3 price">$
                        ${product.price}
                    </h6>
                </div>
            </div>
        `;
        productItemHTML.appendChild(newProduct);
    });
}