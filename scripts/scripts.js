// Translation data
const translations = {
    nl: {
        name: "Nick Esselman",
        page1: "Pagina 1",
        page2: "Pagina 2",
        intro_name: "Nick Esselman",
        intro_description: "Ik ben 16 jaar oud en woon in Spaarndam",
        projects_title: "Mijn top 10 Projecten",
        project1: "1. Eigen telescoop gemaakt",
        project2: "2. Mee aan een game jam gedaan met team",
        project3: "3. UI voor 3D printer aansturen",
        project4: "4. Sterken deurklippen gemodelleerd en geprint",
        project5: "5. Alle modellen die ik heb geüpload naar Printables",
        project6: "6. Eigen database gemaakt",
        project7: "7. App voor home control thuis",
        project8: "8. Smart surround sound room geprogrammeerd",
        project9: "9. Minecraft server geprogrammeerd om netwerking te leren",
        project10: "10. Game voor game jam",
        name_footer: "Nick Esselman",
        headtitle: "Over mij",
        title1: "Mijn woonplaats",
        text1: "Ik woon in een klein huisje aan de Mooie Nel, samen met mijn broer, zus en moeder. \n We wonen in het dorpje Spaarndam. Ik ga graag kanoën op dit prachtige meer.",
        img1: "Mijn huis",
        img2: "Uitzicht",
        title2: "Hobby’s",
        text2: "3D modeleren en 3D printen zijn mijn grootste hobby’s. graag maak ik zelf modellen op me laptop en maak ik ze daarna een realiteit. Dit doe ik met Pla en PETG",
        title3: "Wat kan ik al",
        text3: "Ik doe al 6 jaar, sinds 2018 aan programmeren in game engines zoals Unity met C# en Godot. \n Dit heb ik allemaal mezelf geleerd met proberen en falen.\n\n Ik heb vooral veel projecten begonnen en weinig afgemaakt. een paar van deze projecten zijn te spelen in je browser op itch.io\n\n",
        img3: "Eerste game",
        img4: "Zelf host ui voor printer",
        img5: "Mijn ender3 v2"
    },
    en: {
        name: "Nick Esselman",
        page1: "Page 1",
        page2: "Page 2",
        headtitle: "About Me",
        intro_name: "Nick Esselman",
        intro_description: "I am 16 years old and live in Spaarndam",
        projects_title: "My Top 10 Projects",
        project1: "1. Built my own telescope",
        project2: "2. Participated in a game jam with a team",
        project3: "3. UI for controlling a 3D printer",
        project4: "4. Modeled and printed strong door clips",
        project5: "5. All models I have uploaded to Printables",
        project6: "6. Created my own database",
        project7: "7. App for home control",
        project8: "8. Programmed a smart surround sound room",
        project9: "9. Programmed a Minecraft server to learn networking",
        project10: "10. Game for game jam",
        name_footer: "Nick Esselman",
        title1: "My Home",
        text1: "I live in a small house by the Mooie Nel, together with my brother, sister, and mother. \n We live in the village of Spaarndam. I enjoy canoeing on this beautiful lake.",
        img1: "My house",
        img2: "View",
        title2: "Hobbies",
        text2: "3D modeling and 3D printing are my biggest hobbies. I enjoy creating models on my laptop and making them a reality. I do this with PLA and PETG.",
        title3: "What I Can Do",
        text3: "I have been programming for 6 years, since 2018, in game engines like Unity with C# and Godot. \n I learned all of this by trying and failing.\n\n I have started many projects but finished few. A few of these projects can be played in your browser on itch.io\n\n",
        img3: "First game",
        img4: "Self-hosted UI for printer",
        img5: "My ender3 v2"
    }
};


// Function to change language
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        let result = translations[language][key]
        element.textContent = result;
    });
}

// Initialize with the default language (Dutch)
let currentLanguage = 'nl';
changeLanguage(currentLanguage);
document.body.classList.add('dark-mode'); // Set default to dark mode

// Language Toggle
const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
    languageToggle.textContent = currentLanguage === 'nl' ? 'NL/EN' : 'EN/NL';
    changeLanguage(currentLanguage);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Toggle icon (assuming '🌞' for light and '🌚' for dark mode)
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Dark/Light' : 'Light/Dark';
});

// Display the current date in the footer
const dateElement = document.getElementById("current-date");
const currentDate = new Date().toLocaleDateString();
dateElement.textContent = currentDate;
