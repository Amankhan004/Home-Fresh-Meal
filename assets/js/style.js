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

AOS.init();