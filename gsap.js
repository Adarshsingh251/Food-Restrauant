let t = gsap.timeline();
let t1 = gsap.timeline();
// t.from("nav .logo",{
//     y:-30,
//     stagger:0.8,
//     duration:0.3,
//     opacity:0,
// })
// t.from("nav .nav_contain a",{
//     y:100,
//     stagger:0.8,
//     duration:0.1,
//     opacity:0,
// })
t.from("nav .icon i",{
    y:-20,
    stagger:0.8,
    duration:0.8,
    opacity:0,
})

t1.from(".left .left-contain p",{
    x:300,
    duration:1,
    delay:0.5,
    opacity:0
})
t1.from(".left .left-contain h2",{
    x:-300,
    duration:0.6,
    opacity:0
})
t1.from(".left .left-contain button",{
    scale:0,
    duration:0.3,
    opacity:0
})
gsap.from(".right .img",{
    scale:0,
    duration:1.2,
    opacity:0
})
// gsap.from(".right_customer",{
//     scale:0,
//     opacity:1,
//     duration:1.2,
//     scrollTrigger:{
//         trigger:".right_customer",
//         scroller:"body",
//         markers:true,
//         start:"top 140%",
//         end:"top 10%",
//         scrub:1,
//     }
// })
// gsap.from(".lleft",{
//     y:200,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".left_customer",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 40%",
//         scrub:1,
//     }
// })
let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
main.addEventListener("mousemove",function(arr){
    gsap.to(cursor,{
        x:arr.x,
        y:arr.y,
        duration:0.3
    })
})

let t3 = gsap.timeline();

let menu  = document.querySelector(".menus");
let cross  = document.querySelector(".cross");


t3.from(".side-menu",{
    x:500,
    duration:0.5,
    opacity:0,
})
t3.from(".side-menu a",{
    x:300,
    duration:0.6,
    opacity:0,
    stagger:0.2,
})
t3.from(".side-menu i",{
    x:300,
    duration:0.3,
    opacity:0,
    stagger:0.5,
})
t3.pause()

menu.addEventListener("click",function(){
    t3.play()
})
cross.addEventListener("click",function(){
    t3.reverse()
})