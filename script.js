function addToCart(id, name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.id === id);

    if(existingProduct){

        existingProduct.quantity += 1;

    }else{

        cart.push({
            id:id,
            name:name,
            price:price,
            quantity:1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully");
}


function displayCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let container = document.getElementById("cart-container");

    let total = 0;

    container.innerHTML = "";

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>₦${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        total.toLocaleString();
}


function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}