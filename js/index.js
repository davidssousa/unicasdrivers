
function slide1() {
    resetSlider();
    document.getElementById('img1').style.animation = 'animate 21s infinite';
    document.getElementById('img1').style.animationDelay = '0s';
    document.getElementById('img2').style.animation = 'animate 21s infinite';
    document.getElementById('img2').style.animationDelay = '7s';
    document.getElementById('img3').style.animation = 'animate 21s infinite';
    document.getElementById('img3').style.animationDelay = '14s';
}



function resetSlider() {
    document.getElementById('img1').style.animation = '';
    document.getElementById('img2').style.animation = '';
    document.getElementById('img3').style.animation = '';

    // [].slice.call(document.getElementsByClassName('animar'))
    //     .map(slide => slide.style.display = 'none')
}

slide1();