'use strict';

const goToSocialMedia = document.querySelector('.go-to-contact button');
const linkWrapper = document.querySelector('.social-media .links');
const contactBtn = document.querySelector('.contact-btn');
const contactWrapper = document.querySelector('.contact-me');
const contact = document.querySelector('.contact-me .contact');
const close = document.querySelector('.contact-me .close i');
const darkMode = document.querySelector('.dark-mode');
const darkModebtn = document.querySelector('.dark-mode i');

goToSocialMedia.addEventListener('click', () => {
    linkWrapper.classList.toggle('show-links');
});

contactBtn.addEventListener('click',() => {
    contactWrapper.style.display = 'flex';
    contact.style.display = 'block';
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
        contactWrapper.style.visibility = 'visible';
        contactWrapper.style.opacity = 1;
        contact.style.visibility = 'visible';
        contact.style.opacity = 1;
    },100)
})

close.addEventListener('click',() => {
    contactWrapper.style.visibility = 'hidden';
    contactWrapper.style.opacity = 0;
    contact.style.visibility = 'hidden';
    contact.style.opacity = 0;
    document.body.style.overflow = 'auto'
    setTimeout(() => {
        contactWrapper.style.display = 'none';
        contact.style.display = 'none';
    },300)
})

contactWrapper.addEventListener('click',(e) => {
    if(e.target.className.includes('contact-me')){
        contactWrapper.style.visibility = 'hidden';
        contactWrapper.style.opacity = 0;
        contact.style.visibility = 'hidden';
        contact.style.opacity = 0;
        document.body.style.overflow = 'auto'
        setTimeout(() => {
            contactWrapper.style.display = 'none';
            contact.style.display = 'none';
        },300)
    }
})


let isDark = true;

darkMode.addEventListener('click', () => {
    isDark = !isDark;
    if(isDark){
        document.documentElement.style.setProperty('--background','#5464de')
        document.documentElement.style.setProperty('--circle','#1f4b6df5')
        document.documentElement.style.setProperty('--links','#0e4375')
        document.documentElement.style.setProperty('--links-hover','#59d5ff');
        document.documentElement.style.setProperty('--text','#082744');
        document.documentElement.style.setProperty('--border-line','#ffffff7d');
        darkModebtn.classList.remove('fa-moon')
        darkModebtn.classList.add('fa-sun')
    }else{
        document.documentElement.style.setProperty('--background','#0f172a')
        document.documentElement.style.setProperty('--circle','#1f414c')
        document.documentElement.style.setProperty('--links','#35798f')
        document.documentElement.style.setProperty('--links-hover','#abe1f3')
        document.documentElement.style.setProperty('--text','#52dae4');
        document.documentElement.style.setProperty('--border-line','#bee8fc30');
        darkModebtn.classList.remove('fa-sun')
        darkModebtn.classList.add('fa-moon')
    }
})

const gear = document.querySelector('.gear');

window.addEventListener('load', () => {
    setTimeout(() => {
        gear.style.visibility = 'hidden';
        gear.style.opacity = 0;
    }, 3000)
    setTimeout(() => {
        gear.style.display = 'none';
    }, 4000)
})