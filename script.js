function getRandomImage () {
    const number = Math.floor(Math.random() * 7)
    // const imagePath = "./images/omikuji-" + number.toString() + ".png";
    const imagePath = `./images/omikuji-${number.toString()}.png`;
    return imagePath;
    

}

// console.log(getRandomImage());

function playOmikuji() {
    // console.log("clicked!");
    const timer = setInterval(function(){
        document.querySelector("#js-result").setAttribute("src",getRandomImage());
        // console.log("Hello");
    }, 100);
    
    setTimeout(function(){
        clearInterval(timer)
        // console.log("stop!");
    }, 3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji);
