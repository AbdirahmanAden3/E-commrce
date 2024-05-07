let tbody = document.getElementById("tbody");

let localstorage = JSON.parse(localStorage.getItem("product")) || [];

let html = "";
localstorage.map((product) => {
  html += `
    <tr> 
                  <td> 
                     <div class="s">
                    <img src="./img/${
                      product.img
                    }" style="border-radius: 4px;"  width="40px"  height="40px" alt="">
                    </div>
                  </td>
                  
                  <td>${product.name}</td>
                  <td>$${product.price * product.quantity}
                 <div class="d-none">${product.id}</div>   
                  </td>
              
                  <td>
       <input class="input" type="number" value="${
         product.quantity
       }" width="20px" height="30px" oninput="updateQuantityAndTotal(this, ${
    product.price
  })">
</td>
              <td id="total_${product.id}">${
    product.price * product.quantity
  }</td>

                   <td><i class="fa-solid fa-trash" id='remove'></i></td>
                </tr>
    `;
});

tbody.innerHTML = html;

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    // Using contains() instead of ==
    let id =
      e.target.parentElement.parentElement.children[2].children[0].innerText;
    let localStorageGet = JSON.parse(localStorage.getItem("product")) || [];

    let filteredLocal = localStorageGet.filter(function (product) {
      return product.id != id; // Filter out the item with the matching id
    });

    localStorage.setItem("product", JSON.stringify(filteredLocal));
    window.location = "/cart.html";
  }
});

// Function to update quantity and total
