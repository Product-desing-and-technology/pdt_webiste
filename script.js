// gsap.to("#word1",{
//     left:"10px",
//     duration:0.5,
//     delay:1,
// })
// gsap.to("#word3",{
//     right:0,
//     duration:0.5,
//     delay:1,
// })
// gsap.to("#word1",{
//     top:"-50px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#word2",{
//     top:"-50px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#word3",{
//     top:"-50px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#one",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#two",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#three",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#last",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
gsap.from(".play0",{
    left:"25%",
    duration:1,
    scrollTrigger:{
        trigger:".play0",
        scroller:"body",
        start:"top 40%",
        end:"top 80%",
        scrub:3,
    }


})
gsap.from(".des0",{
    scale:.8,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:".des0",
        scroller:"body",
        start:"top 20%",
        end:"top 60%",
        scrub:3,
    }
})