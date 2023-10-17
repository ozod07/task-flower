const addCart = document.querySelectorAll(".add-cart");
const balancedquantity = document.querySelector(".quantity");
const costNav = document.querySelector(".cost-nav");
const crossIcon = document.querySelector(".fa-xmark");
const costNavBody = document.querySelector(".body");
const block = document.querySelector(".block");
const costPrice = document.querySelector(".cost-price");
const mainPart = document.querySelector(".main-part");
const logo = document.querySelector(".logo");
const umnarx=document.querySelector('.balance')
const increament = document.querySelector(".increament");
const deccreament = document.querySelector(".decreament");
const countNumber = document.querySelector(".count-number");
const checkout = document.querySelector(".checkout");
const removeIcon = document.querySelector(".fa-trash-can");
const itemname = document.querySelector(".itemname");
const container = document.querySelector(".img-container");

const products = [
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Alocasia 'Portodoro'",
    plantprice: 31.73,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Dracena Fragrans",
    plantprice: 28.3,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Anthirium Andraean",
    plantprice: 13.4,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Red Roses",
    plantprice: 34.9,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Tulip",
    plantprice: 2.4,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Rafleziya",
    plantprice: 21.2,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Aloe",
    plantprice: 31.3,
  },
  {
    imgsrc: "./images/pexels-photo-346529.webp",
    plantname: "Baobab",
    plantprice: 11.7,
  },
];

const cart = [];

const productMap = products.map(
    (item, i) =>
      `<div class="content">
        <img src="${item.imgsrc}" alt="${item.plantname}">
        <p class="plants-name">${item.plantname}</p>
        <p class="plants-price">$${item.plantprice}</p>
        <button class="add-cart" onclick="mainPartFunction(${i})">Add to cart🛒</button>
    </div>`
  )
  .join("");

container.innerHTML = productMap;

balancedquantity.addEventListener("click", () => {
  costNav.style.right = "0";
  costNav.style.transitionDuration = ".5s";
});

crossIcon.addEventListener("click", () => {
  costNav.style.right = "-700px";
  costNav.style.transitionDuration = ".5s";
});

function mainPartFunction(id) {
  cart.push({...products[id], qty: 1});
  generateCartproducts()
  let arr = []

  let arr1 = 0;

  for(let i = 0;i<cart.length;i++){
    arr.push(cart[i].plantprice)
    arr1+=arr[i]
    umnarx.innerHTML=arr1
    console.log(arr,arr1);
  }
  balancedquantity.innerText=arr.length
}
function generateCartproducts() {
  const cartProducts = cart.map((product , i) => {
    
  return ` <div class="block">
      <div class="div1">
          <div style="display: flex; align-items: center; gap: 5px;">
              <img src="${product.imgsrc}" alt="${product.plantname}" class="div1-img">
              <span class="itemname">${product.plantname}</span>
          </div>
          <i class="fa-solid fa-trash-can" onclick="remove(${i})"></i>
      </div>
      <div class="div2">
          <span>Quantity</span><br>
          <div class="inc-dec">
              <span class="decreament" onclick="dec(${i})">-</span>
              <span class="count-number">${product.qty}</span>
              <span class="increament" onclick="inc(${i})">+</span>
          </div>
          <span>$<span class="cost-price">${product.plantprice*product.qty}</span></span>
      </div>
  </div>
  <hr>`
  inc()
}).join("");
    costNavBody.innerHTML=cartProducts
    
    
}

function remove(id){
  delete cart[id]
  generateCartproducts()
}
function inc(i2){
  cart[i2].qty+=1

  generateCartproducts()
  dec()
}
function dec(i1){
  cart[i1].qty-=1
  
  generateCartproducts()
  inc()
}
// logo.addEventListener("click", () => {
//   mainPart.style.right = "100px";
//   document.querySelector(".flower-window").style.left = "-1500px";
// });

// function imgContent(item1name, itemprice) {
//   document.querySelector(".flower-name").textContent = item1name;
//   document.querySelector(".flower-cost").textContent = itemprice;
//   document.querySelector(".flower-window").style.left = "0";
//   mainPart.style.position = "absolute";
//   mainPart.style.right = "1500px";
// }






