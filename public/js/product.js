const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
      item.addEventListener('click', () => {
            productImages[activeImageSlide].classList.remove('active');
            item.classList.add('active');
            productImageSlide.style.backgroundImage = `url('${item.src}')`
            activeImageSlide = i;
      })
})

// size buttom
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
      item.addEventListener('click', () => {
            sizeBtns[checkedBtn].classList.remove('check');
            item.classList.add('check');
            checkedBtn = 1;
      })
})

const plus = document.querySelector(".plus"),
      minus = document.querySelector(".minus"),
      num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
});

minus.addEventListener("click", () => {
      if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
      }
});