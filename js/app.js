/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticy', window.scrollY > 100);
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/
// const navArr = ['home', 'about', 'services', 'portfolio', 'contact'];

// const header = document.createElement('header');
// const navbar = document.createElement('nav');
// const logo = document.createElement('a');
// const menuIcon = document.createElement('i');

// header.setAttribute('class', 'header');
// header.append(logo, menuIcon, navbar);
// logo.textContent = 'Portfolio';
// logo.setAttribute('class', 'logo');
// menuIcon.setAttribute('class', 'bx bx-menu');
// menuIcon.setAttribute('id', 'menu-icon');
// navbar.setAttribute('class', 'navbar');

// navArr.forEach((element) => {
//   const menuItem = document.createElement('a');

//   if (element === 'home') {
//     menuItem.setAttribute('class', 'active');
//   }

//   menuItem.setAttribute('href', `#${element}`);
//   menuItem.textContent = element.slice(0, 1).toUpperCase() + element.slice(1);

//   navbar.appendChild(menuItem);
// });

// document.querySelector('body').appendChild(header);

// //section

// const socialMediaArray = ['facebook', 'twitter', 'instagram', 'linkedin'];
// const section = document.createElement('section');
// section.setAttribute('class', 'home');
// section.setAttribute('id', 'home');
// const homeContentDiv = document.createElement('div');
// homeContentDiv.setAttribute('class', 'home-content');
// const h3Intro = document.createElement('h3');
// h3Intro.textContent = "Hello, It's Me";
// const h1Section = document.createElement('h1');
// h1Section.textContent = 'Tommy Flinch';
// const h3P = document.createElement('h3');
// h3P.textContent = "And I'm a ";
// const spanH3 = document.createElement('span');
// spanH3.textContent = 'Frontend Engineer';
// h3P.append(spanH3);
// const paragraph = document.createElement('p');
// paragraph.textContent =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorum voluptatibus quo natus ire sint ex voluptatem.';
// const socialMediaDiv = document.createElement('div');
// socialMediaDiv.setAttribute('class', 'social-media');

// socialMediaArray.forEach((element) => {
//   const socialItem = document.createElement('a');
//   socialItem.setAttribute('href', '#');
//   const icon = document.createElement('i');
//   icon.setAttribute('class', `bx bxl-${element}`);
//   socialItem.appendChild(icon);

//   socialMediaDiv.appendChild(socialItem);
// });

// const download = document.createElement('a');
// download.setAttribute('class', 'btn');
// download.textContent = 'Download CV';

// const homeImgDiv = document.createElement('div');
// const profileImg = document.createElement('img');
// homeImgDiv.setAttribute('class', 'home-img');
// profileImg.setAttribute('src', './images/personal-portfolio-pic.png');
// homeImgDiv.appendChild(profileImg);
// homeContentDiv.append(
//   h3Intro,
//   h1Section,
//   h3P,
//   paragraph,
//   socialMediaDiv,
//   download
// );
// section.append(homeContentDiv, homeImgDiv);

// document.querySelector('body').appendChild(section);
