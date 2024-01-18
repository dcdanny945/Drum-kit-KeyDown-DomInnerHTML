for(let addNodeIndex = 0; addNodeIndex < document.querySelectorAll(".drum").length; addNodeIndex++){
    document.querySelectorAll(".drum")[addNodeIndex].addEventListener("click", function(){
        const buttonInnerHTML = this.innerHTML;
        playSounds(buttonInnerHTML);
        buttonAnmiation(buttonInnerHTML);
    })
}

function playSounds(buttonInnerHTML){
    switch (buttonInnerHTML) {
        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "w":
           const crash = new Audio("sounds/crash.mp3");
           crash.play();
        break;

        case"a":
            const kickbass =new Audio("sounds/kick-bass.mp3");
            kickbass.play();
        break;

        case"s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        default:

        break;


    }

}

document.addEventListener("keydown",function(event){
    playSoundsFromKeyboard(event.key); // got which key was downed (pressed)
    buttonAnmiation(event.key);
})

function playSoundsFromKeyboard(key){
    switch (key) {
        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "w":
           const crash = new Audio("sounds/crash.mp3");
           crash.play();
        break;

        case"a":
            const kickbass =new Audio("sounds/kick-bass.mp3");
            kickbass.play();
        break;

        case"s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        default:

        break;


    }
}
function buttonAnmiation(currentKey){
    const activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    //setTimeout(function, milliseconds)//
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
}

