
    let texto="";
    let min=200;
    let max=600;
    
    for (let index = 0; index < 50; index++) {
        let num=Math.random() * (max - min) + min;
        texto += `
        <div class="box" style="height:${Math.round(num)}px; background-image: url('https://picsum.photos/id/${index+10}/200/300');">
      
         </div>
         ` ;
        
        //  style='height: "+num+"vw;'
        
    }
    document.getElementById("cont").innerHTML = texto;
    // array.length




    
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if(window.innerWidth <= 600){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
          document.getElementById("footer").style.top = "100%";
        } else {
          document.getElementById("navbar").style.top = "-80px";
          document.getElementById("footer").style.top = "120%";
        }
        prevScrollpos = currentScrollPos;
    }

}
