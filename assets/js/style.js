// function rotateImage(degree) {
// 	$('#demo-image').animate({  transform: degree }, {
//     step: function(now,fx) {
//         $(this).css({
//             '-webkit-transform':'rotate('+now+'deg)', 
//             '-moz-transform':'rotate('+now+'deg)',
//             'transform':'rotate('+now+'deg)'
//         });
//     }
//     });
// }


//  MyFunction(){
//     var img = document.getElementById("image");
//     img.rotate(20*Math.PI/180);
//     }


let rotateimg=document.querySelectorAll(".dummy");
rotateimg.forEach(element => {
   element.addEventListener('click',()=>{
    element.classList.toggle('rotate')
   })    
});


window.addEventListener("scroll",  ()=> {
   var scroll = document.querySelector(".scrollTop");
   scroll.classList.toggle("active", window.scrollY > 2300);

 });

 $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   }
})