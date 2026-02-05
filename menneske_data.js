/* menneske_data.js
   Brug kun fiktive karakterer (film/rekvisit).
   Denne fil lægger data på window, så den virker uden bundler/imports.
*/

window.MENNESKER = [
  {
    id: 1,
    navn: "Ivan Stensby",
    alder: 30,
    koen: "Male",
    adresse: "Rosevej 12",
    by: "Nykøbing Mors",
    land: "Danmark",
    dusør: 14000,
    billede: "img/menneske_data/mennesker (1).Png",
    note: "Bliver nemt aggressiv hvis han provokeres. Vær ikke sarkastisk overfor ham.",
    aktiv: true,
    hovdeperson: true
  },

  {
    id: 2,
    navn: "Søren Jensen",
    alder: 26,
    koen: "Male",
    adresse: "Strandgade 5",
    by: "Århus",
    land: "Danmark",
    dusør: 30000,
    billede: "img/menneske_data/mennesker (2).png",
    note: "Prøver at mind-fucke folk, men kan ikke finde ud af det. Tror han er klogere end han er.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 3,
    navn: "Camilla Holm",
    alder: 33,
    koen: "Female",
    adresse: "Møllebakken 19",
    by: "Odense",
    land: "Danmark",
    dusør: 75000,
    billede: "img/menneske_data/mennesker (3).png",
    note: "Smiler altid, men siger ting med skjulte stikpiller. Elsker at skabe usikkerhed uden at det kan bevises.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 4,
    navn: "Rasmus Blichfeldt",
    alder: 29,
    koen: "Male",
    adresse: "Skovtoften 7",
    by: "Aalborg",
    land: "Danmark",
    dusør: 49000,
    billede: "img/menneske_data/mennesker (4).png",
    note: "Virker rolig, men kan flippe på et sekund hvis han føler sig ydmyget. Har et stort behov for kontrol.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 5,
    navn: "Freja Munk",
    alder: 24,
    koen: "Female",
    adresse: "Havnevej 3",
    by: "Esbjerg",
    land: "Danmark",
    dusør: 45000,
    billede: "img/menneske_data/mennesker (5).png",
    note: "Ekstremt charmerende i starten, men dræner folk med konstant drama. Bliver jaloux hvis andre får opmærksomhed.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 6,
    navn: "Morten Aagaard",
    alder: 41,
    koen: "Male",
    adresse: "Bøgealle 44",
    by: "Randers",
    land: "Danmark",
    dusør: 150000,
    billede: "img/menneske_data/mennesker (6).png",
    note: "Taler stille og truer indirekte. Går sjældent op i sandheden – kun i hvad der får ham til at se stærk ud.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 7,
    navn: "Nadia Hansen",
    alder: 27,
    koen: "Female",
    adresse: "Parkvej 11",
    by: "Kolding",
    land: "Danmark",
    dusør: 34000,
    billede: "img/menneske_data/mennesker (7).png",
    note: "Observerer alt og afslører detaljer, når det passer hende. God til at få folk til at tvivle på deres egen hukommelse.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 8,
    navn: "Thomas Vestergaard",
    alder: 36,
    koen: "Male",
    adresse: "Kirkevej 2",
    by: "Hillerød",
    land: "Danmark",
    dusør: 54000,
    billede: "img/menneske_data/mennesker (8).png",
    note: "Spiller altid offer, hvis han bliver taget i noget. Undskylder uden at ændre adfærd og gør det samme igen.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 9,
    navn: "Line Thorsen",
    alder: 32,
    koen: "Female",
    adresse: "Fjordgade 18",
    by: "Vejle",
    land: "Danmark",
    dusør: 22000,
    billede: "img/menneske_data/mennesker (9).png",
    note: "Ekstremt målrettet og kan virke kold. Bruger komplimenter strategisk for at få folk til at gøre tjenester.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 10,
    navn: "Jonas Lund",
    alder: 22,
    koen: "Male",
    adresse: "Stationsvej 30",
    by: "Roskilde",
    land: "Danmark",
    dusør: 16000,
    billede: "img/menneske_data/mennesker (10).png",
    note: "Impulsiv og rastløs. Lover mere end han kan holde, og bliver defensiv hvis nogen stiller krav til ham.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 11,
    navn: "Signe Brandt",
    alder: 38,
    koen: "Female",
    adresse: "Solkrogen 6",
    by: "Silkeborg",
    land: "Danmark",
    dusør: 25000,
    billede: "img/menneske_data/mennesker (11).png",
    note: "Virker hjælpsom, men samler information for at bruge det senere. Kan få andre til at føle skyld for små ting.",
    aktiv: true,
    hovdeperson: false
  },

  {
    id: 12,
    navn: "Jakob Nørgaard",
    alder: 45,
    koen: "Male",
    adresse: "Engparken 15",
    by: "Herning",
    land: "Danmark",
    dusør: 28000,
    billede: "img/menneske_data/mennesker (12).png",
    note: "Tålmodig og beregnende. Presser folk langsomt med 'fornuft' og får dem til at tro, de selv har valgt det.",
    aktiv: true,
    hovdeperson: false
  }
];

// Gør den nem at bruge i browser (script-tag) + Node (valgfrit)
if (typeof window !== "undefined") {
  // behold original
  window.MENNESKER = window.MENNESKER || MENNESKER;

  // aliases så main.html's getPeople() finder dem
  window.mennesker = MENNESKER;
  window.menneske_data = MENNESKER;
  window.personer = MENNESKER;
  window.people = MENNESKER;
  window["menneske_data"] = MENNESKER;
}
if (typeof module !== "undefined") module.exports = MENNESKER;
