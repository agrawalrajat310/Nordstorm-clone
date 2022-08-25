let fetchData=async(box,z)=>{
    let res1 = await fetch(`https://zqckjp.sse.codesandbox.io/${z}`);
    let ress = await res1.json();
    console.log(ress);
    appendData(ress,box);
}
// fetchData();

let appendData=(data,box)=>{

    
    data.forEach((element) => {
        let div=document.createElement("div");
        div.setAttribute("class","main");
        let p=document.createElement("p");
        p.innerText="INR "+element.price;
        let img=document.createElement("img");
        img.src=element.Image;
        let h=document.createElement("h3");
        h.innerText=element.name;

        div.append(img,h,p);
        box.append(div);
        
    });
}

let tranding=()=>{
    let box=document.getElementById("tranding");
    let z="trending";
    fetchData(box,z);
}

let bestSelling=()=>{
    let box=document.getElementById("bestSelling");
    let z="bestselling";
    fetchData(box,z);
}
let display=()=>{
    bestSelling();
    tranding();
}
display();