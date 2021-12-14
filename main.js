var slides=document.querySelector('.slides');
var slide=Array.from(document.querySelectorAll('.slide'));
var slidegr=document.querySelector('.slide-gr');
var num_page 

function makeslide(numberonetime) {
    var percentwidth_slide=100/numberonetime;
  
    num_page=Math.ceil(slide.length/numberonetime);
    
    slide.forEach((el,index)=>{
        el.style.width=(slidegr.offsetWidth/100*percentwidth_slide)+'px';
       
    })
   
    slides.style.width=(slidegr.offsetWidth/100*percentwidth_slide)*slide.length+'px';
}

makeslide(3);

var curpage=1;
function showslide(pagenumber){
    slides.style.marginLeft=-(slidegr.offsetWidth*(pagenumber-1))+'px';
    
}
showslide(1);
function changeslide(n){
    curpage=curpage+n;
    if(curpage<1)curpage=num_page;
    if(curpage>num_page)curpage=1;
    showslide(curpage);
}