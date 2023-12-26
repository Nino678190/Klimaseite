// Fragen und ihre entsprechenden Antworten
const fragen = [
    {
      frage: "Frage 1: Beispiel Frage?",
      antworten: {
        1: 1, 
        0: 0, 
        '-1': -1 
      }
    },
    {
        frage: "Frage 2: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 3: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 4: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 5: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 6: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 7: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 8: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 9: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 10: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 11: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 12: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 13: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 14: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 15: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 16: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 17: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 18: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 19: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
      {
        frage: "Frage 20: Beispiel Frage?",
        antworten: {
          1: 1, 
          0: 0, 
          '-1': -1 
        }
      },
  ];
  
  let aktuelleFrageIndex = 0;
  const frageElement = document.getElementById('frage');
  const punktzahlElement = document.getElementById('punktzahl');
  
  // Funktion, um eine neue Frage anzuzeigen
  function zeigeFrage() {
    const aktuelleFrage = fragen[aktuelleFrageIndex];
    frageElement.textContent = aktuelleFrage.frage;
  
    // Entferne vorherige Antworten
    const antwortContainer = document.getElementsByName('antwort');
    antwortContainer.forEach(input => (input.checked = false));
  }
  
  // Funktion, um die Punktzahl zu aktualisieren
  function berechnePunkte() {
    const aktuelleFrage = fragen[aktuelleFrageIndex];
    const antworten = aktuelleFrage.antworten;
  
    const ausgewaehlteAntwort = document.querySelector('input[name="antwort"]:checked');
    
    if (ausgewaehlteAntwort) {
      const punkte = antworten[ausgewaehlteAntwort.value];
      updatePunktzahl(punkte);
    } else {
      alert('Bitte wählen Sie eine Antwort aus.');
    }
  }
  

  
  // Funktion, um die Punktzahl zu aktualisieren und die nächste Frage zu zeigen
  function updatePunktzahl(punkte) {
    let gesamtPunktzahl = parseInt(punktzahlElement.textContent) || 0;
    gesamtPunktzahl += punkte;
    punktzahlElement.textContent = gesamtPunktzahl;
  
    // Zeige die nächste Frage oder beende die Fragenliste
    if (aktuelleFrageIndex < fragen.length - 1) {
      aktuelleFrageIndex++;
      zeigeFrage();
    } else {
      alert('Fragen beendet. Gesamtpunktzahl: ' + gesamtPunktzahl);
      endefragen(gesamtPunktzahl)
      // Hier kannst du weitere Aktionen für das Ende der Fragenliste einfügen
    }
  }

  function endefragen(gesamtPunktzahl){
    if (gesamtPunktzahl >= 17){
        alert("Super, du bist ein richtiger Profi beim Klimaschutz")
    } else if (gesamtPunktzahl >= 10 && gesamtPunktzahl <= 16){
        alert("Das ist ein echt gutes Wissen, du kannst es aber noch ein wenig verbessern")
    } else if (gesamtPunktzahl >=5 && gesamtPunktzahl >= 9){
        alert("Das ist ein guter Anfang in die richtige Richtung")
    } else if (gesamtPunktzahl >=0 && gesamtPunktzahl >= 4){
        alert("Schau dir vielleicht mal unsere Informationen an um etwas über Klimaschutz zu lernen")
    }
  }
  
  // Frage 1 anzeigen, wenn die Seite geladen wird
  zeigeFrage();
  