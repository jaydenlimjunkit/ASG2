const mc = document.getElementById("mc");
const mcprice = document.getElementById("mcprice");
const mcaddtocart = document.getElementById("mcaddtocart");

const ow = document.getElementById("ow");
const owprice = document.getElementById("owprice");
const owaddtocart = document.getElementById("owaddtocart");

const wow = document.getElementById("wow");
const wowprice = document.getElementById("wowprice");
const wowaddtocart = document.getElementById("wowaddtocart");

const IsOutput = document.getElementById("IsOutput");
let total = 0

try{
    mcaddtocart.onclick = function (){
        const minecraft = mc.textContent;
        const minecraftprice = mcprice.textContent;

        localStorage.setItem(minecraft, minecraftprice);

    };
}
catch{
};
try {
    owaddtocart.onclick = function (){
        const overwatch = ow.textContent;
        const overwatchprice = owprice.textContent;
    
        localStorage.setItem(overwatch, overwatchprice);
    
    };
}
catch{};
try{
    wowaddtocart.onclick = function (){
        const worldofwarcraft = wow.textContent;
        const worldowarcraftprice = wowprice.textContent;

        localStorage.setItem(worldofwarcraft, worldowarcraftprice);

    };
}
catch{
};


try{
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
    
        IsOutput.innerHTML += `${key}<br />`;
    }
    
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        console.log(localStorage.getItem(key));
        total += parseFloat(localStorage.getItem(key));
        console.log(total);

    }
    IsOutput.innerHTML += `${total}<br />`;

}
catch{}

//image slider for product
try{
    const sliderMainImage = document.getElementById("product-main-image"); //product container image
    const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
    console.log(sliderImageList);
    
    sliderImageList[0].onclick = function(){
        sliderMainImage.src = sliderImageList[0].src;
        console.log(sliderMainImage.src);
    };
    
    sliderImageList[1].onclick = function(){
        sliderMainImage.src = sliderImageList[1].src;
        console.log(sliderMainImage.src);
    };
    
    sliderImageList[2].onclick = function(){
        sliderMainImage.src = sliderImageList[2].src;
        console.log(sliderMainImage.src);
    };
    
    sliderImageList[3].onclick = function(){
        sliderMainImage.src = sliderImageList[3].src;
        console.log(sliderMainImage.src);
    };
}
catch{}
