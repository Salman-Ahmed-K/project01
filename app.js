let btn = document.getElementById("button")
let code = document.getElementById("hexcode")

function colorchange(){
    let letters = "0123456789abcdef";
    let hex = "#";
    for(i=0;i<6;i++){
        hex += letters[Math.floor(Math.random() * 16)];

        
    }
    return hex;
}

btn.addEventListener("click", function(){
  document.body.style.backgroundColor = colorchange();
  code.innerHTML = colorchange();
})

