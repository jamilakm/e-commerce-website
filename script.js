const allProducts = [
    { name: "Puma CELL GEO BIOLOGY", category: "Unisex Lifestyle Shoe", price: 150, image: "images/puma.png", sizes: [8, 9, 10, 11] },
    { name: "Puma Speedcat OG", category: "Women's Lifestyle Shoe", price: 95, image: "images/shoe1.png", sizes: [6, 7, 8, 9, 10] },
    { name: "Puma Voltic Evo", category: "Unisex Lifestyle Shoe", price: 100, image: "images/shoe2.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Puma Rebound E6 Mid", category: "Men's Lifestyle Shoe", price: 75, image: "images/shoe3.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Nike Free Metcon 7", category: "Men's Training Shoe", price: 140, image: "images/nike.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Puma Suede Classic", category: "Men's Lifestyle Shoe", price: 150, image: "images/shoe4.png", sizes: [8, 9, 10, 11] },
    { name: "Puma Las Vegas Flagship", category: "Unisex Lifestyle Shoe", price: 120, image: "images/shoe5.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Nike Total 90 (T90) SP", category: "Unisex Lifestyle Shoe", price: 180, image: "images/shoe6.2.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Nike x Comme des Garçons", category: "Women's Lifestyle Shoe", price: 310, image: "images/shoe7.png", sizes: [6, 7, 8, 9, 10] },
    { name: "Adidas SL 72 OG", category: "Women's Running Shoe", price: 110, image: "images/adidas.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Adidas Supernova Stride", category: "Women's Running Shoe", price: 150, image: "images/shoe14.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Puma Deviate Nitro 3", category: "Men's Running Shoe", price: 110, image: "images/shoe8.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Puma Velohasis Overdyed", category: "Women's Running Shoe", price: 110, image: "images/shoe9.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Nike Air Max Plus Drift", category: "Running/Lifestyle Shoe", price: 230, image: "images/shoe10.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Nike AirForce 1 '07", category: "Men's Lifestyle Shoe", price: 110, image: "images/nikeair.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Speedcat Nova Ballet", category: "Women's Lifestyle Shoe", price: 80, image: "images/speedcat.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Adidas Supernova Rise 2", category: "Men's Running Shoe", price: 130, image: "images/shoe11.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Nike Tennis Centre", category: "Women's Training Shoe", price: 90, image: "images/shoe12.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Adidas Gazelle", category: "Women's Lifestyle Shoe", price: 95, image: "images/shoe13.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Adidas Lightblaze Glow", category: "Running Shoe", price: 100, image: "images/shoe14.png", sizes: [6, 7, 8, 9, 10, 11] },
    { name: "Adidas Lightblaze", category: "Lifestyle Shoe", price: 110, image: "images/shoe15.png", sizes: [6, 7, 8, 9, 10, 11] }
];

const defaultRecommendations = [allProducts[0], allProducts[4], allProducts[9], allProducts[14], allProducts[15]];


const productsContainer = document.getElementById("products");
const modal = document.getElementById("shoe-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");
const modalSizesContainer = document.getElementById("modal-sizes-container");

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const shopButton = document.getElementById("shop-now-btn");
const homeImage = document.getElementById("homeImage");
const searchInput = document.getElementById("search-input") || document.getElementById("searchInput");


const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");
const cartBtn = document.getElementById("cartBtn");
const cartNo = document.getElementById("cartNo");
const cartPanel = document.getElementById("cart-panel");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartItemsList = document.getElementById("cart-items-list");

let cart = JSON.parse(localStorage.getItem("sneakify_cart")) || [];
let selectedSize = null;
const isHomePage = !!homeImage;
function displayProducts(productsToRender) {
    if (!productsContainer) return;
    productsContainer.innerHTML = "";

    if (productsToRender.length === 0) {
        productsContainer.innerHTML = isHomePage
            ? `<p class="text-stone-500 w-full text-center py-6">No matches found in store.</p>`
            : '<p class="text-stone-500 col-span-full text-center py-12">No sneakers match your search.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = isHomePage
            ? "min-w-[300px] leading-loose cursor-pointer bg-white p-2 rounded-lg border border-transparent hover:border-gray-100 transition shadow-sm hover:shadow-md"
            : "bg-white p-4 rounded-md shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition duration-200";

        card.innerHTML = `
            <div class="bg-white"> 
                <img src="${product.image}" alt="${product.name}" class="w-full ${isHomePage ? 'h-80' : 'h-64'} object-contain bg-gray-50 rounded-md">
                <div class="flex justify-between mt-4">
                    <div>
                        <h3 class="${isHomePage ? 'text-xl' : 'text-lg font-medium'} text-amber-950">${product.name}</h3>
                        <p class="text-sm text-stone-500">${product.category}</p>
                    </div>
                    <p class="font-bold text-amber-950">£${product.price.toLocaleString()}</p>
                </div>
            </div>
        `;

        card.addEventListener("click", () => openModal(product));
        productsContainer.appendChild(card);
    });
}

