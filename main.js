// JavaScript must be located at the end of the body to work


const root = document.querySelector("#app");

let {

  innerHeight,

  innerWidth

} = window;


console.log(innerHeight, innerWidth);

if (innerHeight < 300) {

  innerHeight = 350;

}

if (innerWidth < 300) {

  innerWidth = 750;

}


class Bubble {

  constructor() {

    this.bubbleSpan = undefined;

    this.handleNewBubble();

    this.color = this.randomColor();


    this.posY = this.randomNumber(innerHeight - 20, 20);

    this.posX = this.randomNumber(innerWidth - 20, 20);


    this.bubbleSpan.style.top = this.posY + "px";

    this.bubbleSpan.style.left = this.posX + "px";


    // setting height and width of the bubble

    this.height = this.randomNumber(60, 20);

    this.width = this.height;


    this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(8000, 2000));

  }


  // creates and appends a new bubble in the DOM

  handleNewBubble() {

    this.bubbleSpan = document.createElement("span");

    this.bubbleSpan.classList.add("bubble");

    root.append(this.bubbleSpan);

    this.handlePosition();

    this.bubbleSpan.addEventListener("click", this.bubbleEnd);

  }


  handlePosition() {

    // positioning the bubble in different random X and Y

    const randomY = this.randomNumber(60, -60);

    const randomX = this.randomNumber(60, -60);


    this.bubbleSpan.style.backgroundColor = this.color;

    this.bubbleSpan.style.height = this.height + "px";

    this.bubbleSpan.style.width = this.height + "px";


    this.posY = this.randomNumber(innerHeight - 20, 20);

    this.posX = this.randomNumber(innerWidth - 20, 20);


    this.bubbleSpan.style.top = this.posY + "px";

    this.bubbleSpan.style.left = this.posX + "px";


    const randomSec = this.randomNumber(8000, 200);

    setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble

  }


  randomNumber(max, min) {

    return Math.floor(Math.random() * (max - min + 1) + min);

  }


  randomColor() {

    return `rgba(

        ${this.randomNumber(0, 255)},

        ${this.randomNumber(0, 255)},

        ${this.randomNumber(0, 255)}, 

        ${this.randomNumber(0.1, 1)})`;

  }


  bubbleEnd(removingTime = 0) {

    setTimeout(

      () => {

        requestAnimationFrame(() => this.classList.add("bubble--bust"));

      },

      removingTime === 0 ? removingTime : removingTime - 100

    );


    setTimeout(() => {

      requestAnimationFrame(() => this.remove());

      requestAnimationFrame(() => new Bubble());

    }, removingTime);

  }

}


// creating many bubble instance


setInterval(function () {

  requestAnimationFrame(() => new Bubble());

}, 500);


function myBubbles() {

  document.getElementById("myBubbles").innerHTML = "<iframe class=\"responsive-iframe\" src=\"bubbles.html\" ></iframe>";
  document.getElementById("myBubbles").style.visibility = "visible";
  document.getElementById("myCarousel").style.visibility = "hidden";
  document.getElementById("myCalculus").style.visibility = "hidden";    

}


function myCarousel() {

  document.getElementById("myCarousel").innerHTML = "<iframe class=\"responsive-iframe\" src=\"carousel.html\" ></iframe>";
  document.getElementById("myCarousel").style.visibility = "visible";
  document.getElementById("myBubbles").style.visibility = "hidden";
  document.getElementById("myCalculus").style.visibility = "hidden";    
}


function myCalculus() {

  document.getElementById("myCalculus").innerHTML = "<iframe class=\"responsive-iframe\" src=\"myCalculus.html\" ></iframe>";
  document.getElementById("myCalculus").style.visibility = "visible";
  document.getElementById("myBubbles").style.visibility = "hidden";
  document.getElementById("myCarousel").style.visibility = "hidden"; 
  //document.getElementById("myBubbles").style.display = "none";
  //document.getElementById("myCarousel").style.display = "none"; 
    
}













