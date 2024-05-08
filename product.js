let card = document.querySelector("#cards");

const product = [
  {
    id: 1,
    name: "stroweber",
    price: 2,
    img: "product-img-1.jpg",
    description: "iican",
  },
  {
    id: 2,
    name: "lemon",
    price: 1,
    img: "product-img-3.jpg",
    description: "waa n",
  },
  {
    id: 3,
    name: "juice",
    price: 2,
    img: "product-img-6.jpg",
    description: "waa tufafiican",
  },
];

let htm = "";

product.map((item) => {
  htm += `

  <div class="col-md-3" >
  <div class="card ">
     
      <img src="./img/${item.img}" alt="">
      <div class="card-body w-300 ">
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
