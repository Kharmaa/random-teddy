//This bear needs some movements,, right..!?

function restartAnimation() {
  let mouth = document.querySelector(".mouth");
  mouth.style.animation = "none";
  setTimeout(() => {
    mouth.style.animation = "mouth-open 4s ease-in-out 1";
  }, 3000);
}

setInterval(restartAnimation, 12000);

//ahh,, those eyes..This will make them follow your mouse movements.

document.addEventListener("mousemove", (event) => {
  let eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    let iris = eye.querySelector(".iris");
    let eyeRect = eye.getBoundingClientRect();

    // This will get the center of the eyeball
    let eyeCenterX = eyeRect.left + eyeRect.width / 2;
    let eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Angles
    let deltaX = event.clientX - eyeCenterX;
    let deltaY = event.clientY - eyeCenterY;
    let angle = Math.atan2(deltaY, deltaX);

    // Iris won't move over eyeball
    let maxMove = 10;
    let irisX = Math.cos(angle) * maxMove;
    let irisY = Math.sin(angle) * maxMove;

    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
  });
});
