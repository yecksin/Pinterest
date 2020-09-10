
    let texto="";
    let min=200;
    let max=600;
    
    for (let index = 0; index < 50; index++) {
        let num=Math.random() * (max - min) + min;
        texto += `
        <div class="box" style="height:${Math.round(num)}px; background-image: url('https://picsum.photos/id/${index+10}/200/300');">
         <div class="boxCont">

            <div class="btnGuardar">

             <div class="centrarConFlexLEft">
             <h6 class="sinespacio marginleft">Imagen</h6> 
             </div>
             <div class="centrarConFlex">
              <svg class="sinespacio " height="12" width="12" viewBox="0 0 24 24" aria-label="Selecciona un tablero en el que quieras guardar" role="img"><path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg>
              </div>
          
              <div class="subBtnGuardar centrarConFlex">
                <h5 class="sinespacio titGuardar">Guardar</h5>
              </div>
              
            </div>

          <div class="infBtnGuardar">
          <div class="btnc1 centrarConFlex">
            <div class="largeBtn centrarConFlexLEft">
            <svg class="Hn_ gUZ pBj U9O kVc" height="9" width="9" viewBox="0 0 24 24" aria-label="enlace" role="img"><path d="M4.9283,1 C3.6273,1 2.5713,2.054 2.5713,3.357 C2.5713,4.66 3.6273,5.714 4.9283,5.714 L14.9523,5.714 L1.6893,18.976 C0.7703,19.896 0.7703,21.389 1.6893,22.31 C2.1503,22.771 2.7533,23 3.3573,23 C3.9603,23 4.5633,22.771 5.0243,22.31 L18.2853,9.047 L18.2853,19.071 C18.2853,20.374 19.3413,21.429 20.6433,21.429 C21.9443,21.429 23.0003,20.374 23.0003,19.071 L23.0003,1 L4.9283,1 Z"></path></svg>
            <h4>ElMundo.com</h4>
            </div>
          </div>
          <div class="btnc2 centrarConFlex">
          <div class="miniBtn centrarConFlex">
          <svg class="gUZ pBj U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path></svg>
          </div>
          </div>
          <div class="btnc3 centrarConFlex">
          <div class="miniBtn centrarConFlex">
          <svg class="gUZ pBj U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path></svg></div>
          </div>
          </div>

          </div>
         </div>
         ` ;
        
        //  style='height: "+num+"vw;'
        
    }
    document.getElementById("cont").innerHTML = texto;
    // array.length



window.onresize = function () {
  console.log("Hola mundo");
  if(window.innerWidth > 600){
    document.getElementById("footer").style.top = "120%";
  }else{
    document.getElementById("footer").style.top = "100%";
    document.getElementById("navbar").style.top = "0";

  }
}
    
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if(window.innerWidth <= 600){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
          document.getElementById("footer").style.top = "100%";
        } else {
          document.getElementById("navbar").style.top = "-120px";
          document.getElementById("footer").style.top = "120%";
        }
        prevScrollpos = currentScrollPos;
    }

}
