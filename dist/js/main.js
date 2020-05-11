// const vs let vs var
// 1, use const by default for values that never change
// 2, let if you need to reassign, block scoped(inside {} braces)
// 3, var within function or entire program


// Select useful DOM items
const menuBtn = document.querySelector('.menu-btn'); // get the first item in the documen with class = '.btn-menu'
const menu = document.querySelector('.menu'); // get the first item in the documen with class = '.btn-menu'
const menuNav = document.querySelector('.menu-nav'); // get the first item in the documen with class = '.btn-menu'
const menuBranding = document.querySelector('.menu-branding'); // get the first item in the documen with class = '.btn-menu'
const navItems = document.querySelectorAll('.nav-item');


// Set initial state of menu
let showMenu = false; // true if menu icon clicked, false otherwise + initially

menuBtn.addEventListener('click', toggleMenu); // add EventListener(<which event>, <do what?>)

function toggleMenu() {
    // == compare 2 vairble but ignores datatype
    // === compare 2 vairbale + checks datatype is the same
    if (showMenu == false) {
        // when menu is not shown and user clicked the menu icon

        // add class 'show' to class that should show, 'close' to others
        // classlist property returns all classes of an element
        // add can add one or more classes to an element(ignore duplicate)
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); // add 'show' class for each nav-item in navItems array

        // set Menu State
        showMenu = true;
    } else {
        // when menu is shown and user clicked the menu icon

        // remove classes that was added to show menu option
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // set Menu State
        showMenu = false;
    }
}


