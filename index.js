var i;
for(i=0;i<document.querySelectorAll("button").length;i++)
   document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonInnerHtml=this.innerHTML;
        makesound(buttonInnerHtml);
        effects(buttonInnerHtml);
   });
document.addEventListener("keypress",function(event){ makesound(event.key);
    effects(event.key);
});
function makesound(key)
{       
        switch(key){
            case 'w':
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
              break;
            case 'a':
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
              break;
            case 's':
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
              break;
            case 'd':
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
              break;
            case 'j':
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
              break;
            case 'k':
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
              break;
            case 'l':
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
              break;
            default: console.log("default case");
        }
}
function effects(key)
{   var tobemodified='.'+key;
    document.querySelector(tobemodified).classList.add('pressed');
    setTimeout(function (){
        document.querySelector(tobemodified).classList.remove('pressed');
    },100);

}