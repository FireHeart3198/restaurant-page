const content = document.getElementById('content');

const loadBookings = function() {
    const bookings = document.createElement('h3');
    bookings.textContent = "Bookings";

    const phone = document.createElement('p');
    phone.textContent = "Please call 1477147177417 to make a booking";

    const bookingContainer = document.createElement('div');
    bookingContainer.classList.add('booking-container');

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const ul = document.createElement('ul');
    hours.appendChild(ul);

    for (let i = 0; i < 7; i++) {
        const li = document.createElement('li');
        const div1 = document.createElement('div');
        div1.classList.add('day');
        div1.textContent = addDay(i);
        const div2 = document.createElement('div')
        div2.classList.add('time');
        div2.textContent = addTime(i);
        li.append(div1, div2);
        ul.appendChild(li);
    }


    function addDay(i) {
        if (i === 0) {
            return "Monday"
        } else if (i === 1) {
            return "Tuesday"
        } else if (i === 2) {
            return "Wednesday"
        } else if (i === 3) {
            return "Thursday"
        } else if (i === 4) {
            return "Friday"
        } else if (i === 5) {
            return "Saturday"
        } else if (i === 6) {
            return "Sunday"
        }
    }

    function addTime(i) {
        if (i === 0) {
            return "1am - 5am"
        } else if (i === 1) {
            return "1am - 5am"
        } else if (i === 2) {
            return "4am - 5am"
        } else if (i === 3) {
            return "1am - 5am"
        } else if (i === 4) {
            return "1am - 2am"
        } else if (i === 5) {
            return "3am - 5am"
        } else if (i === 6) {
            return "3am - 5am"
        }
    }

    const bookingInfo = document.createElement('div');
    bookingInfo.classList.add('booking-info');

    const bookingInfoContent = document.createElement('p');
    bookingInfoContent.textContent = "Be ready to answer an in-depth and personal questionnaire so our chefs can accurately create a wildly delicious and deliciously wild course for you.";

    bookingInfo.append(phone, bookingInfoContent);

    const picture = document.createElement('img');
    picture.setAttribute('src', '/src/images/storm.jpeg');

    bookingContainer.append(hours, bookingInfo);

    content.append(bookings, bookingContainer, picture);

}

export { loadBookings };