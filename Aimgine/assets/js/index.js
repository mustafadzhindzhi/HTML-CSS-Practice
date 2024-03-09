/**HOME */
document.addEventListener('DOMContentLoaded', function () {
    // Services
    const designButtons = document.querySelectorAll('.services__design .toggle-button');

    const infoArray = {
        "UI/UX DESIGN": "Text for UI/UX DESIGN.",
        "WEB DESIGN": "Text WEB DESIGN.",
        "WEBSITE DEVELOPMENT": "Text for WEBSITE DEVELOPMENT."
    };

    designButtons.forEach(button => {
        button.addEventListener('click', function () {
            const designDiv = this.parentElement;
            const isClicked = designDiv.classList.toggle('clicked');
            const contentSpace = document.createElement('div');
            contentSpace.classList.add('content-space');

            if (isClicked) {
                const hiddenSpace = document.createElement('div');
                hiddenSpace.classList.add('hidden-space');
                const info = infoArray[designDiv.dataset.info];
                hiddenSpace.innerHTML = `<h2>${info}</h2>`;
                designDiv.insertAdjacentElement('afterend', hiddenSpace);
            } else {
                const nextElement = designDiv.nextElementSibling;
                if (nextElement && nextElement.classList.contains('hidden-space')) {
                    nextElement.remove();
                }
            }
        });
    });

    // Features 
    const cardsContainer = document.querySelector('.features__cards');
    const cards = document.querySelectorAll('.features__cards-card');
    const leftButton = document.querySelector('.arrow-button:first-child');
    const rightButton = document.querySelector('.arrow-button:last-child');

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;

    function moveCardsLeft() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateButtons();
        moveCards();
    }

    function moveCardsRight() {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        updateButtons();
        moveCards();
    }

    function moveCards() {
        const translateX = `-${currentIndex * cardWidth}px`;
        cardsContainer.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        cardsContainer.style.transform = `translateX(${translateX}) translateZ(0)`;
    }

    function updateButtons() {
        leftButton.disabled = currentIndex === 0;
        rightButton.disabled = currentIndex === cards.length - 2;
    }

    leftButton.addEventListener('click', moveCardsLeft);
    rightButton.addEventListener('click', moveCardsRight);

    leftButton.disabled = true;
});

/**What We Do */
document.addEventListener('DOMContentLoaded', function () {
    // UI/UX Design
    const h4Elements = document.querySelectorAll('.web__design-content h4');
    const contentDivs = document.querySelectorAll('.web__design-ilu');

    h4Elements.forEach((h4, index) => {
        h4.addEventListener('click', function (event) {
            event.preventDefault();

            h4Elements.forEach(element => {
                element.classList.remove('active');
            });

            this.classList.add('active');

            contentDivs.forEach(div => {
                div.style.display = 'none';
            });

            contentDivs[index].style.display = 'block';
        });
    });

    h4Elements[0].click();

    // Some of our work
    const someWorkRightDivs = document.querySelectorAll('.some__work-right-div');
    const container = document.querySelector('.some__work-right');
    const leftButton = document.querySelector('.buttons button:first-child');
    const rightButton = document.querySelector('.buttons button:last-child');

    let currentIndex = 0;

    function moveDivsLeft() {
        currentIndex = Math.max(currentIndex - 1, 0);
        moveDivs();
    }

    function moveDivsRight() {
        currentIndex = Math.min(currentIndex + 1, someWorkRightDivs.length - 1);
        moveDivs();
    }

    function moveDivs() {
        const containerWidth = container.clientWidth;
        const step = containerWidth / (someWorkRightDivs.length * 2);
        const translateX = `${-currentIndex * step}px`;

        someWorkRightDivs.forEach((div) => {
            div.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
            div.style.transform = `translateX(${translateX}) translateZ(0)`;
        });
    }

    leftButton.addEventListener('click', moveDivsLeft);
    rightButton.addEventListener('click', moveDivsRight);
});

/**NAVIGATION */
function toggleMenu() {
    let nav = document.getElementById("main-nav");
    nav.classList.toggle("active");

    let body = document.body;
    body.classList.toggle("nav-active");

    if (body.classList.contains("nav-active")) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
}























