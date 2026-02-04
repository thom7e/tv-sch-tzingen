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

/* --- FILTER FUNKTION --- */
function filterSports(category) {
    // 1. Buttons aktualisieren (Active State)
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        // Prüfen ob der Button der geklickte ist (anhand des onclick attributs oder text)
        // Einfacher: Wir setzen alle zurück und färben den geklickten
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // 2. Elemente filtern (Karten unten & Tabellenzeilen oben)
    const items = document.querySelectorAll('.dept-card, .course-row');

    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        
        if (category === 'all' || itemCat.includes(category)) {
            item.style.display = ''; // Anzeigen (Standard CSS nutzen)
        } else {
            item.style.display = 'none'; // Ausblenden
        }
    });

    // 3. Leere Tage im Wochenplan ausblenden
    // Wenn an einem Tag keine Kurse sichtbar sind, soll der ganze Tag-Container weg
    const days = document.querySelectorAll('.day-card');
    
    days.forEach(day => {
        // Suche sichtbare Kurse in diesem Tag
        const visibleRows = day.querySelectorAll('.course-row:not([style*="display: none"])');
        
        if (visibleRows.length === 0) {
            day.style.display = 'none';
        } else {
            // Reset display style (damit es wieder flex oder block ist je nach CSS)
            day.style.display = ''; 
        }
    });
}