/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    /* mousewheel: true,
    keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },

    /* mousewheel: true,
    keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

function elizaResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! How can I assist you in exploring Son Nguyen Hoang's professional background and projects today?";
    } else if (lowerMessage.includes("how are you")) {
        return "I'm a digital assistant designed to provide insights into Son's skills and achievements. How can I assist you?";
    } else if (lowerMessage.includes("search")) {
        return "You can explore Son's projects and skills on this website, or ask me specific questions for more details.";
    } else if (lowerMessage.includes("thank")) {
        return "You're welcome! If you have any more questions or need further information, feel free to ask.";
    } else if (lowerMessage.includes("who are you")) {
        return "I'm a digital assistant designed to guide you through Son Nguyen Hoang's professional portfolio.";
    } else if (lowerMessage.includes("skills") || lowerMessage.includes("experience")) {
        return "Son has extensive experience as a full-stack developer, skilled in AWS, Django, RESTful APIs, and more. He has worked on AI, web development and has leadership experience with the Google Student Developer Clubs.";
    } else if (lowerMessage.includes("projects")) {
        return "Son has contributed to projects like RecipeGenie, MovieVerse, and is developing CommunitySphere. He also enhanced facial and user habit recognition at VNG Corporation.";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("connect")) {
        return "You can connect with Son through the contact form on this website or explore his LinkedIn profile linked here.";
    } else if (lowerMessage.includes("internship") || lowerMessage.includes("job")) {
        return "Son has experience as a software engineering intern at VNG Corporation and is always open to new opportunities to apply his skills and contribute to innovative projects.";
    } else if (lowerMessage.includes("education")) {
        return "Son is pursuing a Bachelor of Science in Computer Science and a Bachelor of Arts in Economics from The University of North Carolina at Chapel Hill.";
    } else if (lowerMessage.includes("vng corporation")) {
        return "At VNG Corporation, Son played a significant role in AI and web development. He contributed to ZaloAI and TrueID, enhancing facial and user habit recognition using advanced technologies.";
    } else if (lowerMessage.includes("vng")) {
        return "At VNG Corporation, Son played a significant role in AI and web development. He contributed to ZaloAI and TrueID, enhancing facial and user habit recognition using advanced technologies.";
    } else if (lowerMessage.includes("leadership")) {
        return "Son exhibited leadership as the Software Engineering Team Leader for the Google Student Developer Clubs. He organized weekly meetings, trained members, and reviewed codes.";
    } else if (lowerMessage.includes("microsoft student ambassador")) {
        return "Son is an active Microsoft Learn Student Ambassador where he has created a platform for knowledge exchange and collaboration among peers.";
    } else if (lowerMessage.includes("programming languages") || lowerMessage.includes("tech stack")) {
        return "Son is proficient in various programming languages and tools. He's particularly experienced with AWS, Django, RESTful APIs, and has a strong grasp of data structures and algorithms.";
    } else if (lowerMessage.includes("data tools") || lowerMessage.includes("databases")) {
        return "Son is skilled in data-related tools like MySQL, MongoDB, Apache Cassandra, GraphQL, Tableau, and PowerBI. He's adept at managing databases and understanding their intricacies.";
    } else if (lowerMessage.includes("version control") || lowerMessage.includes("git")) {
        return "Version control is essential for collaborative projects. Son is experienced with version-control systems like Git, ensuring efficient and organized code management.";
    } else if (lowerMessage.includes("university of north carolina") || lowerMessage.includes("unc")) {
        return "Son is currently pursuing dual degrees from The University of North Carolina at Chapel Hill: a Bachelor of Science in Computer Science and a Bachelor of Arts in Economics.";
    } else if (lowerMessage.includes("recipegenie")) {
        return "RecipeGenie is one of Son's web-based projects. It integrates a machine-learning model to recommend relevant recipes for users based on their inputs.";
    } else if (lowerMessage.includes("movieverse")) {
        return "MovieVerse is another web-based database created by Son. If you're a movie enthusiast, you might find it particularly interesting!";
    } else if (lowerMessage.includes("communitysphere")) {
        return "CommunitySphere is a project Son is currently developing. It's a social media website designed to help users connect and engage with one another.";
    } else if (lowerMessage.includes("economics")) {
        return "Apart from Computer Science, Son is also pursuing a Bachelor of Arts in Economics from UNC Chapel Hill, showcasing his versatility and breadth of knowledge.";
    } else if (lowerMessage.includes("zaloai") || lowerMessage.includes("zalo ai")) {
        return "ZaloAI is one of the projects that Son contributed to during his internship at VNG Corporation. It focuses on harnessing the power of AI for facial and user habit recognition.";
    } else if (lowerMessage.includes("trueid")) {
        return "TrueID is another significant project from VNG Corporation. Son played a crucial role in its development, particularly in enhancing user habit recognition using state-of-the-art technologies.";
    } else if (lowerMessage.includes("team leader") || lowerMessage.includes("google student developer")) {
        return "Son's leadership experience is evident from his role as the Software Engineering Team Leader for the Google Student Developer Clubs. He took initiatives in solving real-world problems and mentoring less experienced programmers.";
    } else if (lowerMessage.includes("north carolina") || lowerMessage.includes("chapel hill")) {
        return "The University of North Carolina at Chapel Hill has been instrumental in Son's academic journey. There, he has been mastering Computer Science and Economics.";
    } else if (lowerMessage.includes("angular") || lowerMessage.includes("react") || lowerMessage.includes("redux-saga")) {
        return "Son possesses hands-on experience with modern web development frameworks and libraries such as Angular, React, and Redux-Saga. He employed these technologies during his time at VNG Corporation.";
    } else if (lowerMessage.includes("full-stack developer")) {
        return "Son has amassed significant experience as a full-stack developer. He has a comprehensive understanding of both front-end and back-end development, ensuring cohesive and seamless web applications.";
    } else if (lowerMessage.includes("vng")) {
        return "VNG Corporation is where Son interned and gained substantial experience in AI and web development. His contributions significantly impacted projects like ZaloAI and TrueID.";
    } else if (lowerMessage.includes("pytorch") || lowerMessage.includes("tensorflow") || lowerMessage.includes("transformers")) {
        return "In his projects, Son has utilized advanced AI and machine learning technologies like PyTorch, TensorFlow, and Transformers. These tools enabled him to enhance functionalities like facial and user habit recognition.";
    } else if (lowerMessage.includes("web development")) {
        return "Web development is one of Son's fortes. He has worked on various web-based projects using technologies like Angular, React, and Django.";
    } else if (lowerMessage.includes("micro-frontend architecture")) {
        return "Micro-Frontend architecture is a design approach Son is familiar with. It breaks up the front-end monolith into smaller, more manageable pieces, enhancing development efficiency.";
    } else if (lowerMessage.includes("microsoft learn")) {
        return "As a Microsoft Learn Student Ambassador, Son has fostered a community that encourages knowledge exchange and collaboration. He's passionate about sharing and expanding his technological understanding.";
    } else if (lowerMessage.includes("ambitions") || lowerMessage.includes("goals")) {
        return "Son is driven by a passion for creating innovative solutions and is always looking for opportunities to apply his skills to challenging projects. He's eager to contribute his creativity and hard work to teams that share his vision.";
    } else if (lowerMessage.includes("recommendation")) {
        return "If you're looking for insights into a specific technology or seeking recommendations on web development tools, Son has extensive knowledge to share!";
    } else {
        return "I'm here to provide information on Son's skills, experience, and projects. Could you please specify your query?";
    }
}

const chatbotInput = document.getElementById("chatbotInput");
const chatbotBody = document.getElementById("chatbotBody");

chatbotInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage(chatbotInput.value);
        chatbotInput.value = "";
    }
});

function sendMessage(message) {
    chatbotBody.innerHTML += `
        <div style="text-align: right; margin-bottom: 10px; color: white;">${message}</div>
    `;
    let botReply = elizaResponse(message);
    setTimeout(() => {
        chatbotBody.innerHTML += `
            <div style="text-align: left; margin-bottom: 10px; color: white;">${botReply}</div>
        `;
    }, 1000);
}

document.getElementById('minimizeButton').addEventListener('click', function() {
    const chatbotBody = document.getElementById('chatbotBody');
    const chatbotInput = document.getElementById('chatbotInput');

    if(chatbotBody.style.display !== 'none') {
        chatbotBody.style.display = 'none';
        chatbotInput.style.display = 'none';
    } else {
        chatbotBody.style.display = '';
        chatbotInput.style.display = '';
    }
});