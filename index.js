let count=0;
const btn = document.querySelector(".add");
const badge = document.querySelector(".badge");
const cartBtn = document.querySelector(".cart-button");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// btn.addEventListener("click", function(){
//     count++;
//     badge.textContent = count;
// })

console.log(cartBtn);
cartBtn.addEventListener("click", function(){
    modal.classList.add("open-modal");
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal");
})