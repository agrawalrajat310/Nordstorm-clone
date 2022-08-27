let fetchData = async (z) => {
  let res1 = await fetch(`https://shielded-inlet-59281.herokuapp.com/api/${z}`);
  let ress = await res1.json();
  return ress;
  // appendData(ress,box);
};
// fetchData();

let appendData = (data, box) => {
  box.innerHTML = null;

  data.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let p = document.createElement("p");
    p.innerText = "INR " + element.price;
    let img = document.createElement("img");
    img.src = element.Image;
    let h = document.createElement("h3");
    h.innerText = element.name;

    div.append(img, h, p);
    box.append(div);
  });
};
let appendData1 = (data, box) => {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let p = document.createElement("p");
    p.innerText = "INR " + element.price + " " + element.off;
    let img = document.createElement("img");
    img.src = element.Image;
    let h = document.createElement("h3");
    h.innerText = element.name;
    let p1 = document.createElement("p");
    p1.innerText = "INR " + element.origional;
    div.append(img, h, p, p1);
    box.append(div);
  });
};

let appendImges = (data, box) => {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let img = document.createElement("img");
    img.src = element.Image;

    div.append(img);
    box.append(div);
  });
};

let tranding = async () => {
  let box = document.getElementById("tranding");
  let z = "trending";
  let x = await fetchData(z);
  console.log(x);
  appendData(x, box);
};
let fvt_images = async () => {
  let box = document.getElementById("fvt_images");
  let z = "fvt_images";
  let x = await fetchData(z);
  console.log(x);
  appendImges(x, box);
};

let button3 = document.getElementById("right3");
button3.onclick = function () {
  var con = document.getElementById("fvt_images");
  slideScroll(con, "right", 0, 1202, 9);
};
let back3 = document.getElementById("left3");
back3.onclick = function () {
  var con = document.getElementById("fvt_images");
  slideScroll(con, "left", 0, 1202, 9);
};

let bestSelling = async () => {
  let box = document.getElementById("bestSelling");
  let z = "bestselling";
  // fetchData(box,z);
  let x = await fetchData(z);
  console.log(x);
  appendData(x, box);
};

let button2 = document.getElementById("right2");
button2.onclick = function () {
  var con = document.getElementById("bestSelling");
  slideScroll(con, "right", 0, 1202, 9);
};
let back2 = document.getElementById("left2");
back2.onclick = function () {
  var con = document.getElementById("bestSelling");
  slideScroll(con, "left", 0, 1202, 9);
};

let arr = [
  {
    image: "./images/1st.png",
    h2: "All-New ASOS",
    p: "Give the last days of summer everything you've got.",
    a1: "ASOS for Women",
    a2: "ASOS for Men",
    a3: "All ASOS",
    a4: "Discover ASOS",
  },
  {
    image: "./images/2nd.png",
    h2: "Western Vibes for Now & Later",
    p: "Wear these trending boots with summer shorts and dresses, then with denim in cooler weather. From Dolce Vita and more.",
    a1: "Boots",
  },
];
let i = 0;
let scroll = () => {
  let box = document.getElementById("box2");
  box.innerHTML = null;

  let div1 = document.createElement("div");
  let img = document.createElement("img");
  img.src = arr[i].image;
  div1.append(img);
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerText = arr[i].h2;
  let p = document.createElement("p");
  p.innerText = arr[i].p;
  let div2 = document.createElement("div");
  let a1 = document.createElement("a");
  a1.innerText = arr[i].a1;
  a1.href = "bestselling.html";
  if (i == 0) {
    let a2 = document.createElement("a");
    a2.innerText = arr[i].a2;
    let a3 = document.createElement("a");
    a3.innerText = arr[i].a3;
    let a4 = document.createElement("a");
    a4.innerText = arr[i].a4;
    div2.append(a1, a2, a3, a4);
    i++;
  } else {
    div2.append(a1);
    i = 0;
  }
  div.append(h2, p, div2);
  box.append(div1, div);
};
scroll();

