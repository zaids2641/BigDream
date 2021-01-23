const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const spanLeft = document.querySelector('.span-left');
const spanRight = document.querySelector('.span-right');
const home = document.querySelector('.nav-items-home');
const about = document.querySelector('.nav-items-about');
const contact = document.querySelector('.nav-items-contact');





const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider,1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo,0.5, {opacity: "0", x: "30"}, {opacity: "1", x: "0"}, "-=0.5")
.fromTo(hamburger,0.5, {opacity: "0", x: "-30"}, {opacity: "1", x: "0"}, "-=0.5")

.fromTo(home,0.5, {opacity: "0", x: "-30"}, {opacity: "1", x: "0"}, "-=0.5")
.fromTo(about,0.5, {opacity: "0", x: "-30"}, {opacity: "1", x: "0"}, "-=0.4")
.fromTo(contact,0.5, {opacity: "0", x: "-30"}, {opacity: "1", x: "0"}, "-=0.3")

.fromTo(headline,0.5, {opacity: "0", x: "30"}, {opacity: "1", x: "0"}, "-=0.5")
.fromTo(spanLeft,0.5, {opacity: "0", x: "30"}, {opacity: "1", x: "0"}, "-=0.5")
.fromTo(spanRight,0.5, {opacity: "0", x: "-30"}, {opacity: "1", x: "0"}, "-=0.5")