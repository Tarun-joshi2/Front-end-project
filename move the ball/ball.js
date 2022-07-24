var ball = document.getElementById("ball");

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";



// If you want dynamic change in values of ball height and width uncomment the below 'onresize' code.
var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

/*
window.onresize = function (e) {
    ballHeight = ball.offsetHeight;
    ballWidth = ball.offsetWidth;
};
*/

function setValue(value) {
    return value + "px";
}



// When using event.keyCode;
function keyCode(keyPress) {

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === 119 || keyPress === 87) {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === 97 || keyPress === 65) {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === 115 || keyPress === 83) {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === 100 || keyPress === 68) {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};



window.addEventListener("keypress", function (event) {

  keyCode(event.keyCode);
});












































/*
//When using event.key;
function key(keyPress) {
    
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === "w" || keyPress === "W") {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === "a" || keyPress === "A") {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === "s" || keyPress === "S") {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === "d" || keyPress === "D") {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};
*/



/*
//When using event.code;
function code(keyPress) {
    
    console.log(keyPress);

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === "KeyW") {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === "KeyA") {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === "KeyS") {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === "KeyD") {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};
*/























































// var ball= document.getElementById('container');
// let move=10;
// window.addEventListener('load', function() {
//   ball.style.position="absolute";
//   ball.style.left=0;
//   ball.style.top=0;
//   ball.style.right=0;
//   ball.style.bottom=0;
// });


// window.addEventListener('keyup', function(event){
//     console.log(event.key);
//    if(event.key=='ArrowRight'){
//         ball.style.right=parseInt( ball.style.right)+move+'px';
//     }

//     else   if(event.key=='ArrowLeft'){
//            ball.style.left=parseInt( ball.style.left)-move+'px';
//        }
    
//    else if(event.key=='ArrowUp'){
//    ball.style.top=parseInt( ball.style.top)-move+'px';
// }

// else if(event.key=='ArrowDown'){
//   ball.style.bottom=parseInt( ball.style.bottom)+move+'px';
// }

// });