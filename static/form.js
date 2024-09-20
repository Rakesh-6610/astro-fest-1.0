// document.addEventListener("mousemove", (e) => {
//     const x = (e.clientX / window.innerWidth) * -1;
//     const y = (e.clientY / window.innerHeight) * -1;


//     const ele = document.querySelector("body");

//     ele.style.backgroundPosition = `${y*50}px ${x*50}px`

//     console.log(ele.style.backgroundPosition)
// })



// gsap.set("main", {
//     overflow: "hidden"
// })
// gsap.fromTo(".animate", {
//     y: "100px",
//     filter: "blur(10px)",
//     opacity: 0.4,
// }, {

//     y: 0,
//     filter: "blur(0px)",
//     opacity: 1,
//     duration: 1,
//     stagger: {
//         amount: 0.3
//     }
// })
// gsap.set("main", {
//     overflow: "show"
// })