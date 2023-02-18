let mobileBtn = document.querySelector('.menu');
let mobileMenu = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close');

mobileBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('-ml-80')
})
closeBtn.addEventListener('click', function(){
    mobileMenu.classList.add('-ml-80')
})


// popup
var btn = document.getElementById('popup-btn');
var text = document.getElementById('popup-text');

btn.addEventListener('click', function(e){
    text.classList.toggle('hidden')
    e.stopPropagation();
});

window.addEventListener('click', windoClick)
function windoClick(e){
    if(!e.target.closest('.popup-text')){
        text.classList.add('hidden')
    }
}

// popup
var btn2 = document.getElementById('popup-btn2');
var text2 = document.getElementById('popup-text2');

btn2.addEventListener('click', function(e){
    text2.classList.toggle('hidden')
    e.stopPropagation();
});

window.addEventListener('click', windoClick)
function windoClick(e){
    if(!e.target.closest('.popup-text2')){
        text2.classList.add('hidden')
    }
}

// popup
