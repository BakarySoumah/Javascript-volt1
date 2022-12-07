
/* quand l'appui du click est detecté */
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
       /*  alert("i got click"); */
    var bntInnertHtml = this.innerHTML;
    song(bntInnertHtml);

    btnAnimation(bntInnertHtml);
    });
}

/* quand l'appui du clavier est detecter */
document.addEventListener("keypress", function(event) {
    song(event.key);
    btnAnimation(event.key);
});

function song(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
        break;

        case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
        break;

        case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
        break;

        case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
        break;

        case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
        break;

        case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
        break;

        default: console.log(bntInnertHtml);
            break;
       }
    
   }

   function btnAnimation(currentkey) {
    var activeBtn = document.querySelector("." + currentkey);

    activeBtn.classList.add("pressed");
    
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
   }



