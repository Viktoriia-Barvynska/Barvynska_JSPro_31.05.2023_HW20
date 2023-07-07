//=================HW20==================
const images = ['1.jpg', '2.jpg', '3.png', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',]; // Масив зображень
let currentIndex = 0; // Поточний індекс зображення

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const sliderImage = document.querySelector('.slider-image');

// Функція для встановлення зображення на слайдер
function setSliderImage(index) {
  const imageSrc = images[index];
  sliderImage.src = imageSrc;

  // Перевірка наявності наступного та попереднього зображення
  if (index === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (index === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

// Обробник події для кнопки Next
nextButton.addEventListener('click', function() {
  currentIndex++;
  setSliderImage(currentIndex);
});

// Обробник події для кнопки Prev
prevButton.addEventListener('click', function() {
  currentIndex--;
  setSliderImage(currentIndex);
});

// Ініціалізація початкового зображення
setSliderImage(currentIndex);