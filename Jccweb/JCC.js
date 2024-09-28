var navlink = document.getElementById("navlink");

function openmenu(){

    navlink.style.right = "0px";
}
function hidemenu(){

    navlink.style.right = "-200px";
}

let slideImg = document.querySelectorAll('img');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let dots = document.querySelectorAll('.dot');

var count = 1;

next.addEventListener('click', slideNext);

function slideNext(){

  slideImg[count].style.animation = 'next1 0.5s ease-in forwards';

  if(count == slideImg.length-2){

    count = 1;

  }else{

    count++;
  }

  slideImg[count].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}

prev.addEventListener('click', slidePrev);

function slidePrev(){

  slideImg[count].style.animation = 'prev1 0.5s ease-in forwards';

  if(count == 0){

    count = slideImg.length-1;

  }else{

    count--;

  }

  slideImg[count].style.animation = 'prev2 0.5s ease-in forwards';
  indicators();
}

function autoSliding(){

  deletInterval = setInterval(timer, 2000);

  function timer(){

    slideNext();
    indicators();
  }

}

autoSliding();


const container = document.querySelector('.slider');

container.addEventListener('mouseover', function(){

  clearInterval(deletInterval);

})

container.addEventListener('mouseout', autoSliding);

function indicators(){

  for(i = 0; i < dots.length; i++){

    dots[i].className = dots[i].className.replace(' active', '');
  }

  dots[count].className += ' active';
}  

