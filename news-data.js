/* --- news-data.js --- 
   ANLEITUNG FÜR DEN VEREIN:
   1. Um einen neuen Beitrag zu erstellen, kopiere den Block zwischen den geschweiften Klammern { ... },
   2. Füge ihn ganz oben in die Liste "newsBeitraege" ein.
   3. Ändere den Text zwischen den Anführungszeichen "".
*/

const newsBeitraege = [
    {
        titel: "Gauwandertag 2025: Ein Fest in Gelb und Rot",
        datum: "18. MAI 2025",
        bild: "IMG-20250519-WA0000-1024x768.jpg", // Link zum Bild
        text: "Traumwetter, Grillduft und volle Hütte! Unser vorgezogener Wandertag war ein voller Erfolg. Wer hat den Pokal geholt?",
        link: "bericht-detail.html?id=gauwandertag2025", // Link zur Detailseite (optional)
        badge: "Highlight" // Optional: "Neu", "Wichtig", "Ergebnis"
    },
    {
        titel: "Arbeitseinsatz am Samstag",
        datum: "12. JUNI 2025",
        bild: "", // Leer lassen, wenn kein Bild gewünscht ist
        text: "Wir machen das Vereinsheim sommerfit. Wir brauchen noch helfende Hände für den Grünschnitt und Reparaturen am Zaun. Los geht es um 09:00 Uhr.",
        link: "", 
        badge: "Wichtig"
    },
    // Hier können weitere Beiträge hin...
];