let greatDeal = async () => {
  let box = document.getElementById("pics");
  let z = "womens";
  let x = await fetchData(z);
  console.log(x);
  appendData1(x, box);
};

let button = document.getElementById("right");
button.onclick = function () {
  var con = document.getElementById("pics");
  slideScroll(con, "right", 0, 1202, 9);
};
let back = document.getElementById("left");
back.onclick = function () {
  var con = document.getElementById("pics");
  slideScroll(con, "left", 0, 1202, 9);
};
function slideScroll(elem, direction, speed, disatance, step) {
  // console.log("hello");
  scrollamount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      elem.scrollLeft -= step;
    } else {
      elem.scrollLeft += step;
    }
    scrollamount += step;
    if (scrollamount >= disatance) {
      clearInterval(slideTimer);
    }
  }, speed);
}
let button1 = document.getElementById("right1");
button1.onclick = function () {
  var con = document.getElementById("filtered_value");
  slideScroll(con, "right", 0, 1202, 9);
};
let back1 = document.getElementById("left1");
back1.onclick = function () {
  var con = document.getElementById("filtered_value");
  slideScroll(con, "left", 0, 1202, 9);
};

let arrivals_arr;
let arrivals_data = async () => {
  let box = document.getElementById("filtered_value");
  let z = "arrivals";
  let x = await fetchData(z);
  // appendData(x,box);
  arrivals_arr = x;
  natori();
};

let natori = () => {
  let x = arrivals_arr;
  let n = "NATORI";
  filterData(n, x);
};
let asos = () => {
  let x = arrivals_arr;
  let n = "ASOS DESIGN";
  filterData(n, x);
};
let skims = () => {
  let x = arrivals_arr;
  let n = "SKIMS";
  filterData(n, x);
};

let filterData = (n, x) => {
  let s = x.filter(function (elem) {
    return elem.name == n;
  });
  console.log(s);
  let box = document.getElementById("filtered_value");
  appendData(s, box);
};


let array = [
  "./images/4th.png",
  "./images/5th.png",
  "./images/6th.png",
  "./images/7th.png",
  "./images/8th.png",
];
let m = 1;
let school = () => {
  if (m == array.length) m = 0;
  let box = document.querySelector("#box8>a>img");
  box.src = array[m];
  m++;
};

setInterval(function () {
  scroll();
  school();
}, 4000);

let array1 = [
  {
    image:
      "https://n.nordstrommedia.com/id/eeed2128-87d0-4dc2-885b-8cf00990d7a4.jpeg?h=365&w=268",
    name: "Women",
  },
  {
    image:
      "https://n.nordstrommedia.com/id/0670ff1a-32ce-4993-981f-022273d21164.jpeg?h=365&w=268",
    name: "Men",
  },
  {
    image:
      "https://n.nordstrommedia.com/id/0d1f99a7-4e16-4d5a-bbab-6ec0c0d12bd3.jpeg?h=365&w=268",
    name: "Kids",
  },
  {
    image:
      "	https://n.nordstrommedia.com/id/308c5702-a581-41de-8d79-51d45fdbe85c.jpeg?h=365&w=268",
    name: "Home",
  },
  {
    image:
      "https://n.nordstrommedia.com/id/c75b6a06-8e9e-4f6a-9513-1f0871f0eaea.jpeg?h=365&w=268",
    name: "Beauty & Fragrance",
  },
  {
    image:
      "https://n.nordstrommedia.com/id/97f13efd-c141-47eb-91ed-9f41506b6cdb.jpeg?h=365&w=268",
    name: "Designer",
  },
];

let shop_by_categ=(data)=>{
  let box=document.querySelector("#box13>div");
  data.forEach((element)=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=element.image;
    let h2=document.createElement("h3");
    h2.innerText=element.name;
    div.append(img,h2);
    box.append(div);
  })
}

let display = () => {
  greatDeal();
  arrivals_data();
  bestSelling();
  shop_by_categ(array1);
  tranding();
  fvt_images();

};

display();

let w1=document.getElementById("w1");
w1.addEventListener("click", ()=>{
  console.log("hii");
});
// function womens_items(){
// }