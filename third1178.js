import { footer, header } from "./header_footer/footer_header.js";

document.getElementById("header1").innerHTML = header();
document.getElementById("footer1").innerHTML = footer();

// var options = {
//   offset: { vertical: 0, horizontal: 20 },
//   scale: 0.5,
// };

//new ImageZoom(document.getElementById("child_image"), options);


let userls = JSON.parse(localStorage.getItem("users"))
let logged = JSON.parse(localStorage.getItem("isLogged")) || false;
if(logged){
  document.getElementById("login_check").innerText = userls[userls.length-1].name
}

let third_ls = JSON.parse(localStorage.getItem("third"));

display(third_ls)


function display (third_ls){
  

  third_ls.forEach(({cost,description,heading,photo,detail_se})=>{
    let nord_img = document.getElementById("nord_img");
    nord_img.src = photo;
    let title_html = document.getElementById("title");
    title_html.innerText = heading;
    let price_html = document.getElementById("price");
    price_html.innerHTML = `INR ${cost}`
    let detail = document.getElementById("detail");
      detail.innerText = detail_se
   let des = document.getElementById("des");
    des.innerText = description;

    let addToCart = document.getElementById("add_to_bag");
    addToCart.addEventListener("click", ()=>{
        cartadd(cost,description,heading,photo,detail_se)
    });
  });

}
function cartadd(cost,description,heading,photo,detail_se){
    let obj = {
        img : photo,
        title: heading,
        price : cost,
        brand: description,
      }
    
    showSuccess(obj)
  }

function showSuccess(obj){
    /* shows success div and some cart info */
  
    //update cart img
    const cartImg = document.getElementById("cartImg");
    cartImg.src = obj.img
  
    //update name and brand
    const cartProductName = document.getElementById("cartProdName");
    cartProductName.innerHTML = obj.title;

    const cartProductBrand = document.getElementById("cartProdBrand");
    cartProductBrand.innerHTML = obj.brand;
  
    //update price
    const cartPrice = document.getElementById("cartPrice");
    cartPrice.innerHTML = obj.price;
  
   
  
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
    let logged = JSON.parse(localStorage.getItem("isLogged")) || false;
    third_ls.forEach(({cost,description,heading,photo,detail_se})=>{

      if(logged){
        let cart_obj = {
            img : photo,
            title: heading,
            price : cost,
            des : description,
        }
        cart_arr.push(cart_obj);
       localStorage.setItem(("cart"), JSON.stringify(cart_arr));
       //window.location.href =
    }else{
        alert("Please login")
        window.location.href = "./signIn.html"
    }




    })

    
    closeing()
}
 
 
