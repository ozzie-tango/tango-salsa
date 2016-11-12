// just add class parallax to your element with a nice background.
// make sure your background is big enough
// all class parallax must have body as a parent

window.addEventListener('load', function(){
    
    var parallax = document.getElementsByClassName('parallax');
    
    window.onscroll=function(){   
        for ( i=0; i<parallax.length; i++ ) { 
            
            var stayBack = Math.floor((parallax[i].offsetTop - window.scrollY)/6); 
            
            if (stayBack < 0) {    
                parallax[i].style.backgroundPosition='50%'+" "+stayBack+"px";
            };      
        };
    };
}, false);