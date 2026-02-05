// våben_data.js
// Fiktive/film-rekvisit data. Tilpas evt. billede-stier så de matcher dine faktiske filnavne.

const vaaben = [
  {
    id: 1,
    navn: "Revolver",
    type: "Skydevåben",
    pris: 4500,
    lokation: {
      sted: "Privat bolig (Thisted / Nordjylland)",
      lat: 56.794435,
      lng: 8.858424
    },
    beskrivelse: "En klassisk revolver med pålidelig ydeevne. Perfekt til både nybegyndere og erfarne skuespillere. Plads til 6 skud i tromlen. Brugt af professionelle få gange.",
    billede: "img/våben_data/hovdevåben.jpg",
    erHovedVaaben: true
  },

  {
    id: 2,
    navn: "Kniv",
    type: "Nærkamp",
    pris: 850,
    lokation: {
      sted: "Privat bolig (Aarhus / Midtjylland)",
      lat: 56.1629,
      lng: 10.2039
    },
    beskrivelse: "En solid kniv med tydelige brugsspor. Enkel, effektiv og let at skjule. Grebet ligger godt i hånden.",
    billede: "img/våben_data/kniv.jpg",
    erHovedVaaben: false
  },

  {
    id: 3,
    navn: "Magasin / ammo-kit",
    type: "Tilbehør",
    pris: 600,
    lokation: {
      sted: "Lejlighed (København / Sjælland)",
      lat: 55.6761,
      lng: 12.5683
    },
    beskrivelse: "Blandet kit med magasiner og patroner. Uens mærker og alder — ser ‘samlet gennem tid’ ud. Godt til close-ups i scenen.",
    billede: "img/våben_data/magasin.jpg",
    erHovedVaaben: false
  },

  {
    id: 4,
    navn: "Revolver",
    type: "Skydevåben",
    pris: 3900,
    lokation: {
      sted: "Parcelhus (Aalborg / Nordjylland)",
      lat: 57.0488,
      lng: 9.9217
    },
    beskrivelse: "Kompakt pistol med diskret profil. Ser velholdt ud, men med små ridser der giver den karakter. Perfekt som ‘backup’ våben.",
    billede: "img/våben_data/revolver (2).jpg",
    erHovedVaaben: false
  },

  {
    id: 5,
    navn: "Håndpistol",
    type: "Skydevåben",
    pris: 5200,
    lokation: {
      sted: "Privat bolig (Randers / Midtjylland)",
      lat: 56.4607,
      lng: 10.0364
    },
    beskrivelse: "Tung pistol med råt udtryk og tydelig metalfinish. Ser ud som noget, der har været igennem lidt. Meget filmisk på kamera.",
    billede: "img/våben_data/pistol (3).jpg",
    erHovedVaaben: false
  },

  {
    id: 6,
    navn: "Sølv Pistol",
    type: "Skydevåben",
    pris: 4100,
    lokation: {
      sted: "Sommerhus (Skagen / Nordjylland)",
      lat: 57.7200,
      lng: 10.5839
    },
    beskrivelse: "En enkel pistol med ren silhuet. God til scener hvor våbnet skal kunne aflæses hurtigt. Ser ‘standard-issue’ ud.",
    billede: "img/våben_data/pistol (4).jpg",
    erHovedVaaben: false
  },

  {
    id: 7,
    navn: "Mat Fininish Pistol",
    type: "Skydevåben",
    pris: 3600,
    lokation: {
      sted: "Privat bolig (Odense / Fyn)",
      lat: 55.4038,
      lng: 10.4024
    },
    beskrivelse: "Kompakt og moderne look. Grebet har en mere ‘taktisk’ form, men uden at være prangende. God til by-scener.",
    billede: "img/våben_data/pistol (5).jpg",
    erHovedVaaben: false
  },

  {
    id: 8,
    navn: "Pistol",
    type: "Skydevåben",
    pris: 4700,
    lokation: {
      sted: "Lejlighed (Silkeborg / Midtjylland)",
      lat: 56.1715,
      lng: 9.5550
    },
    beskrivelse: "Større pistol med kantet design. Ser dyrere ud end de fleste og passer til en mere ‘professionel’ karaktertype.",
    billede: "img/våben_data/pistol (6).jpg",
    erHovedVaaben: false
  },

  {
    id: 9,
    navn: "Pistol",
    type: "Skydevåben",
    pris: 4300,
    lokation: {
      sted: "Privat bolig (Sønderborg / Sønderjylland)",
      lat: 54.9093,
      lng: 9.7922
    },
    beskrivelse: "Klassisk pistolform med tydelige detaljer. Let at spotte i en hånd og fungerer godt i close-ups med magasin/ammo ved siden af.",
    billede: "img/våben_data/pistol (7).jpg",
    erHovedVaaben: false
  },

  {
    id: 10,
    navn: "Pistol",
    type: "Skydevåben",
    pris: 5900,
    lokation: {
      sted: "Privat bolig (Aabenraa / Sønderjylland)",
      lat: 55.0450,
      lng: 9.4190
    },
    beskrivelse: "Moderne, kompakt pistol med aggressiv silhuet. Passer til ‘hitman’-vibe eller højt rank i GhostMarket-universet.",
    billede: "img/våben_data/pistol (8).jpg",
    erHovedVaaben: false
  },

  {
    id: 11,
    navn: "Riffel/AR (ved ikke)",
    type: "Langvåben",
    pris: 8900,
    lokation: {
      sted: "Privat bolig (Vejle / Sydjylland)",
      lat: 55.7093,
      lng: 9.5357
    },
    beskrivelse: "Kort riffel/karabin-look med moderne profil. Den ser ‘taktisk’ ud og fungerer godt i scener med gear og transportkasse.",
    billede: "img/våben_data/riffel (1).jpg",
    erHovedVaaben: false
  },

  {
    id: 12,
    navn: "Riffel og shotgun",
    type: "Langvåben",
    pris: 12900,
    lokation: {
      sted: "Forladt hus (Bornholm)",
      lat: 55.1009,
      lng: 14.7066
    },
    beskrivelse: "Lang riffel med ‘setup’-vibe. Ser ud som noget, der bliver brugt planlagt og kontrolleret. Perfekt til spændingsopbygning.",
    billede: "img/våben_data/riffel (2).jpg",
    erHovedVaaben: false
  },

  {
    id: 13,
    navn: "Riffel (ældre look)",
    type: "Langvåben",
    pris: 7400,
    lokation: {
      sted: "Privat bolig (Kolding / Sydjylland)",
      lat: 55.4904,
      lng: 9.4722
    },
    beskrivelse: "Ældre riffel-look med enkel linje. Passer godt til jagt/land-scener eller en karakter med ‘arv’ og gamle vaner.",
    billede: "img/våben_data/riffel (3).jpg",
    erHovedVaaben: false
  },

  {
    id: 14,
    navn: "Shotgun (western look)",
    type: "Langvåben",
    pris: 6800,
    lokation: {
      sted: "Privat bolig (Thy / Nordjylland)",
      lat: 56.9552,
      lng: 8.6949
    },
    beskrivelse: "Shotgun med klassisk træ/metal-kontrast. Ser tung og rå ud. God til scener hvor våbnet skal føles truende uden at være ‘moderne’.",
    billede: "img/våben_data/shotgun (1).jpg",
    erHovedVaaben: false
  },

  {
    id: 15,
    navn: "Shotgun (med udskiftning af træskaft)",
    type: "Langvåben",
    pris: 7100,
    lokation: {
      sted: "Sommerhus (Sydfyn)",
      lat: 55.0598,
      lng: 10.6068
    },
    beskrivelse: "En shotgun der ser ‘opbevaret og glemt’ ud. Ridser og patina giver den en stærk historik. Perfekt til fund-scener.",
    billede: "img/våben_data/shotgun (1).png",
    erHovedVaaben: false
  },

  {
    id: 16,
    navn: "Classic Shotgun",
    type: "Langvåben",
    pris: 6500,
    lokation: {
      sted: "Forladt hus (Vestjylland)",
      lat: 56.3601,
      lng: 8.6161
    },
    beskrivelse: "Shotgun i dele / adskilt look. Den føles som ‘stash’ eller noget, der er gemt væk. Fedt visuelt til bord-scener.",
    billede: "img/våben_data/shotgun (1).jpeg",
    erHovedVaaben: false
  },

  {
    id: 17,
    navn: "Shotgun (classic look)",
    type: "Langvåben",
    pris: 6200,
    lokation: {
      sted: "Privat bolig (Esbjerg / Vestjylland)",
      lat: 55.4765,
      lng: 8.4594
    },
    beskrivelse: "Kortere shotgun-look med markant profil. Ser ud som et våben, der vælges for effekt og nærvær. Rigtig stærk silhouette på kamera.",
    billede: "img/våben_data/shotgun (2).jpg",
    erHovedVaaben: false
  },

  {
    id: 18,
    navn: "Shotgun (brugt lidt)",
    type: "Langvåben",
    pris: 7900,
    lokation: {
      sted: "Privat bolig (Herning / Midtjylland)",
      lat: 56.1393,
      lng: 8.9735
    },
    beskrivelse: "Shotgun med mere ‘ren’ finish. Den føles som noget, en erfaren karakter ville have liggende klar. Ser velholdt ud.",
    billede: "img/våben_data/shotgun (2).PNG",
    erHovedVaaben: false
  },

  {
    id: 19,
    navn: "Oversavet Shotgun",
    type: "Langvåben",
    pris: 8400,
    lokation: {
      sted: "Privat bolig (Viborg / Midtjylland)",
      lat: 56.4530,
      lng: 9.4020
    },
    beskrivelse: "Dobbeltløbet shotgun-look (klassisk). Giver ‘gammel skole’ energi og passer perfekt til en karakter med tradition og temperament.",
    billede: "img/våben_data/shotgun (3).jpg",
    erHovedVaaben: false
  },

  {
    id: 20,
    navn: "Shotgun (slidt look)",
    type: "Langvåben",
    pris: 9200,
    lokation: {
      sted: "Privat bolig (Hjørring / Nordjylland)",
      lat: 57.4604,
      lng: 9.9854
    },
    beskrivelse: "Langt løb og enkel form. Ser ud som noget, der har hængt i et skab i årevis. Perfekt til ‘rural’ eller ‘home defense’ stemning.",
    billede: "img/våben_data/shotgun (4).jpg",
    erHovedVaaben: false
  },

  {
    id: 21,
    navn: "Økse",
    type: "Nærkamp",
    pris: 1200,
    lokation: {
      sted: "Skur ved hus (Fredericia / Sydjylland)",
      lat: 55.5657,
      lng: 9.7526
    },
    beskrivelse: "Tung økse med et råt og realistisk udtryk. Ser brugt ud og giver en brutal, jordnær vibe. God til ‘skov’ og ‘værksted’ scener.",
    billede: "img/våben_data/økse (1).jpg",
    erHovedVaaben: false
  },

  {
    id: 22,
    navn: "Dubbelt Økse",
    type: "Nærkamp",
    pris: 950,
    lokation: {
      sted: "Privat bolig (Horsens / Østjylland)",
      lat: 55.8607,
      lng: 9.8503
    },
    beskrivelse: "Mindre økse med tydelig slitage. Let at bære og nem at ‘læse’ på kamera. Passer til en karakter, der improviserer.",
    billede: "img/våben_data/økse (2).jpg",
    erHovedVaaben: false
  }
];

// Gør den nem at bruge i browser (script-tag) + Node (valgfrit)
if (typeof window !== "undefined") {
  // behold original
  window.vaaben = vaaben;

  // ekstra aliases så din HTML altid finder den
  window.vaaben_data = vaaben;
  window.weaponsData = vaaben;
  window["våben_data"] = vaaben;
}
if (typeof module !== "undefined") module.exports = vaaben;
