AOS.init();
let slideshow = document.querySelector(".news");

let i = 1;
let intervalID = 1;
function nextSlideshow() {
  i++;
  if (i > 3) {
    i = 1;
  }
  slideshow.setAttribute("src", `./assets/img/news/berita${i}.png`);
}

function startSlideshow() {
  if (intervalID === 1) {
    intervalID = setInterval(nextSlideshow, 2000);
  }
}

startSlideshow();

function toTop() {
  document.querySelector(".to-top").addEventListener("click", () => {
    scrollTo(0, 0);
  });
}

toTop();
