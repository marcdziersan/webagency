# Webagentur Landingpage

Dies ist eine moderne und professionelle Landingpage für eine Webagentur. Sie wurde mit **HTML, CSS und JavaScript** entwickelt und enthält verschiedene interaktive Funktionen wie einen Hero-Slider, ein Kontaktformular, eine FAQ-Sektion mit Akkordeon-Funktion sowie eine Scroll-Progressbar.

## Inhaltsverzeichnis
- [Projektbeschreibung](#projektbeschreibung)
- [Features](#features)
- [Installation](#installation)
- [Verwendete Technologien](#verwendete-technologien)
- [Dateistruktur](#dateistruktur)
- [Dokumentation](#dokumentation)
- [Lizenz](#lizenz)

## Projektbeschreibung
Diese Landingpage dient als Vorstellung einer Webagentur und ihrer Dienstleistungen. Sie ist responsiv gestaltet und optimiert für eine gute Benutzererfahrung sowie für Suchmaschinen (SEO).

## Features
- **Hero-Slider** mit automatischem Wechsel
- **Smooth Scroll** für Anker-Links
- **FAQ-Sektion** mit Akkordeon-Funktion
- **Kontaktformular** mit Validierung
- **Statistik-Animation** (Zahlen hochzählen)
- **Ladezeit-Anzeige**
- **Scroll-Progressbar** zur Anzeige des Fortschritts
- **Responsives Design**

## Installation
1. Repository klonen oder Dateien herunterladen:
   ```sh
   git clone https://github.com/marcdziersan/property.git
   ```
2. Stelle sicher, dass ein lokaler Server läuft (z. B. mit Live Server in VS Code oder XAMPP).
3. Öffne `index.html` in einem Browser.

## Verwendete Technologien
- **HTML5** - Struktur der Webseite
- **CSS3** - Layout und Design
- **JavaScript (ES6)** - Interaktive Funktionen

## Dateistruktur
```
├── index.html       # Hauptseite der Landingpage
├── style.css        # Stylesheet für das Design
├── script.js        # JavaScript-Logik
├── README.md        # Dokumentation
└── assets/          # Ordner für Bilder und Medien
```

## Dokumentation
### Hero-Slider
Der Slider wechselt alle 5 Sekunden automatisch zum nächsten Bild. Navigiert wird über die Pfeile links und rechts.

```js
function initializeSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}
```

### Kontaktformular
Das Formular prüft, ob alle Felder ausgefüllt wurden. Falls nicht, wird eine Warnung ausgegeben.

```js
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Vielen Dank für Ihre Nachricht!');
    } else {
        alert('Bitte alle Felder ausfüllen!');
    }
});
```

### Scroll-Progressbar
Eine Fortschrittsanzeige für den Scroll-Fortschritt der Seite.

```js
window.addEventListener('scroll', function() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollPosition / pageHeight) * 100;
    document.getElementById('scroll-progressbar').style.width = scrollProgress + '%';
});
```

## Lizenz
Dieses Projekt steht unter der **MIT-Lizenz**. Du kannst es frei verwenden, modifizieren und verbreiten.

