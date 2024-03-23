import { loadBookings } from "./bookings.js";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";


function activateTabs() {
    const tabs = document.querySelectorAll('button');
    const page = document.getElementById('content');

    function clearPage() {
        page.replaceChildren();
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            clearPage();
            const buttonName = tab.textContent;
            if (buttonName === "Home") {
                loadHome();
            } else if (buttonName === "Menu") {
                loadMenu();
            } else if (buttonName === "Bookings") {
                loadBookings();
            }
        });
    });
}

loadHome();
activateTabs();