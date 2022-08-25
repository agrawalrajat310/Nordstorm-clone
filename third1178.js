import { footer,header } from "./header_footer/footer_header.js";

document.getElementById("header1").innerHTML = header();
document.getElementById("footer1").innerHTML = footer();




const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown)=>{
    //get inner element from each dropdown
    const  select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelector(".menu li");
const selected = dropdown.querySelector(".selected");
//we are using this method in order to have
//multiple dropdown menus on the page work
select.addEventListener("click", ()=>{
    //add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    //add the rotate styles to the caret element;
    caret.classList.toggle('caret-rotate');
    //add the open styles to the menu element;
    menu.classList.toggle("menu-open")

});
//loop through all option elements
options.forEach(option => {
    option.addEventListener("click", ()=>{
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove('menu-open');

        options.forEach(option =>{
            option.classList.remove("active");
        });
        option.classList.add("active");
    });
});
})

  