let count=0;
const btn = document.querySelector(".add");
const badge = document.querySelector(".badge");
const cartBtn = document.querySelector(".cart-button");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modal2 = document.querySelectorAll(".modal-overlay")[1];
const closeBtn2 = document.querySelectorAll(".close-btn")[1];
const name = document.getElementById("#product-name");
const amount = document.querySelector(".amount");
const money = document.getElementById("money")

if(count==0){
    cartBtn.addEventListener("click", function(){
        modal.classList.add("open-modal");  
    })
    closeBtn.addEventListener("click", function(){
        modal.classList.remove("open-modal");
    })
}


btn.addEventListener("click", function(){
    count++;
    badge.textContent = count;

    cartBtn.addEventListener("click", function(){
        amount.textContent = "x" + count;
        let price = count*5490000;
        money.textContent = price.toLocaleString('en') + "đ";
        modal2.classList.add("open-modal");
        modal.classList.remove("open-modal");
      
    })
    
    closeBtn2.addEventListener("click", function(){
        modal2.classList.remove("open-modal");
    })
})








