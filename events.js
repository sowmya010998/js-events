let ctn = document.getElementById("ctn01");
let ctnn = document.getElementById("ctn02");

let newEl = document.createElement("img");
newEl.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
newEl.classList.add("image01")
ctn.appendChild(newEl);


var Productdetails = [{
    Productname : "Men Navy Blue Solid Sweatshirt",
    Brand : "United Colors of Benetton",
    price01: "2599",
    Details : "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    
}]

let Productpreview = [ {
   a:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
   b: 1
},
{
   a:   "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
   b: 2
},
{
   a:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
   b: 3
},
{
   a:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
   b:4
},
{
   a: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
   b:5
}]

 function looping (jsevents){

   

    let heading01 = document.createElement("h1");
    heading01.classList.add("head01");
    heading01.innerHTML = jsevents.Productname;
    ctnn.appendChild(heading01);

    let heading04 = document.createElement("h4");
    heading04.classList.add("head04");
    heading04.innerHTML = jsevents.Brand;
    ctnn.appendChild(heading04);



    let heading03 = document.createElement("h3");
    heading03.classList.add("head03");
    heading03.innerHTML ="Price: Rs ";
    ctnn.appendChild(heading03);

    let spanElement01 = document.createElement("span");
    spanElement01.innerHTML = "2599";
    spanElement01.classList.add("spaning");
    heading03.appendChild(spanElement01)

    
    let discription = document.createElement("h3");
    discription.classList.add("description");
    discription.innerHTML = 'Description';
    ctnn.appendChild(discription);

    let paragraph = document.createElement('p');
    paragraph.classList.add("para");
    paragraph.innerHTML = jsevents.Details;
    ctnn.appendChild(paragraph);

    let heading05 = document.createElement("h3");
    heading05.classList.add("head05");
    heading05.innerHTML = 'Product Preview';
    ctnn.appendChild(heading05);

    

   

 }  

 for (let jsevents of Productdetails){
    looping (jsevents)
 }


 function csk(dhoni){
    let images = document.createElement('img');
    images.classList.add("img01");
    images.src = dhoni.a;
    images.id = dhoni.b;
    ctnn.appendChild(images);

    images.onclick = function(){
      newEl.src = images.src;
      images.style.border = "2px solid #009688"
    }
    images.onmouseout = function(){
      newEl.src = images.src;
      images.style.border = "";
  }
 }

 


 for(dhoni of Productpreview){
   csk(dhoni)
 }
   
   let but = document.createElement('button')
   but.classList.add('btn01')
   but.innerHTML ='Add to cart';
   ctnn.appendChild(but);
   but.style.display = "block";

 

 