const inpKey = document.getElementById("i wanna die");
const inpvalue = document.getElementById("not soon enough");
const kms = document.getElementById("i wanna die early");
const kys = document.getElementById("not too soon enough");
const btnInsert = document.getElementById("btnInsert1");
const IsOutput = document.getElementById("IsOutput");
let total = 0

try{
    btnInsert.onclick = function (){
        const key = inpKey.textContent;
        const value = inpvalue.textContent;

        localStorage.setItem(key, value);

        const killmyself = kms.textContent;
        const killyourself = kys.textContent;

        localStorage.setItem(killmyself, killyourself);

    };
}
catch{
}

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    IsOutput.innerHTML += `${key}: ${value}<br />`;
}

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    console.log(localStorage.getItem(key));
    total += parseFloat(localStorage.getItem(key));
    console.log(total);
    IsOutput.innerHTML += `${total}<br />`;

}
