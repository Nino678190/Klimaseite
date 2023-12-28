// Fragen und ihre entsprechenden Antworten
const frageMitAntworten =  [
  { //Frage 1
    frage: "Welche Tierarten sind maßgeblich für die Treibhausgasemissionen in der Fleischproduktion verantwortlich?",
    antworten: [
      { text: "Geflügel", punkte: 0 },
      { text: "Rinder", punkte: 1 },
      { text: "Fische", punkte: -1 }
    ]
  },
  { //Frage 2
    frage: "Welche der folgenden Maßnahmen könnte den Fleischkonsum in Deutschland reduzieren?",
    antworten: [
      { text: "Erhöhung der Fleischimporte", punkte: 0 },
      { text: "Förderung von vegetarischer und veganer Ernährung", punkte: 1 },
      { text: "Bau von mehr Schlachthöfen", punkte: -1 } 
    ]
  },
  { //Frage 3
    frage: "Welche Hauptgründe verursachen die Umweltauswirkungen der Massentierhaltung in Bezug auf den Klimawandel?",
    antworten: [
      { text: "Geringer Wasserverbrauch", punkte: 0 },
      { text: "Methanemissionen durch Wiederkäuer", punkte: 1 },
      { text: "Reduzierte Bodenerosion", punkte: -1 }
    ]
  },
  { //Frage 4
    frage: "Welche Rolle spielt der Biolandbau im Vergleich zum konventionellen Anbau bei der Reduzierung von Treibhausgasemissionen?",
    antworten: [
      { text: "Biolandbau verursacht mehr Treibhausgase", punkte: 0 },
      { text: "Biolandbau kann die Treibhausgasemissionen reduzieren", punkte: 1 },
      { text: "Biolandbau hat keinen Einfluss auf Treibhausgase", punkte: -1 } 
    ] 
  },
  { //Frage 5
    frage: "Welche Kriterien müssen erfüllt sein, damit ein Produkt das Bio-Siegel in Deutschland tragen darf?",
    antworten: [
      { text: "Verwendung von Gentechnik", punkte: -1  },
      { text: "Einsatz von synthetischen Pestiziden", punkte: 0 },
      { text: "Nachweis der ökologischen Herstellung", punkte: 1 } 
    ] 
  },
  { //FRage 6
    frage: "Welche umweltfreundlichen Alternativen gibt es zu herkömmlichem Fleisch, die den CO2-Fußabdruck reduzieren könnten?",
    antworten: [
      { text: "Insektenprotein", punkte: 0 },
      { text: "Fossiles Fleisch", punkte: -1 },
      { text: "Pflanzenbasierte Fleischersatzprodukte", punkte: 1 } 
    ] 
  },
  { //Frage 7
    frage: "Wie können Verbraucher*innen beim Einkauf erkennen, ob ein Produkt tatsächlich nachhaltig ist?",
    antworten: [
      { text: "Anhand des Preises", punkte: -1 },
      { text: "Durch genaues Lesen der Verpackung", punkte: 1 },
      { text: "Es gibt keine Möglichkeit, das festzustellen", punkte: 0 } 
    ] 
  },
  { //Frage 8
    frage: 'Welche Bedeutung hat der Begriff "regional" im Kontext von Nachhaltigkeit und Klimaschutz?',
    antworten: [
      { text: "Keine Auswirkung auf die Umwelt", punkte: 0 },
      { text: "Reduzierung von Transportwegen und CO2-Emissionen", punkte: 1 },
      { text: "Verursacht mehr Umweltbelastung", punkte: -1 } 
    ] 
  },
  { //Frage 9
    frage: "Welche Auswirkungen hat der intensive Fleischkonsum auf die Artenvielfalt und das Ökosystem?",
    antworten: [
      { text: "Hat keine Auswirkungen", punkte: -1 },
      { text: "Kann zur Entwaldung und Verlust von Lebensräumen führen", punkte: 1 },
      { text: "Fördert die Artenvielfalt", punkte: 0 } 
    ] 
  },
  { //Frage 10
    frage: "Wie können Landwirte*innen dazu beitragen, nachhaltiger zu wirtschaften und den ökologischen Fußabdruck zu verringern?",
    antworten: [
      { text: "Durch verstärkten Einsatz von Pestiziden", punkte: 0 },
      { text: "Förderung von Monokulturen", punkte: -1 },
      { text: "Durch Anbau diverser Pflanzenarten und schonenden Umgang mit Ressourcen", punkte: 1 } 
    ] 
  },
  { //Frage 11
    frage: "Was sind die Vor- und Nachteile von Verpackungen aus nachwachsenden Rohstoffen im Vergleich zu herkömmlichen Verpackungen?",
    antworten: [
      { text: "Biologisch abbaubar, aber teurer in der Herstellung", punkte: 1 },
      { text: "Nicht biologisch abbaubar, aber kostengünstiger", punkte: -1 },
      { text: "Identische Kosten und Umweltverträglichkeit", punkte: 0 } 
    ] 
  },
  { //Frage 12
    frage: "Welche ökologischen Vorteile haben saisonale und regionale Lebensmittel im Vergleich zu importierten Produkten?",
    antworten: [
      { text: "Größere Vielfalt und längere Haltbarkeit", punkte: 0 },
      { text: "Geringere Transportwege und geringerer CO2-Ausstoß", punkte: 1 },
      { text: "Höherer Nährstoffgehalt und bessere Qualität", punkte: -1 } 
    ] 
  },
  { //Frage 13
    frage: "Welche Rolle spielen staatliche Subventionen bei der Förderung nachhaltiger Landwirtschaft?",
    antworten: [
      { text: "Können nachhaltige Praktiken unterstützen oder auch industrielle Landwirtschaft begünstigen", punkte: 1 },
      { text: "Haben keinen Einfluss auf die Landwirtschaft", punkte: 0 },
      { text: "Fördern ausschließlich konventionelle Landwirtschaft", punkte: -1 } 
    ] 
  },
  { //Frage 14
    frage: "Wie können Verbraucher*innen ihren Fleischkonsum reduzieren, ohne auf eine ausgewogene Ernährung verzichten zu müssen?",
    antworten: [
      { text: "Durch den Verzehr von weniger Fleischprodukten", punkte: 0 },
      { text: "Durch den gezielten Kauf von Fleisch aus intensiver Tierhaltung", punkte: -1 },
      { text: "Durch den vermehrten Verzehr von pflanzlichen Proteinen", punkte:1  } 
    ] 
  },
  { //Frage 15
    frage: "Welche Auswirkungen hat der Einsatz von Pestiziden und Düngemitteln auf die Umwelt im ökologischen und konventionellen Anbau?",
    antworten: [
      { text: "Keine negativen Auswirkungen", punkte: 0 },
      { text: "Kann zu Bodenverschmutzung und Verlust der Artenvielfalt führen", punkte: 1 },
      { text: "Verbessert die Bodenqualität", punkte: -1 } 
    ] 
  },
  { //Frage 16
    frage: "Warum wird die Kreislaufwirtschaft als wichtiger Bestandteil einer nachhaltigen Entwicklung betrachtet?",
    antworten: [
      { text: "Verursacht vermehrt Abfall", punkte: -1 },
      { text: "Reduziert den Ressourcenverbrauch und Abfall", punkte: 1 },
      { text: "Hat keinen Einfluss auf die Umwelt", punkte: 0 } 
    ] 
  },
  { //Frage 17
    frage: "Wie können kleine Veränderungen im Alltag dazu beitragen, den ökologischen Fußabdruck zu reduzieren?",
    antworten: [
      { text: "Durch vermehrten Einsatz von Einwegplastik", punkte: -1 },
      { text: "Durch bewussten Umgang mit Energie und Ressourcen", punkte: 1 },
      { text: "Durch erhöhten Konsum von nicht-recycelbaren Produkten", punkte: 0 } 
    ] 
  },
  { //Frage 18
    frage: "Warum ist die Erhaltung der Biodiversität für den langfristigen Umweltschutz von entscheidender Bedeutung?",
    antworten: [
      { text: "Hat keinen Einfluss auf das Ökosystem", punkte: 0 },
      { text: "Biodiversität erhöht die Anpassungsfähigkeit von Ökosystemen", punkte: 1 },
      { text: "Biodiversität führt zu Umweltverschmutzung", punkte: -1 } 
    ] 
  },
  { //Frage 19
    frage: "Wie können Unternehmen ihre Lieferketten nachhaltiger gestalten, insbesondere im Hinblick auf importierte Produkte?",
    antworten: [
      { text: "Durch Ignorieren der Herkunft der Produkte", punkte: 0 },
      { text: "Durch verstärkten Einsatz von nicht-nachhaltigen Rohstoffen", punkte: -1 },
      { text: "Durch Zertifizierung nachhaltiger Lieferanten und Reduzierung von Transportwegen", punkte: 1 }
    ] 
  },
  { //Frage 20
    frage: "Welche globalen Auswirkungen hat der steigende Fleischkonsum in Industrieländern auf Entwicklungsländer?",
    antworten: [
      { text: "Fördert die lokale Landwirtschaft in Entwicklungsländern", punkte: 0 },
      { text: "Kann zu Landnutzungsänderungen und sozialen Problemen führen", punkte: 1 },
      { text: "Hat keinen Einfluss auf Entwicklungsländer", punkte: -1 }
    ]
  }   
]

