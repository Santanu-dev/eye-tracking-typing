var inputField = document.querySelector(".input");
// var leftEye = document.querySelector(".left-eye");
// var rightEye = document.querySelector(".right-eye");

var eyeballs = document.querySelectorAll(".eyeball");

// var { offsetLeft: eyeLeft, offsetTop: eyeRight } = eyeballs;

let currInputPos = 0;
let lastCaretPos = 0;
let rightPos = 16;

inputField.addEventListener("keydown", (event) => {
  currInputPos = event.target.selectionStart;

  if (rightPos >= 16 && rightPos < 71) {
    if (event.key === "Backspace") {
      lastCaretPos -= 3;
      rightPos = lastCaretPos + 15;
      eyeballs[0].style.right = rightPos + '%';
      eyeballs[1].style.right = rightPos + '%';
    } else {
      lastCaretPos += 3;
      rightPos = lastCaretPos + 15;
      eyeballs[0].style.right = rightPos + '%';
      eyeballs[1].style.right = rightPos + '%';
    }
  }

  if(rightPos >= 71){
    rightPos = 75;
    if (event.key === "Backspace") {
        lastCaretPos -= 3;
        rightPos = lastCaretPos + 15;
        eyeballs[0].style.right = rightPos + '%';
        eyeballs[1].style.right = rightPos + '%';
    }
  }

  if(rightPos <= 16){
    rightPos = 15;
    if (event.key !== "Backspace") {
        lastCaretPos += 3;
      rightPos = lastCaretPos + 15;
      eyeballs[0].style.right = rightPos + '%';
      eyeballs[1].style.right = rightPos + '%';
    }
  }

  //console.log(rightPos);
});

//eyeballs.setAttribute('eyeballPos', rightPos);
//eyeballs.style.setProperty('--eyeballPos', rightPos);
