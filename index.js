gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier: .5
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function loader(){
  var tl = gsap.timeline()
  tl.from("#loader h1",{
    x:200,
    // scale:0,
    opacity:0,
    delay:1
  })
  
  tl.from("#loader h2",{
    x:200,
    // opacity:0,
    scale:0,
    color:"red"


  })
  tl.from("#loader h3",{
    opacity:0,
    x:200,
    // scale:0,
    color:"blue"

  })
  tl.to("#loader h1",{
    x:-200,
    opacity:0,
    delay:.3,
  })
  tl.to("#loader h2",{
    x:-200,
    opacity:0,
    // delay:1

  })
 
  tl.to("#loader h3",{
    x:-200,
    opacity:0,
    // delay:1
    color:"green"

  })
  tl.to("#loader",{
    top:"-100%"
  },"a")
  tl.from("#page1 img",{
    top:"50%"
  },"a")
  tl.from(".overlay",{
    top:"100%",
    delay:.1
  },"a")
}
loader()


gsap.to(".gola", {
  transform: "scale(1)",
  duration: 2,
  scrollTrigger: {
    trigger: ".gola",
    scroller: "#main",
    // markers:true,
    start: "top 0%",
    end: "top 10%",
    scrub: 1
  }
})



gsap.to("#overlay-bottom h1", {
  transform: "translateX(-120%)",
  duration: 5,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -30%",
    scrub: 5
  }
})

gsap.from(".elems h1,.elems h5", {
  y: 100,
  // duration:3,  
  stagger: {
    amount: 0.2
  },
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 50%",
    end: "top -30%",
    // scrub:true
  }
})
function page2(){
  var page2Container = document.querySelector(".page2-container")
  var slideImage = document.querySelector(".slideimage");
  var fabric = document.querySelector("#fabric")
  var slideImages = document.querySelector(".slideimages")
  var anas = document.querySelector("#anas");
  var container = document.querySelector("#container")
  var avvr = document.querySelector("#avvr")
  
  page2Container.addEventListener("mousemove", function (dets) {
    slideImage.style.left = `${dets.clientX}px`
    slideImage.style.top = `${dets.clientY}px`
    slideImage.style.transform = `translate(${-dets.clientX * .23}px, ${dets.clientY * 0.8}px)`
  })
  
  fabric.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "0%";
    fabric.style.color = "rgb(177, 177, 177)"
  })
  
  fabric.addEventListener("mouseleave", function () {
    fabric.style.color = "initial"
  })
  anas.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-100%";
    anas.style.color = "rgb(177, 177, 177)"
  })
  
  anas.addEventListener("mouseleave", function () {
    anas.style.color = "initial"
  })
  container.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-200%";
    container.style.color = "rgb(177, 177, 177)"
  })
  
  container.addEventListener("mouseleave", function () {
    container.style.color = "initial"
  })
  
  avvr.addEventListener("mouseenter", function () {
    slideImages.style.marginTop = "-300%";
    avvr.style.color = "rgb(177, 177, 177)"
  })
  
  avvr.addEventListener("mouseleave", function () {
    avvr.style.color = "initial"
  })
  
  page2Container.addEventListener("mouseenter",function(){
    slideImage.style.display = "initial";
    slideImage.style.scale = 1
  })
  page2Container.addEventListener("mouseleave",function(){
    slideImage.style.display = "none";
    slideImage.style.scale = 0
  })
}
page2();

var innerText = document.querySelector(".inner-text")
var h = document.querySelector(".H");
var innerDiv = document.querySelector(".inner-div")

innerText.addEventListener("mouseenter",function(){
  innerDiv.style.bottom = "0";
  innerDiv.style.borderRadius = "0";
  h.style.color = "#fff"

})
innerText.addEventListener("mouseleave",function(){
  innerDiv.style.bottom = "-100%";
  // innerDiv.style.height = "0"
  innerDiv.style.borderRadius = "50%";
  h.style.color = "#000"  

})

function page3Animation(){
  var tl = gsap.timeline({scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 40%",
    end:"top 0",
    scrub:true
  }})
  tl.from(".page3-container .box",{
    x:-70
  },"a")
  tl.to(".page3-container1 .box1",{
    x:-70,
    
  },"a")
}
page3Animation();


Shery.mouseFollower();
Shery.makeMagnet(".gola,.page2-center-circle,.page4-gola,#nav-part2 h5,.inner-text,#btn button")


var page4Text = document.querySelector(".page4-left #h1");
var page4TextContent = page4Text.textContent;
var splittedText = page4TextContent.split("");
var clutter = "";
splittedText.forEach(function(e){
   clutter += `<span>${e}</span>`;
});
page4Text.innerHTML = clutter;


function page4Animation(){
 var tl = gsap.timeline({scrollTrigger:{
  trigger:"#page4",
  scroller:"#main",    
  start:"top 45%",
  end:"top -50%"
}})
tl.from(".page4-left .h1",{
  y:"50",
  opacity:0,
  duration:1,
  stagger:.2
},"b")
tl.from(".page4-left #h1 span",{
  y:-50, 
  opacity:0,
stagger:{
  amount:.3
},
duration:1,
delay:.3
},"b")
}
page4Animation();




