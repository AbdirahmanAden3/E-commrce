let CartTotal = 0
function AddtoCart() {
    CartTotal += 1
  document.getElementById("cart")
    .CartTotal+=1


  

}

function AddCart() {
    var card = document.getElementById("cart");

    if(CartTotal === 0) {
        card.innerHTML = CartTotal+=1;
     
    } 
    else {
        card.innerHTML =  CartTotal+=2;
    }
   
}



const input  =  document.getElementById("input");

input.addEventListener("click", () => { 
    alert("clicked")
    console.log("ffffff")
})


const sub = document.getElementById("subtotal");

sub.addEventListener("click", () => {
    alert("clicked")
    console.log("clicked")
})


const btn = document.getElementsByTagName("button");
const totalSpan = document.getElementById('total');
  //intialazing
  let total = 0;
  
    // Function to update the total and display
    function updateTotal() {
      total++;
      totalSpan.textContent = total;
    }

    // Add event listener to the button
    increaseBtn.addEventListener('click', updateTotal);



function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });
}



alert("welcome to our website")





