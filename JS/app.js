
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    // if scroll down after 45px (position Y)
    if(window.scrollY>55){
        nav.style.position = 'sticky';
        nav.style.top = 0;
        nav.classList.add('shadow')

    }else{
        nav.classList.remove('shadow')
    }
});


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


const bar  = document.getElementById('bar');
const shutter = document.getElementById('shutter');
const up  = document.getElementById('up');
let counter = true;
bar.onclick = ()=>{
    if (counter == true) {
    shutter.style.transform = 'translate(-50%, -50%)';
        counter = false;
    }
    else{
        shutter.style.transform = 'translate(-50%, -160%)';
        counter = true;
    }
}

up.onclick = ()=>{
     shutter.style.transform = 'translate(-50%, -160%)'
    counter = true;
    }