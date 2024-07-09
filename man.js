let stars1 = document.getElementById('stars1')
let moon = document.getElementById('moon2')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river5 = document.getElementById('river5')
let boat6 = document.getElementById('boat6')
let AhmedR = document.querySelector('.AhmedR')
window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    AhmedR.style.fontSize = value  + 'px';
    if(scrollY >= 67){
        AhmedR.style.fontSize = 67 + 'px';
        AhmedR.style.position = 'fixed';
        if(scrollY >= 478){
            AhmedR.style.display = 'none';
    }else{
        AhmedR.style.display = 'block';
    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#20001f)'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
    }

}
}