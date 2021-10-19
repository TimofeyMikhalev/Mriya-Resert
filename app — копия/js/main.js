        //Slide

// /* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("wellness__container");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
        slide.classList.remove('fade');
    }   
    slides[slideIndex - 1].style.display = "flex"; 
    slides[slideIndex - 1].classList.add('fade');
}


    // Tabs


// /* Устанавливаем индекс слайда по умолчанию */
let tabsIndex = 1;
tabsSlides(tabsIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextTabs() {
    tabsSlides(tabsIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousTabs() {
    tabsSlides(tabsIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentTabs(n) {
    tabsSlides(tabsIndex = n);
}

/* Функция перелистывания */
function tabsSlides(n) {
    let i;
    let tabs = document.getElementsByClassName("sloder__products");
    let title = document.getElementsByClassName("subtitle__title");
   
    
    if (n > tabs.length) {
        tabsIndex = 1
    }
    if (n < 1) {
        tabsIndex = tabs.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of tabs) {
        slide.style.display = "none";
        slide.classList.remove('fade');
    }   
    for (let tab of title) {
        tab.classList.remove('action');
    }  
    
    tabs[tabsIndex - 1].style.display = "flex"; 
    tabs[tabsIndex - 1].classList.add('fade');
    title[tabsIndex - 1].classList.add('action');
 
}



            // Popap


    // const   prev = document.querySelector('.inner__btn_left'),
            // next = document.querySelector('.inner__btn_right'),
    let slides = document.querySelectorAll('.popap__slider_items'),
        dots = document.querySelectorAll('.box__cicle');
    
    let index = 0;
    
    //активный слайд ставить
    const activeSlide = n => {
    
        for(popap__slider_img of slides) {
            popap__slider_img.classList.remove('action');
        }
        slides[n].classList.add('action');
    }
    
    //делаем дотсы активными
    const activeDot = n => {
    
        for(box__cicle of dots) {
            box__cicle.classList.remove('action');
        }
        dots[n].classList.add('action');
    }
    
    const prepareCurrentSlide = ind => {
        activeSlide(ind);
        activeDot(ind);
    }
    
    //делам слайд цикличным и двигаемся вперед по слайдам
    const nexttSlide = setInterval(() => {
        if(index == slides.length - 1){
            index = 0;
            prepareCurrentSlide(index);
        } else {
            index++;
            prepareCurrentSlide(index);
        }
        
    },3000)


    // делам слайд цикличным и двигаемся назад по слайдам
    const prevvSlide = () => {
        if(index == 0){
            index = slides.length - 1;
            prepareCurrentSlide(index);
        } else {
            index--;
            prepareCurrentSlide(index);
        }
    }
    
    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurrentSlide(index);
        });
    });
    
   

            //Modal

const   modalTrigger = document.querySelector('.inner__menu'),
        modal = document.querySelector('.popap'),
        modlaCloseBtn = document.querySelector('popap__menu_close');
        all = document.querySelector('.wrapper');

        modalTrigger.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            all.style.opacity = ".4";
           
        
            document.body.style.overflow = 'hidden'; // чтобы не проскроливалась страница когда окно открыто
        });


        //чтобы закрывать modal при клике за его приделы
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    }); 

//чтобы закрывать modal при клике за его Нажатии escape
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        } 
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        all.style.opacity = "1";

        document.body.style.overflow = '';
    }




    let open = document.getElementById('Service');
    let close = document.getElementById('Services');
        open.onmouseover = function() { 
            close.style.opacity = '1';
        }
        
   