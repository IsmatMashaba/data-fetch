/*
let url='https://api.escuelajs.co/api/v1/products'

fetch(url)
    .then(res => res.json())
    .then(allData => {

        for (let i = 0; i < 10 ; i++) {
            let data = allData[i];
            let title = data.title;
            let image = data.category.image;
            let description = data.description;

            let myBoxContent = document.createElement("div");

            myBoxContent.innerHTML = `<div class="box-content">
            <h1 class="title">Title: ${title}</h1>
            <img class="image" src="${image}">
            <p class="description">Description: ${description}</p>
            </div>`

            let box = document.getElementById("box");
            box.appendChild(myBoxContent)
        }
    }
    )
    .catch((error)=>console.log(error))*/

/*Andrea's solution*/

let url='https://api.escuelajs.co/api/v1/products'

fetch(url)
    .then(res => res.json())
    .then((data)=>displayData(data))
    .catch((error)=>console.log(error));

/*function to display data*/
function displayData(data) {
    const productList=data;
    productList.map((item)=>{
        const productItem =` 
          <p>Name: ${item.title} </p>
          <img id="productImg" src="${item.category.image}" alt="">
          <p>Description: ${item.description} </p>
          `
        const productItemContainer= document.createElement('div');
        productItemContainer.innerHTML=productItem;
        productItemContainer.id='productItemStyle'
        const productListContainer= document.getElementById('box');
        productListContainer.append(productItemContainer);

    })

}
