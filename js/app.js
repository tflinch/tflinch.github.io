/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/
const navArr = ['home', 'about', 'services', 'portfolio', 'contact'];

const header = document.createElement('header');
const navbar = document.createElement('nav');
const logo = document.createElement('a');
const menuIcon = document.createElement('i');

header.setAttribute('class', 'header');
header.append(logo, menuIcon, navbar);
logo.textContent = 'Portfolio';
logo.setAttribute('class', 'logo');
menuIcon.setAttribute('class', 'bx bx-menu');
menuIcon.setAttribute('id', 'menu-icon');
navbar.setAttribute('class', 'navbar');

navArr.forEach((element) => {
  const menuItem = document.createElement('a');

  if (element === 'home') {
    menuItem.setAttribute('class', 'active');
  }

  menuItem.setAttribute('href', element);
  menuItem.textContent = element.slice(0, 1).toUpperCase() + element.slice(1);

  navbar.appendChild(menuItem);
});

document.querySelector('body').appendChild(header);
