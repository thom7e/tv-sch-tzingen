/* --- script.js (UPDATE) --- */

// 1. Mobile Navigation
function toggleNav() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}
// Schließt Menü beim Klick außerhalb
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const burger = document.querySelector('.burger');
    if (nav.classList.contains('active') && !nav.contains(event.target) && !burger.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// 2. Scroll Animation (Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Abstand vom unteren Rand
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Einmal beim Laden ausführen
reveal();

// 3. News Loader (Lädt Daten aus news-data.js)
document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-feed-container");
    
    // Prüfen, ob wir auf der Startseite sind und newsBeitraege existiert
    if(newsContainer && typeof newsBeitraege !== 'undefined') {
        
        let htmlContent = "";

        newsBeitraege.forEach(beitrag => {
            // Bild HTML nur erzeugen, wenn Bild vorhanden
            let imageHTML = "";
            if(beitrag.bild && beitrag.bild !== "") {
                imageHTML = `<img src="${beitrag.bild}" class="feed-img" alt="${beitrag.titel}">`;
            }

            // Link HTML nur erzeugen, wenn Link vorhanden
            let linkHTML = "";
            if(beitrag.link && beitrag.link !== "") {
                linkHTML = `<a href="${beitrag.link}" style="text-decoration: underline; font-weight: 700; color: var(--c-red);">Mehr lesen →</a>`;
            }

            // Badge HTML
            let badgeHTML = "";
            if(beitrag.badge) {
                let badgeColor = "var(--c-yellow)";
                if(beitrag.badge === "Wichtig") badgeColor = "var(--c-yellow-hi)";
                badgeHTML = `<span class="meta-tag" style="background:${badgeColor}">${beitrag.badge}</span>`;
            }

            // HTML zusammenbauen
            htmlContent += `
            <article class="feed-card reveal">
                ${badgeHTML}
                ${imageHTML}
                <span style="color:var(--c-red); font-weight:700; font-size:0.9rem; display:block; margin-top:10px;">${beitrag.datum}</span>
                <h3>${beitrag.titel}</h3>
                <p>${beitrag.text}</p>
                ${linkHTML}
            </article>
            `;
        });

        newsContainer.innerHTML = htmlContent;
        
        // Animationen für die neu geladenen News triggern
        setTimeout(reveal, 100); 
    }
});