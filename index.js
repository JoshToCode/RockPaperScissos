let imgs= document.querySelectorAll('img')
imgs.forEach(img => {
   
 img.addEventListener('click',function(params) {
    
    let src=img.getAttribute('src');
    
    let new_img=document.createElement('img');
    new_img.setAttribute('src',src);
new_img.className="gh";
    let resultHolder=document.querySelector(".results");
resultHolder.append(new_img)
bot(src)
 })
});

function bot(src) {
    let img= document.querySelectorAll('img');
    let rand=Math.floor(Math.random()*3); 
let bot=img[rand];
let src_bot=bot.getAttribute('src');
let new_img=document.createElement('img');
new_img.setAttribute('src',src_bot);
new_img.className="gh";
    let resultHolder=document.querySelector(".results");
resultHolder.append(new_img);


//code for tie;
if (src == src_bot) {
    document.querySelector(".draw").style.display='block'
} // code for win or lose 
if((src=="Paper.jpeg") & (src_bot =="Rock.png")){
    let us=document.querySelector(".u");
    let u=Number(us.innerHTML)+1;
    document.querySelector(".u").innerHTML=u
    document.querySelector(".happy").style.display='block'
} 
if((src=="Rock.png") && (src_bot =="Paper.jpeg")){
    let bt=document.querySelector(".b");
    let b=Number(bt.innerHTML)+1;
    document.querySelector(".b").innerHTML=b
    document.querySelector(".sad").style.display='block'
}
 if((src=="Rock.png") && (src_bot =="Scissors.png")){
    let us=document.querySelector(".u");
    let u=Number(us.innerHTML)+1;
    document.querySelector(".u").innerHTML=u
    document.querySelector(".happy").style.display='block'
}
 if((src=="Scissors.png") && (src_bot =="Rock.png")){
    let bt=document.querySelector(".b");
    let b=Number(bt.innerHTML)+1;
    document.querySelector(".b").innerHTML=b
    document.querySelector(".sad").style.display='block'
}
 if((src=="Paper.jpeg") && (src_bot =="Scissors.png")){
    let bt=document.querySelector(".b");
    let b=Number(bt.innerHTML)+1;
    document.querySelector(".b").innerHTML=b
    document.querySelector(".sad").style.display='block'
} 
if((src=="Scissors.png") && (src_bot =="Paper.jpeg")){
    let us=document.querySelector(".u");
    let u=Number(us.innerHTML)+1;
    document.querySelector(".u").innerHTML=u
    document.querySelector(".happy").style.display='block'
}}



let start=document.querySelector('.start');
start.addEventListener("click",function (params) {
   document.querySelector(".sad").style.display="none"
   document.querySelector(".happy").style.display="none"
   document.querySelector(".draw").style.display="none"
    let resultHolder=document.querySelector(".results");
    resultHolder.replaceChildren()
 
})
