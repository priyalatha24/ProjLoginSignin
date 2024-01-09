function login(){

document.querySelector("#show-login").addEventListener("click",function(){
document.querySelector(".popuplogin").classList.add("active");
});

document.querySelector(".popuplogin .closebtn").addEventListener("click",function(){
    document.querySelector(".popuplogin").classList.add("active");
    });
}

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector("#show-login").addEventListener("click", function() {
//         document.querySelector(".popuplogin").classList.add("active");
//     });

//     document.querySelector(".popuplogin .closebtn").addEventListener("click", function() {
//         document.querySelector(".popuplogin").classList.remove("active");
//     });
// });

