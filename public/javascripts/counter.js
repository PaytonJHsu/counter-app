var button = document.querySelector("#countbtn");
var countText = document.querySelector("#counter")
var count = document.querySelector("#countVal");
count.value = "0";

button.addEventListener("click", ()=>{
    console.log("button clicked");
    count.value = String(parseInt(count.value) + 1);
    countText.innerHTML = `
        Count: ${count.value}
    `;
});

