const images = [...document.querySelectorAll('.image')];
const poper = document.querySelector('.poper');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

images.forEach((items, i) => {
  item.addEventListener('click', () => {
    updateImage(i);
    poper.classList.toggle('active');
  });
});
const updateImage = (i) => {
  let path = `images/rescue/Rescue${i + 1}.png`;
  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHtml = `0${i + 1}`;
  index = i;
};
closeBtn.addEventListener('click', () => {
  poper.classList.toggle('active');
});
