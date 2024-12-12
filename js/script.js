var isTouchScreen = 'ontouchstart' in window || navigator.msMaxTouchPoints;
var modal = document.getElementById("myModal");
if(isTouchScreen === true) {
    console.log('touchscreen');
    var cardContainers = [].slice.call(document.getElementsByClassName('card-container'));
    cardContainers.forEach(function(container) {
        container.classList.remove('card-container');
        container.classList.add('card-container-mobile');
    });

    var heroes = [].slice.call(document.getElementsByClassName('hero'));
    heroes.forEach(function(hero) {
        hero.classList.remove('hero');
        hero.classList.add('hero-mobile');
    });

    var heroInners = [].slice.call(document.getElementsByClassName('hero-inner'));
    heroInners.forEach(function(heroInner) {
        heroInner.classList.remove('hero-inner');
        heroInner.classList.add('hero-inner-mobile');
    });
    var heroImage = [].slice.call(document.getElementsByClassName('hero-image'));
    heroImage.forEach(function(heroImage) {
        heroImage.classList.remove('hero-image');
        heroImage.classList.add('hero-image-mobile');
    });
    var heroContent = [].slice.call(document.getElementsByClassName('hero-content'));
    heroContent.forEach(function(heroContent) {
        heroContent.classList.remove('hero-content');
        heroContent.classList.add('hero-content-mobile');
    });
    var heroButton = [].slice.call(document.getElementsByClassName('hero-button'));
    heroButton.forEach(function(heroButton) {
        heroButton.classList.remove('hero-button');
        heroButton.classList.add('hero-button-mobile');
    });
    var actionButton = [].slice.call(document.getElementsByClassName('action-button'));
    actionButton.forEach(function(actionButton) {
        actionButton.classList.remove('action-button');
        actionButton.classList.add('action-button-mobile');
    });
    var iconButton = [].slice.call(document.getElementsByClassName('icon-button'));
    iconButton.forEach(function(iconButton) {
        iconButton.classList.remove('icon-button');
        iconButton.classList.add('icon-button-mobile');
    });
    var imageContent = [].slice.call(document.getElementsByClassName('image-content'));
    imageContent.forEach(function(imageContent) {
        imageContent.classList.remove('image-content');
        imageContent.classList.add('image-content-mobile');
    });
    var tickerWrap = [].slice.call(document.getElementsByClassName('ticker-wrap'));
    tickerWrap.forEach(function(tickerWrap) {
        tickerWrap.classList.remove('ticker-wrap');
        tickerWrap.classList.add('ticker-wrap-mobile');
    });
    var ticker = [].slice.call(document.getElementsByClassName('ticker'));
    ticker.forEach(function(ticker) {
        ticker.classList.remove('ticker');
        ticker.classList.add('ticker-mobile');
    });

    document.getElementById('actionMobile').style.display = "block";
    document.getElementById('actionWeb').style.display = "none";

    var imageHero = document.getElementById('image-hero');
    
    imageHero.srcset = "https://media.discordapp.net/attachments/838389678079475713/1225916580546740385/0.png?ex=6622dec9&is=661069c9&hm=a310403be540a6a4c37d0fb0e68a572f0345fa5f44bcc0cbb9acf6e08eac9c00&=&format=webp&quality=lossless";

    var whey = document.getElementById('whey');

    whey.style.display = "none";

    var wheyMobile = document.getElementById('whey-mobile');
    wheyMobile.style.display = "block";

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    
}

var btn = document.getElementById("myBtn");

var span = document.getElementById("close");
console.log(span);
var closeButton = document.getElementsByClassName("close-button")[0];

span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

    document.body.style.position = "";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

    document.body.style.position = "";
  }
}

function copyToClipboard(text, msg) {
    const el = document.createElement('textarea');  
    el.value = text;                                 
    el.setAttribute('readonly', '');                
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      
    document.body.appendChild(el);                  
    const selected =            
      document.getSelection().rangeCount > 0        
        ? document.getSelection().getRangeAt(0)     
        : false;                                    
    el.select();                                    
      document.execCommand('copy'); 
    document.body.removeChild(el); 

    if (selected) { 
      document.getSelection().removeAllRanges(); 
      document.getSelection().addRange(selected); 
    }

    alert(msg); 
  }