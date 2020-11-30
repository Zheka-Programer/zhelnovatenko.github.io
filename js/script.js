(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 83) {
            header.classList.add('header__active');
        }
        else {
            header.classList.remove('header__active');
        }
    }
}());

//Burger handler

(function(){

    const burgerItem = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.header__navbar');
    burgerItem.addEventListener('click', () => {
        navbar.classList.add('header__navbar-active');
    })
    const cross = document.querySelector('.header__navbar-close');
    cross.addEventListener('click', () => {
        navbar.classList.remove('header__navbar-active');
    })

    const menuLinks = document.querySelectorAll('.header__link');
    if (window.innerWidth <= 630) {
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('header__navbar-active');
            })
        })
    }
}());

(function () {
    const answers = document.querySelectorAll('.answer__list-title')
    answers.forEach(title => {
        title.addEventListener('click', () => {
            /* console.log(1); */
            let text = title.nextElementSibling
            if (text.classList.length === 1){
                text.classList.add('js-list-item-active')
                title.classList.add('js-list-item-title-active')
            }
            else if (text.classList.length === 2){
                text.classList.remove('js-list-item-active')
                title.classList.remove('js-list-item-title-active')
            }
        });
    });
}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());