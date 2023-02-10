const mc = document.getElementById("mc");
const mcprice = document.getElementById("mcprice");
const mcaddtocart = document.getElementById("mcaddtocart");

const ow = document.getElementById("ow");
const owprice = document.getElementById("owprice");
const owaddtocart = document.getElementById("owaddtocart");

const sv = document.getElementById("sv");
const svprice = document.getElementById("svprice");
const svaddtocart = document.getElementById("svaddtocart");

const wow = document.getElementById("wow");
const wowprice = document.getElementById("wowprice");
const wowaddtocart = document.getElementById("wowaddtocart");

const fifa = document.getElementById("fifa");
const fifaprice = document.getElementById("fifaprice");
const fifaaddtocart = document.getElementById("fifaaddtocart");

const er = document.getElementById("er");
const erprice = document.getElementById("erprice");
const eraddtocart = document.getElementById("eraddtocart");

const cod = document.getElementById("cod");
const codprice = document.getElementById("codprice");
const codaddtocart = document.getElementById("codaddtocart");

const mhw = document.getElementById("mhw");
const mhwprice = document.getElementById("mhwprice");
const mhwaddtocart = document.getElementById("mhwaddtocart");

const rss = document.getElementById("rss");
const rssprice = document.getElementById("rssprice");
const rssaddtocart = document.getElementById("rssaddtocart");

const IsOutput = document.getElementById("IsOutput");
const IsOutputgamename = document.getElementById("IsOutputgamename");

const clearstorage = document.getElementById("clearstorage");

const clearcart = document.getElementById("clearcart");

let total = 0

try{
    svaddtocart.onclick = function (){
        const stardewvalley = sv.textContent;
        const stardewvallyprice = svprice.textContent;

        localStorage.setItem(stardewvalley, stardewvallyprice);
        alert("Added to Cart")
    };
}
catch{
};
try{
    rssaddtocart.onclick = function (){
        const rainbowsixsiege = rss.textContent;
        const rainbowsixsiegeprice = rssprice.textContent;

        localStorage.setItem(rainbowsixsiege, rainbowsixsiegeprice);
        alert("Added to Cart")
    };
}
catch{
};
try{
    mhwaddtocart.onclick = function (){
        const monsterhunterworld = mhw.textContent;
        const monsterhunterworldprice = mhwprice.textContent;

        localStorage.setItem(monsterhunterworld, monsterhunterworldprice);
        alert("Added to Cart")
    };
}
catch{
};
try{
    codaddtocart.onclick = function (){
        const callofduty = cod.textContent;
        const callofdutyprice = codprice.textContent;

        localStorage.setItem(callofduty, callofdutyprice);
        alert("Added to Cart")
    };
}
catch{
};
try{
    eraddtocart.onclick = function (){
        const eldenring = er.textContent;
        const eldenringprice = erprice.textContent;

        localStorage.setItem(eldenring, eldenringprice);
        alert("Added to Cart")
    };
}
catch{
};
try{
    fifaaddtocart.onclick = function (){
        const fifa23 = fifa.textContent;
        const fifa23price = fifaprice.textContent;

        localStorage.setItem(fifa23, fifa23price);
        alert("Added to Cart")
    };
}
catch{
};
try{
    mcaddtocart.onclick = function (){
        const minecraft = mc.textContent;
        const minecraftprice = mcprice.textContent;

        localStorage.setItem(minecraft, minecraftprice);
        alert("Added to Cart")
    };
}
catch{
};
try {
    owaddtocart.onclick = function (){
        const overwatch = ow.textContent;
        const overwatchprice = owprice.textContent;
    
        localStorage.setItem(overwatch, overwatchprice);
        alert("Added to Cart")
    };
}
catch{};
try{
    wowaddtocart.onclick = function (){
        const worldofwarcraft = wow.textContent;
        const worldowarcraftprice = wowprice.textContent;

        localStorage.setItem(worldofwarcraft, worldowarcraftprice);
        alert("Added to Cart")
    };
}
catch{
};


try{
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
    
        IsOutputgamename.innerHTML += `${key}<br />`;
    }
    
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        total += parseFloat(localStorage.getItem(key));

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

try{
    clearstorage.onclick = function(){
        alert("Your Purchase was Successful")
        localStorage.clear();
        window.location.assign("index.html");
    }
}
catch{}

try{
    clearcart.onclick = function(){
        localStorage.clear();
        location.reload();
    }
}
catch{}

