import { footer, header } from "./header_footer/footer_header.js";

document.getElementById("header1").innerHTML = header();
document.getElementById("footer1").innerHTML = footer();

// var options = {
//   offset: { vertical: 0, horizontal: 20 },
//   scale: 0.5,
// };

//new ImageZoom(document.getElementById("child_image"), options);

let addToCart = document.getElementById("add_to_bag");
addToCart.addEventListener("click", ()=>{
    cartadd()
});



let secondpage = [ {
    image:
      "https://n.nordstrommedia.com/id/sr3/f9091c49-39c7-4610-85d8-3dadf5b78885.jpeg?h=365&w=240&dpr=2",
       title: "Pampa Travel Lite Boot",
    price: "8420",
    des: "PALLADIUM",
    detail:
      "A bungee lace system grants a comfortable but flexible fit to this adventure-ready boot that is detailed with bright neon accents on the tongue and pull-tabs.",
  }];



    let nord_img = document.getElementById("nord_img");
   nord_img.src = secondpage[0].image;
 
   let title_html = document.getElementById("title");
   title_html.innerText = secondpage[0].title;

   let price_html = document.getElementById("price");
   price_html.innerHTML = `INR ${secondpage[0].price}`

   let detail = document.getElementById("detail");
   detail.innerText = secondpage[0].detail;

   let des = document.getElementById("des");
   des.innerText = secondpage[0].des




function cartadd(){
    let obj = {
        img : secondpage[0].image,
        title: secondpage[0].title,
        price : secondpage[0].price,
    }
    
    showSuccess(obj)
  }

function showSuccess(cart_arr){
    /* shows success div and some cart info */
  
    //update cart img
    const cartImg = document.getElementById("cartImg");
    cartImg.setAttribute("src",secondpage[0].image);
  
    //update name and brand
    const cartProductName = document.getElementById("cartProdName");
    cartProductName.innerHTML = secondpage[0].title;

    const cartProductBrand = document.getElementById("cartProdBrand");
    cartProductBrand.innerHTML = secondpage[0].des;
  
    //update price
    const cartPrice = document.getElementById("cartPrice");
    cartPrice.innerHTML = secondpage[0].price;
  
    // //update count
    // //get meta cart
    // // let cart = JSON.parse(localStorage.getItem("metaCart"));
    // // const cartCount = document.getElementById("cartCount");
    // // cartCount.innerHTML = cart.count;
    // // if(qty == 1){
    // //   const cartQty = document.getElementById("cartQty");
    // //   cartQty.innerHTML = ` (qty:${cartItem.qty})`;   
    // // }else{
    //     const cartQty = document.getElementById("cartQty");
    //    cartQty.innerHTML = ` (qty:${cartItem.qty})`;
    // }
  
    //finally show success div 
    const successDiv = document.getElementById("currCart");
    successDiv.style.visibility = "visible";
  
    return true;
  }

  document.getElementById("closeIcon").addEventListener("click", closeing)
/* hide div after user clicks on close */
function closeing(){
    const successDiv = document.getElementById("currCart");
    successDiv.style.visibility = "hidden";
}

  
  document.getElementById("checkoutBtn").addEventListener("click", checkout)


  let cart_arr = JSON.parse(localStorage.getItem("cart")) || [];


  function checkout(){
    document.getElementById("add_to_bag").innerText = "In Your Bag"
    let logged = JSON.parse(localStorage.getItem("isLogged"))

    if(logged){
        let obj = {
            img : secondpage[0].image,
            title: secondpage[0].title,
            price : secondpage[0].price,
        }
        cart_arr.push(obj);
   localStorage.setItem(("cart"), JSON.stringify(cart_arr));

    }else{
        alert("please login")
        window.location.href = "./signIn.html"
    }
    closeing()
}
 
 
