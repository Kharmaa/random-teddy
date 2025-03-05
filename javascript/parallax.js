//Parallaxheader

const parallax_el = document.querySelectorAll(".parallaxhead");

//Muuttujiin
let xValue = 0,
  yValue = 0,
  rotateDegree = 0,
  rotateSpeed = 1;

//Mad effects..

function updateParallaxEffect(e) {
  xValue = (e.clientX - window.innerWidth / 2) * 0.5;
  yValue = (e.clientY - window.innerHeight / 2) * 0.5;
  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  parallax_el.forEach((el) => {
    let speedx = parseFloat(el.dataset.speedx) || 0.1;
    let speedy = parseFloat(el.dataset.speedy) || 0.1;

    el.style.transform = `
                translateX(calc(-50% + ${xValue * speedx}px))
                translateY(calc(-50% + ${yValue * speedy}px))
                rotateY(${rotateDegree * rotateSpeed}deg)
                `;
  });
}

window.addEventListener("mousemove", updateParallaxEffect);
