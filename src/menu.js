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
    pic1.setAttribute("src", "/src/images/octopus-check.jpeg");
    const pic2 = document.createElement('img');
    pic2.setAttribute("src", "/src/images/melting-main.jpeg");
    const pic3 = document.createElement('img');
    pic3.setAttribute("src", "/src/images/green-cake.jpeg");
    const pic4 = document.createElement('img');
    pic4.setAttribute("src", "/src/images/pink-dessert.jpeg");
    const pic5 = document.createElement('img');
    pic5.setAttribute("src", "/src/images/green-main.jpeg");
    const pic6 = document.createElement('img');
    pic6.setAttribute("src", "/src/images/purple-dessert.jpeg");

    top.append(pic1, pic2, pic3)
    bottom.append(pic4, pic5, pic6)
    menuContainer.append(top, bottom)

    content.append(menuTitle, menuSubtitle, menuContainer)

}


export { loadMenu };