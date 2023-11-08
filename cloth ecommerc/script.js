const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close")

if(bar){
    bar.addEventListener("click",function(){
     nav.classList.add("show");
    })};

    if(close){
        nav.addEventListener("click",function(){
            nav.classList.remove("show");
           })};
    // single product
    const mainimg=document.getElementById("main-img");
    const smallimg=document.getElementsByClassName("small-img");
 
            smallimg[0].addEventListener("click",function(){
             mainimg.src=smallimg[0].src;
            });
            smallimg[1].addEventListener("click",function(){
             mainimg.src=smallimg[1].src;
            });
            smallimg[2].addEventListener("click",function(){
             mainimg.src=smallimg[2].src;
            });
            
 
        //    sproduct section

    //  const redirect=document.querySelector(".pro");
    //        redirect.addEventListener("click",function(){
    //         window.location.href="sproduct.html"
    //        })


       
       
       
    