let aktuelleFrageIndex = 0;
const frageElement = document.getElementById('frage');
const punktzahlElement = document.getElementById('punktzahl');

function zeigeFrage() {
    const frageElement = document.getElementById('frage');
    const antwortenContainer = document.getElementById('antwortenContainer');
    antwortenContainer.innerHTML = ''; 
    const aktuelleFrage = frageMitAntworten[aktuelleFrageIndex];
    frageElement.textContent = aktuelleFrage.frage;
    aktuelleFrage.antworten.forEach(function (antwort, index) {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'antwort');
    checkbox.setAttribute('value', antwort.punkte);
    checkbox.classList.add('quizeingabe');
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${antwort.text}`));
    antwortenContainer.appendChild(label);  });
}

function berechnePunkte() {
    const aktuelleFrage = frageMitAntworten[aktuelleFrageIndex];
    const antworten = aktuelleFrage.antworten;
    const ausgewaehlteAntworten = document.querySelectorAll('input[name="antwort"]:checked');
    let punkte = 0;
  
    ausgewaehlteAntworten.forEach(function (antwort) {
        const antwortWert = parseInt(antwort.value);
        punkte += antwortWert;
    });
    updatePunktzahl(punkte);
}

function updatePunktzahl(punkte) {
    let gesamtPunktzahl = parseInt(punktzahlElement.textContent) || 0;
    gesamtPunktzahl += punkte;
    punktzahlElement.textContent = gesamtPunktzahl;
    if (aktuelleFrageIndex < frageMitAntworten.length - 1) {
      aktuelleFrageIndex++;
      zeigeFrage();
    } else {
      alert('Fragen beendet. Gesamtpunktzahl: ' + gesamtPunktzahl);
      endefragen(gesamtPunktzahl)  }
}

function endefragen(gesamtPunktzahl){
    if (gesamtPunktzahl == 20){
      alert("Du kennst dich echt gut aus. 20/20 Punkte. Perfekt")  
    }else if (gesamtPunktzahl >= 17 && gesamtPunktzahl <=19){
        alert("Super, du bist ein richtiger Profi beim Klimaschutz")  
    } else if (gesamtPunktzahl >= 10 && gesamtPunktzahl <= 16){
        alert("Das ist ein echt gutes Wissen, du kannst es aber noch ein wenig verbessern")  
    } else if (gesamtPunktzahl >=5 && gesamtPunktzahl >= 9){
        alert("Das ist ein guter Anfang in die richtige Richtung")  
    } else if (gesamtPunktzahl >=0 && gesamtPunktzahl >= 4){
        alert("Schau dir vielleicht mal unsere Informationen an um etwas über Klimaschutz zu lernen")  }
}

zeigeFrage();
  