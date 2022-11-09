const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);

    function toggleDesktopMenu () {

    cartMenu.classList.add("inactive");
    
    desktopMenu.classList.toggle("inactive");
    }

burgerMenu.addEventListener("click", toggleBurgerMenu);

    function toggleBurgerMenu () {

    cartMenu.classList.add("inactive");

    mobileMenu.classList.toggle("inactive");
}

cartIcon.addEventListener("click", toggleCartMenu);

function toggleCartMenu () {
    
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    cartMenu.classList.toggle("inactive");
}
    

const productList = [];
productList.push(
    {
        name: "Bike",
        price: 120.00,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);
productList.push(
    {
        name: "Bike",
        price: 120.00,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);
productList.push(
    {
        name: "Bike",
        price: 120.00,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    } 
);

/* <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-image">
            <div class="product-info">
                <div>
                    <p>120.00</p>
                    <p>Bike</p>
                </div>
                <figure><img src="/Icons/bt_add_to_cart.svg"alt="add to cart icon"></figure>
            </div>
 </div>    */

for (const product of productList) {
    
    const productCard= document.createElement("div");
    productCard.classList.add("product-card");

    const productImg= document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productDetails = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText= "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText= product.name;

    
    const figureDiv = document.createElement("figure");
    const figureCart = document.createElement("img");
    figureCart.setAttribute("src", "./Icons/bt_add_to_cart.svg");

    figureDiv.appendChild(figureCart);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productName);

    productInfo.appendChild(productDetails);
    productInfo.appendChild(figureDiv);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

