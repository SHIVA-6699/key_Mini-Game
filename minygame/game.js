const ele=document.querySelector(".game")

let index=0;
document.addEventListener(("keydown"),(e)=>{
   
    if(e.key=="ArrowUp")
{
   ele.style.background="pink"
    index=index-14;
 ele.style.transform = `translateY(${index}px)`;

}
else if(e.key=="ArrowDown")
{
   ele.style.background = "green";
    
    index = index + 14;
    ele.style.transform = `translateY(${index}px)`;

}
else if(e.key=="ArrowLeft")
{
   ele.style.background = "purple";

    index = index - 14;
    ele.style.transform = `translateX(${index}px)`;

}
else if(e.key=="ArrowRight")
{
   ele.style.background = "yellow";

    index = index + 14;
    ele.style.transform = `translateX(${index}px)`;

}
})