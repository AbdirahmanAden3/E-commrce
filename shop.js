let card = document.querySelector("#cards");

const product = [
  {
    id: 4,
    name: "watch",
    price: 2,
    img: "watch.jpg",
    description: " ku iibso qiimo yare",
  },
  {
    id: 5,
    name: "pc",
    price: 1,
    img: "pcL.jpg",
    description: "128Gb|SSD| hpp",
  },
  {
    id: 6,
    name: "shirt",
    price: 2,
    img: "watch.jpg",
    description: "turkish shirts",
  },
  {
    id: 7,
    name:"shirts",
    price: 10,
    img: "./shirt.jpg",
    description: "turkish shirts",
  },


  {
    id: 8,
    name: "packpack",
    price: 7,
    img: "backbac0_.jpg",
    description: "it very cheap",
  },
  {
    id: 9,
    name: "sneakers",
    price: 2,
    img: "./images.jpg",
    description: "high quality  ",
  },
  {
    id: 10,
    name:"mango",
    price: 2,
    img: "172326.jpg",
    description: "cambo quality ah",
  },
  {
    id: 12,
    price: 2,
    name:"tires",
    img: "./images (2).jpg",
    description: "waa tufafiican",
  },
  {
    id: 7,
    price: 2,
    img: "./shirt.jpg",
    description: "waa tufafiican",
  },


   
];

let htm = "";

product.map((item) => {
  htm += `

    <div class="col-md-4 "  >
    <div class="card" >
       
        <img src="./img/${item.img}" alt="">
        <div class="card-body w-200">
          <h2 class="card-1 text-center h-30px">${item.name}</h2>
          <p class="card-text text-center">${item.description}</p>
          <h3 class="text-center">$${item.price}</h3>

          <div class="star text-center" style="color: #1e1c66;" >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-sta"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
            <div class="btn">
             <div class="d-none">${item.id}</div>
     
              <button type="button"  class="btn btn-primary text-white " style= "background-color: #1e1c66;;" >
               
                Add Cart<i class="fa-solid fa-cart-shopping"  ></i>    
                
              </button>
      
            </div>
        </div>
    </div>
  </div>

    `;
});

card.innerHTML = htm;
card.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    let id = e.target.parentElement.children[0].innerText;
    let fil = product.filter(function (product) {
      return product.id == id;
    });

    let localstorage = JSON.parse(localStorage.getItem("product")) || [];

    if (localstorage.length === 0) {
      let productItem = {
        id: fil[0].id,
        name: fil[0].name,
        price: fil[0].price,
        img: fil[0].img,
        description: fil[0].description,
        quantity: 1,
      };
      localStorage.setItem("product", JSON.stringify([productItem]));
      window.location = "/cart.html";
    } else {
      let filLo = localstorage.filter(function (product) {
        return product.id == id;
      });
      if (filLo.length === 0) {
        let productItem = {
          id: fil[0].id,
          name: fil[0].name,
          price: fil[0].price,
          img: fil[0].img,
          description: fil[0].description,
          quantity: 1,
        };
        localstorage.push(productItem); // Update the localstorage array
        localStorage.setItem("product", JSON.stringify(localstorage)); // Update local storage with the updated array
        window.location = "/cart.html";
      } else {
        window.location = "/cart.html";
      }
    }
  }
});
