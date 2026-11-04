// === Pas hier de vragen aan. Ze worden in deze volgorde gespeeld. ===
// t: 'mc' (meerkeuze, a = nummer van goede optie, begin bij 0)
//    'open' (open vraag, a = lijst met goede antwoorden)
//    'music' (zoals open, maar met aftelling "muziek start over N"; zet de afspeellijst klaar)
//    'guess' (schatvraag, a = getal; dichtstbijzijnde wint)
//    'photo' (foto-opdracht; iedereen stemt, 5 punten per stem)
// link = (alleen music) Spotify-link; verschijnt als knop zodra de aftelling bij 0 is
//   Open vragen worden slim nagekeken: kleine typefouten geven de helft van de punten,
//   een antwoord dat het goede woord bevat (bv. 'koninklijk huwelijk') geeft alle punten.
// tijd = seconden om te antwoorden, wacht = seconden aftellen vooraf, p = punten
const VRAGEN = [
  {t:'mc', q:'In welk jaar zijn Opa en Oma getrouwd?', o:['1975','1976','1977','1978'], a:1, tijd:15},
  {t:'music', q:'Luister naar dit nummer. ABBA zong het in 1976 voor het eerst op een gala vlak voor welk feest?', a:['huwelijk','bruiloft','trouwerij','trouwen','trouwfeest','een huwelijk','een bruiloft','koninklijk huwelijk','koninklijke bruiloft','koningshuwelijk'], tijd:90, wacht:10, link:'https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr?si=3660b519860a4cee', tip:'Denk aan jullie eigen feestdag!'},
  {t:'mc', q:'In welk land werden in 1976 de Olympische Zomerspelen gehouden?', o:['Canada','Duitsland','Australië','Spanje'], a:0, tijd:15},
  {t:'open', q:'Waar leerden Opa en Oma elkaar kennen?', a:['de ster','ster','nieuwkuijk','in de ster'], tijd:30},
  {t:'guess', q:'Hoeveel dagen zijn Opa en Oma ongeveer getrouwd?', a:18262, tijd:30},
  {t:'mc', q:'Een computerbedrijf van Steve Jobs en Steve Wozniak ontstond in 1976. Hoe heet het?', o:['Microsoft','Apple','Nokia','Google'], a:1, tijd:30},
  {t:'photo', q:'Maak een foto van het gekste nummerbord.', tijd:180},
  {t:'open', q:'Het supersnelle passagiersvliegtuig begon in 1976 met vluchten. Hoe heet het?', a:['concorde','de concorde','concord'], tijd:30},
  {t:'mc', q:'Wat was Opa`s eerste auto?', o:['Toyota Corolla','Opel Kadet','Volkswagen Kever','Nissan Qashqai'], a:2, tijd:20},
  {t:'music', q:'Deze Nederlandse band had in 1976 een wereldhit. Hoeveel zussen zingen erin mee?', a:['3','drie','3 zussen','drie zussen'], tijd:30, wacht:10, link:'https://open.spotify.com/track/3tP0kdmWRSqmJAt4nR3ykw?si=9572f05323fd4e4b'},
  {t:'mc', q:'Wie was in 1976 koningin van Nederland?', o:['Juliana','Beatrix','Wilhelmina','Maxima'], a:0, tijd:15},
  {t:'mc', q:'Wat lust Oma echt niet?', o:['Bier','Cola','Witte Chocolade','Pepermunt'], a:3, tijd:30},
  {t:'guess', q:'Winterspelen 2026 in Italië: hoeveel gouden medailles won Nederland?', a:10, tijd:30},
  {t:'music', q:'Dit lied won in 1976 het Songfestival. Uit hoeveel leden bestaat deze groep?', a:['4','vier'], tijd:90, wacht:10, link:'https://open.spotify.com/track/5OhwfIapBiHdIkxscQAcmq?si=2c2386c490734c25'},
  {t:'mc', q:'Op de Zomerspelen van 1976 kreeg een 14-jarige turnster voor het eerst ooit een 10. Wie was zij?', o:['Nadia Comăneci','Olga Korbut','Simone Biles','Mary Lou Retton'], a:0, tijd:20},
  {t:'mc', q:'In 1976 crashte Formule 1-coureur Niki Lauda in zijn Ferrari. Uit welk land komt hij?', o:['Italië','Duitsland','Zwitserland','Oostenrijk'], a:3, tijd:20},
  {t:'guess', q:'Het Songfestival van 1976 was in Den Haag. Hoeveel landen deden mee?', a:18, tijd:30},
  {t:'mc', q:'Welke plek haalde Oranje op het EK voetbal van 1976 in Joegoslavië?', o:['Eerste','Tweede','Derde','Vierde'], a:2, tijd:20},
  {t:'mc', q:'Welk land won in 1976 het EK voetbal en bestaat nu niet meer?', o:['Tsjecho-Slowakije','Joegoslavië','Sovjet-Unie','West-Duitsland'], a:0, tijd:20},
  {t:'open', q:'Welk land werd 50 jaar later, in 2026, wereldkampioen voetbal?', a:['spanje','spain'], tijd:30},
  {t:'mc', q:'Welke boksfilm uit 1976 met Sylvester Stallone werd een grote hit?', o:['Creed','Rambo','Rocky','Cobra'], a:2, tijd:15},
  {t:'mc', q:'Welk land won in 2026 het Songfestival in Wenen?', o:['Finland','Bulgarije','Frankrijk','Oostenrijk'], a:0, tijd:20},
  {t:'guess', q:'Hoeveel jaar woonden Opa en Oma samen in hun eerste huis?', a:50, tijd:30},
  {t:'open', q:'Apple bestaat in 2026 50 jaar. Welk Apple-product uit 2007 kent bijna iedereen?', a:['iphone','de iphone','i phone','apple iphone'], tijd:30},
  {t:'guess', q:'In 1976 woonden 13,7 miljoen mensen in Nederland. Hoeveel miljoen nu (afgerond)?', a:18, tijd:30},
  {t:'photo', q:'Foto van het mooiste uitzicht onderweg. Alleen passagiers fotograferen!', tijd:90},
  {t:'open', q:'Finale! Naar welke stad rijden we nu?', a:['haarlem'], tijd:30, p:20}
];