

// KEY VALUE - FOR SUMAN (SET TO LOCALSTORAGE)
let datals = JSON.parse(localStorage.getItem("secondPage"));

let pdiv = document.getElementById("parentdiv");
let divone = document.getElementById("divone");

let main = document.getElementById("main");

function display(data) {
  main.innerHTML = null;

  data.forEach(({ image, title, des, price, detail }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card");

    div.addEventListener("click", () => {
      let thirdPageArray = [];
      let obj = {
        photo: image,
        heading: title,
        description: des,
        cost: price,
        detail_se: detail,
      };
      
      thirdPageArray.push(obj);
      localStorage.setItem("third", JSON.stringify(thirdPageArray));
    window.location.href = "../third1178.html"
    });

    let img = document.createElement("img");
    img.setAttribute("class", "mensimg");
    img.src = image;

    let nam = document.createElement("h3");
    nam.innerText = title;

    let descrip = document.createElement("p");
    descrip.innerText = des;

    let pric = document.createElement("h4");
    pric.innerText = `INR ${price}`;

    div.append(img, nam, descrip, pric);

    main.append(div);
  });
}

display(datals);
