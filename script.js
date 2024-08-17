function init(){
    // locomotive smooths scroll + scroll trigger

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init();

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");

main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+20+"px";
    cursor.style.top = dets.y+20+"px";
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

tl.to(".page1 h1", {
    x: -100,
},"anim")
tl.to(".page1 h2", {
    x: 100,
},"anim")

tl.to(".page1 video", {
    width: "95%",
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
}) 

tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top -510%",
        end: "top -550%",
        scrub: 3
    }
}) 

tl3.to(".main", {
    backgroundColor: "#0f0d0d",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top -650%",
        end: "top -700%",
        scrub: 3
    }
}) 

tl3.to(".main", {
    backgroundColor: "#fff",
})


// var boxes = document.querySelectorAll(".box");
// boxes.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         var att = elem.getAttribute("data-img");
//         cursor.style.width = "300px"    
//         cursor.style.height = "250px"
//         cursor.style.borderRadius = 0
//         cursor.style.backgroundImage = `url(${att})`
//     })

//     elem.addEventListener("mouseleave", function(){
//         var att = elem.getAttribute("data-img");
//         cursor.style.width = "20px"    
//         cursor.style.height = "20px"
//         cursor.style.borderRadius = "50%"
//         cursor.style.backgroundImage = `none`
//     })
// });