var crsr = document.querySelector("#cursor");
var dot = document.querySelector("#cursordot");
document.addEventListener("mousemove",function(g){
    crsr.style.left = g.x + "px";
    crsr.style.top = g.y + "px";
    dot.style.left = g.x + "px";
    dot.style.top = g.y + "px";
    // crsr.style.display ="block";
    // dot.style.display ="block";

    crsr.animate({
        left: g.x + "px",
        top: g.y + "px"}, {duration: 500, fill: "forwards"});
})
 
// document.addEventListener("mouseout",function(){
//     crsr.style.display ="none";
//     dot.style.display ="none";
// })

var aall = document.querySelectorAll("a");
aall.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    
    
    crsr.style.scale = 1.5;
    dot.style.scale=2.25;
    crsr.style.border = "2px solid #FFA500";
    dot.style.backgroundColor = "transparent";
    crsr.style.left = g.x +25;
    crsr.style.top = g.y +25;
    
    
  });
  elem.addEventListener("mouseleave", function () {
    
    crsr.style.scale = 1;
    dot.style.scale=1;
    crsr.style.border = "2px solid #00FFFF";
    dot.style.backgroundColor = "#FFA500"

  });
});

gsap.to("#nav",{
    // backgroundColor: "#171717",
    // backgroundColor: "#0F0B28",
    backgroundImage: "linear-gradient( to right, #0f0c29, #0f0c29 10% 20%, #110d35 ,#0f0c29 80% 90% ,#0f0c29)",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -70%",
        end:"top -80%",
        scrub:1
    }
})

gsap.to("#main",{
    // background: "#000023ab",
    // backgroundImage: "linear-gradient( to right, rgba(204, 65, 255, 0.2),#0f0c29e8,#0f0c29e8,rgba(0,255,255,0.2) )",
    backgroundImage: "linear-gradient( to right, #0f0c29, #0f0c29 10% 20%, #110d35f0 ,#0f0c29 80% 90% ,#0f0c29)",
    // backgroundImage: "linear-gradient( to right, #0f0c29cc,  #0f0c29,#0f0c29cc)",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -60%",
        end:"top -70%",
        scrub:2
    }
})
