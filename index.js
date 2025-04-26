// normal way

// function changed(){
//     let bn = document.querySelector("#butn");
//     bn.textContent = "Added to cart";
// }
// let bn = document.querySelector("#butn");
// bn.addEventListener('click',changed);
// // 
// function changed1(){
//     let b1 = document.querySelector("#butn1");
//     b1.textContent = "Added to cart";
// }
// let b1 = document.querySelector("#butn1");
// b1.addEventListener('click',changed1);

// all together:-

// const buttons = document.querySelectorAll(".butn"); 

// buttons.forEach(button => {
//     button.addEventListener('click',()=>{
//             let bu = document.querySelectorAll(".butn");
//             bu.textContent = "Added";
//             // alert("hi");
//         });

// })
// array.forEach(element => {

// });

function bnt() {
    let a = document.addEventListener(".menu");
}

let btn = document.querySelector(".login_button");
// let logins = document.querySelector(".login_container");
let countes = 0;

btn.addEventListener("click", function(){
    if (countes == 0) {
        gsap.to(".login_container", {
            scale: 1,
            opacity: 1,
            duration: 1.6,
        })
        // countes = 1;
    }
    // else{
    //     gsap.to(".main .login", {
    //         scale: 0,
    //         opacity: 0,
    //         duration: 1,
    //     })
    //     countes = 0;
    // }
})

// cross wala code hai
let crosses = document.querySelector(".cross");

crosses.addEventListener("click",function(){
    gsap.to(".login_container", {
        scale: 0,
        opacity: 0,
        duration: 1,
    })
})

/* adding swiper js */

var swiper = new Swiper('.right_customer',{
    loop:true,
    autoplay: {
        delay: 1000,
    },
    // spaceBetween: 20,
    direction: 'horizontal', 
    speed : 160,
    effect: 'cube',
    rotate: 50,
})