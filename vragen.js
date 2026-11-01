// === Pas hier de vragen aan. Ze worden in deze volgorde gespeeld. ===
// 	t: 'mc' (meerkeuze, a = nummer van goede optie, begin bij 0)
//    'open' (open vraag, a = lijst met goede antwoorden)
//    'music' (zoals open, maar met aftelling "muziek start over N"; zet de afspeellijst klaar)
//    'guess' (schatvraag, a = getal; dichtstbijzijnde wint)
//    'photo' (foto-opdracht; iedereen stemt, 5 punten per stem)
// tijd = seconden om te antwoorden, wacht = seconden aftellen vooraf, p = punten
const VRAGEN = [
  {t:'music', q:'Zet nummer 1 van de 1976-afspeellijst aan. Welke artiest zingt het?', a:['VUL IN'], tijd:30, wacht:10, tip:'Iedereen drukt bij 0 tegelijk op play.'},
  {t:'mc', q:'In welk jaar zijn Opa en Oma getrouwd?', o:['1975','1976','1977','1978'], a:1, tijd:15},
  {t:'mc', q:'Wat was hun eerste auto? [VUL IN]', o:['VUL IN','VUL IN','VUL IN','VUL IN'], a:0, tijd:20},
  {t:'photo', q:'Foto van het gekste nummerbord of de gekste auto die je ziet. Alleen passagiers fotograferen!', tijd:90},
  {t:'mc', q:'Wie won in 1976 het EK voetbal?', o:['Nederland','West-Duitsland','Tsjecho-Slowakije','Italië'], a:2, tijd:20},
  {t:'music', q:'Nummer 2 van de 1976-lijst. Welke artiest of titel?', a:['VUL IN'], tijd:30, wacht:10},
  {t:'guess', q:'Hoeveel dagen zijn Opa en Oma ongeveer getrouwd?', a:18262, tijd:30},
  {t:'photo', q:'Selfie van iedereen in jullie auto (behalve de bestuurder) met iets goudkleurigs.', tijd:90},
  {t:'open', q:'Waar was hun eerste date? [VUL IN]', a:['VUL IN'], tijd:30},
  // Finale vlak voor aankomst (controleer het getal even online):
  {t:'guess', q:'Finale! Hoeveel inwoners heeft Haarlem ongeveer?', a:165000, tijd:30, p:20}
];
