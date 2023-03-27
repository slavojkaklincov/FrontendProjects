//Brojac

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDisplays2 = document.querySelectorAll(".kkum");
let interval2 = 4000;

valueDisplays2.forEach((valueDisplays2) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays2.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays2.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDisplays3 = document.querySelectorAll(".llum");
let interval3 = 15000;

valueDisplays3.forEach((valueDisplays3) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays3.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays3.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDisplays4 = document.querySelectorAll(".oonum");
let interval4 = 880;

valueDisplays4.forEach((valueDisplays4) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays4.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays4.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



// Smooth Scrolling
$("#header a, #footer a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 20,
      },
      800
    );
  }
});