function openModal(product) {
    if (!modal) return;
    modalImg.src = product.image;
    modalName.textContent = product.name;
    modalPrice.textContent = `£${product.price}`;
    modalDesc.textContent = product.category;

    if (modalAddToCartBtn) {
        modalAddToCartBtn.dataset.productInfo = JSON.stringify(product);
    }


    if (modalSizesContainer) {
        modalSizesContainer.innerHTML = "";
        selectedSize = null;
        if (product.sizes) {
            product.sizes.forEach(size => {
                const sizeBtn = document.createElement("button");
                sizeBtn.textContent = size;
                sizeBtn.className = "border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-stone-700 bg-white hover:border-amber-950 transition cursor-pointer";

                sizeBtn.addEventListener("click", () => {
                    selectedSize = size;
                    modalSizesContainer.querySelectorAll("button").forEach(btn => {
                        btn.className = "border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-stone-700 bg-white hover:border-amber-950 transition cursor-pointer";
                    });
                    sizeBtn.className = "bg-amber-950 text-white border border-amber-950 rounded-md px-3 py-1 text-sm font-medium transition cursor-pointer shadow-sm";
                });
                modalSizesContainer.appendChild(sizeBtn);
            });
        }
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove("flex");
    modal.classList.add("hidden");
}



function updateCartUI() {
    localStorage.setItem("sneakify_cart", JSON.stringify(cart));
    if (!cartNo) return;

    cartNo.textContent = cart.length;
    cartNo.classList.toggle("hidden", cart.length === 0);

    if (!cartItemsList) return;
    cartItemsList.innerHTML = cart.length === 0
        ? '<p id="empty-cart-msg" class="text-stone-500 text-center py-8">Your cart is empty.</p>'
        : '';

    cart.forEach((item, index) => {
        cartItemsList.innerHTML += `
        <div class="bg-gray-50 p-2 rounded-lg border border-gray-100 space-y-1">
            <div class="flex items-center gap-4">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain bg-white rounded border border-gray-200 flex-shrink-0">
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-semibold text-amber-950 truncate">${item.name}</h4>
                    <p class="text-xs text-stone-500">£${item.price}</p>
                </div>
                <button onclick="removeItem(${index})" class="text-red-500 font-bold hover:text-red-700 px-2 cursor-pointer text-lg">&times;</button>
            </div>
            <div class="pl-2">
                <p class="text-xs text-stone-500 font-medium">Size: ${item.selectedSize}</p>
            </div>
        </div>`;
    });
}

window.removeItem = function (index) {
    cart.splice(index, 1);
    updateCartUI();
};

if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", (e) => {
        if (modalSizesContainer && !selectedSize) {
            alert("Please select a shoe size first.");
            return;
        }
        const product = JSON.parse(e.target.dataset.productInfo);
        product.selectedSize = selectedSize || "N/A";
        cart.push(product);

        updateCartUI();
        closeModal();
        if (cartPanel) cartPanel.classList.remove("hidden");
    });
}

if (cartBtn) cartBtn.addEventListener("click", () => cartPanel.classList.remove("hidden"));
if (closeCartBtn) closeCartBtn.addEventListener("click", () => cartPanel.classList.add("hidden"));

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    });
}


if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm === "" && isHomePage) {
            displayProducts(defaultRecommendations);
            return;
        }
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });
}

if (isHomePage) {
    if (shopButton) {
        shopButton.addEventListener("click", () => {
            window.location.href = "shop.html";
        });
    }

    const images = ["images/adidashome.png", "images/puma home2.png"];
    let index = 0;
    setInterval(() => {
        if (!homeImage) return;
        homeImage.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % images.length;
            homeImage.src = images[index];
            setTimeout(() => { homeImage.style.opacity = 1; }, 50);
        }, 500);
    }, 5000);
}


if (closeBtn) closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });


displayProducts(isHomePage ? defaultRecommendations : allProducts);
updateCartUI();