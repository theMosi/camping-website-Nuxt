<template>
    <header class="header">
            <div class="container">
                <div class="nav">
                    <div class="nav__wrapper">
                        <a href="#" class="app-logo">
                            <img src="/images/svgs/logo.svg" alt="Hmm" class="app-logo__img" loading="lazy">
                        </a>

                        <ul class="menu">
                            <li class="menu__item">
                                <a href="#" class="menu__link menu__link--active">Home</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Destination</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Near me</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Events</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Blog</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Gallery</a>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-menu">
                        <h2 class="nav-menu__title">Camping Website</h2>
                        <ul class="mobile-menu">
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link">Home</a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link">Destination</a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link">Near me</a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link">Events</a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link">Blog</a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link">Gallery</a>
                            </li>
                        </ul>
                       
                        <div href="#" class="nav-menu__links">
                            <a href="#" class="nav-menu__link">Sign up</a>
                            <a href="#" class="nav-menu__link nav-menu__link--border">Sign in</a>
                        </div>
                    </div>

                    <div href="#" class="header__links">
                        <a href="#" class="header__link">Sign up</a>
                        <a href="#" class="header__link header__link--border">Sign in</a>
                    </div>
                    
                        <div class="nav__btn">
                        <span class="nav__btn-line"></span>
                        </div>                  
                </div>
                
                <div class="header__content">
                    <h1 class="header__title">Find Yourself Outside.</h1>
                    <p class="header__text">Hmm Hpsum is a fictional text by me and you gonna read this because I decide
                        this for you.</p>
                    <a class="btn header__discover-button">Discover</a>
                </div>
            </div>
        </header>
</template>

<script setup>
console.log('Naya Injoor JaHa');

if(process.client){
    let navOpen = ref(false);
    let navBtnElem = document.querySelector('.nav__btn');
    let navMenuElem = document.querySelector('.nav-menu');

    navBtnElem.addEventListener('click',openMenu);
    function openMenu() {
        if(navOpen.value){

            navBtnElem.classList.remove('nav__btn--open');
            navMenuElem.classList.remove('nav-menu--open');

            navOpen.value=false;
        }else {
            navBtnElem.classList.add('nav__btn--open');
            navMenuElem.classList.add('nav-menu--open');

            navOpen.value=true;
        }
    }
}


</script>