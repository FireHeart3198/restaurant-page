const content = document.getElementById('content');

const loadHome = function() {
    const home = document.createElement('div');
    home.classList.add('home');
    
    const image = document.createElement('img');
    image.setAttribute("src", "/src/images/electric-image.jpg");
    image.setAttribute("height", "500px");

    const about = document.createElement('div');
    const blurb1 = document.createElement('p');
    blurb1.textContent = "We're dedicated to producing a catered and curated experience to our customers who might be a bit out there in terms of taste.";
    const blurb2 = document.createElement('p');
    blurb2.textContent = "You're one of those the people who fried their tongues off by downing 10 warheads.";
    const blurb3 = document.createElement('p');
    blurb3.textContent = "Who thought glue was the perfect chaser to a good nap time.";
    const blurb4 = document.createElement('p');
    blurb4.textContent = "And who realised that sand could have so many different complexities and notes.";
    const blurb5 = document.createElement('p');
    blurb5.textContent = "You've been fruitlessly chasing the echos of that sensation into adulthood in this ever increasing safe gastronomic purview. We're here to give you that oh so nostalgic taste once again!.";

    about.append(blurb2, blurb3, blurb4, blurb5);

    home.append(image, about);

    content.append(blurb1, home)

}

export { loadHome };