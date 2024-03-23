const content = document.getElementById('content');

const loadMenu = function() {
    const menuTitle = document.createElement('h3');
    menuTitle.textContent = "Our Menu";

    const menuSubtitle = document.createElement('p');
    menuSubtitle.textContent = "Our menu is unique to every individual that enters however here is a sampler of previous creations.";

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const pic1 = document.createElement('img');
    pic1.setAttribute("src", "/src/images/octopus-check.jpeg");
    pic1.setAttribute("height", "300px");
    const pic2 = document.createElement('img');
    pic2.setAttribute("src", "/src/images/melting-main.jpeg");
    pic2.setAttribute("height", "300px");
    const pic3 = document.createElement('img');
    pic3.setAttribute("src", "/src/images/green-cake.jpeg");
    pic3.setAttribute("height", "300px");
    const pic4 = document.createElement('img');
    pic4.setAttribute("src", "/src/images/pink-dessert.jpeg");
    pic4.setAttribute("height", "300px");
    const pic5 = document.createElement('img');
    pic5.setAttribute("src", "/src/images/green-main.jpeg");
    pic5.setAttribute("height", "300px");
    const pic6 = document.createElement('img');
    pic6.setAttribute("src", "/src/images/purple-dessert.jpeg");
    pic6.setAttribute("height", "300px");

    menuContainer.append(pic1, pic2, pic3, pic4, pic5, pic6)

    content.append(menuTitle, menuSubtitle, menuContainer)

}


export { loadMenu };