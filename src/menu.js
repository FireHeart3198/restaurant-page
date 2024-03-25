import img1 from "/src/images/octopus-check.jpeg";
import img2 from "/src/images/melting-main.jpeg";
import img3 from "/src/images/green-cake.jpeg";
import img4 from "/src/images/pink-dessert.jpeg";
import img5 from "/src/images/green-main.jpeg";
import img6 from "/src/images/purple-dessert.jpeg";

const content = document.getElementById('content');

const loadMenu = function() {
    const menuTitle = document.createElement('h3');
    menuTitle.textContent = "Our Menu";

    const menuSubtitle = document.createElement('p');
    menuSubtitle.textContent = "Our menu is unique to every individual that enters however here is a sampler of previous creations.";

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const menuFlex = document.createElement('div');
    menuFlex.classList.add('menu-flex');
    const top = document.createElement('div');
    top.classList.add('top');
    const bottom = document.createElement('div');
    bottom.classList.add('bottom');

    const pic1 = document.createElement('img');
    pic1.setAttribute("src", img1);
    const pic2 = document.createElement('img');
    pic2.setAttribute("src", img2);
    const pic3 = document.createElement('img');
    pic3.setAttribute("src", img3);
    const pic4 = document.createElement('img');
    pic4.setAttribute("src", img4);
    const pic5 = document.createElement('img');
    pic5.setAttribute("src", img5);
    const pic6 = document.createElement('img');
    pic6.setAttribute("src", img6);

    top.append(pic1, pic2, pic3)
    bottom.append(pic4, pic5, pic6)
    menuContainer.append(top, bottom)

    content.append(menuTitle, menuSubtitle, menuContainer)

}


export { loadMenu };