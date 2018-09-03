import $ from 'jquery';

$('#year').text(new Date().getFullYear());

window.onload = function() {
  var base = document.getElementById('base');
  var posX = base.getBoundingClientRect().x;
  var sliders = document.getElementById('sliders');
  sliders.style.marginLeft = `${posX}px`;

  window.addEventListener('resize', function() {
    posX = base.getBoundingClientRect().x;
    sliders.style.marginLeft = `${posX}px`;
  });

  let links = document.querySelectorAll('a');

  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  }

  // Slider 1
  let slider = $('#slider1'),
    sliderList = $('#slider1-container'),
    firstItem = sliderList.find('.card:first'),
    secondItem = firstItem.next(firstItem);

  firstItem.clone().appendTo(sliderList);

  let sliderItems = sliderList.find('.card'),
    itemWidth = sliderItems.eq(0).width(),
    widthArray = [];

  for (const item of sliderItems) {
    widthArray.push($(item).width());
  }

  function sum(array) {
    return array.reduce((prevVal, val) => prevVal + val);
  }

  console.log(`Slider1: ${widthArray}`);

  sliderList.css('width', sum(widthArray));

  function moveSlide() {
    firstItem = sliderList.find('.card:first');
    secondItem = firstItem.next(firstItem);
    firstItem.remove();
    secondItem.clone().appendTo(sliderList);
    sliderList.css('margin-left', 0);
    itemWidth = secondItem.width();
  }

  function changeSlide() {
    sliderList.animate({ 'margin-left': -itemWidth }, 600, moveSlide);
  }

  var autoSlide = setInterval(changeSlide, 5000);

  slider.hover(
    function() {
      clearInterval(autoSlide);
    },
    function() {
      autoSlide = setInterval(changeSlide, 5000);
    }
  );

  // Slider 2
  let slider2 = $('#slider2'),
    sliderList2 = $('#slider2-container'),
    firstItem2 = sliderList2.find('.card:first'),
    secondItem2 = firstItem2.next(firstItem2);

  firstItem2.clone().appendTo(sliderList2);

  let sliderItems2 = sliderList2.find('.card'),
    itemWidth2 = sliderItems2.eq(0).width(),
    widthArray2 = [];

  for (const item of sliderItems2) {
    widthArray2.push($(item).width());
  }

  sliderList2.css('width', sum(widthArray2));

  console.log(`Slider1: ${widthArray2}`);

  function moveSlide2() {
    firstItem2 = sliderList2.find('.card:first');
    secondItem2 = firstItem2.next(firstItem2);
    firstItem2.remove();
    secondItem2.clone().appendTo(sliderList2);
    sliderList2.css('margin-left', 0);
    itemWidth2 = secondItem2.width();
  }

  function changeSlide2() {
    sliderList2.animate({ 'margin-left': -itemWidth2 }, 600, moveSlide2);
  }

  var autoSlide2 = setInterval(changeSlide2, 7500);

  slider2.hover(
    function() {
      clearInterval(autoSlide2);
    },
    function() {
      autoSlide2 = setInterval(changeSlide2, 7500);
    }
  );
};
