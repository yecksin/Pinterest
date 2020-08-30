
    let texto="";
    let min=5;
    let max=20;
    
    for (let index = 0; index < 10; index++) {
        let num=Math.random() * (max - min) + min;
        texto += "<p style='height: "+num+"vw;' class='imagen'>Box</p>";
       
        
    }
    document.getElementById("myDIV").innerHTML = texto;
    // array.length

