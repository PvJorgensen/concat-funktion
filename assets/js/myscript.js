//Sammensætning af navn med concat()
//Opret to variabler, `fornavn` og `efternavn`, og tildel dem dine fornavn og efternavn. Lav en ny variabel, `fuldtNavn`, 
//der indeholder hele dit navn ved hjælp af `concat()` funktionen. Udskriv `fuldtNavn` til konsollen.

//Kode her
let fornavn = "Patrik";
let efternavn = "Jørgensen";

let fuldtNavn = fornavn.concat(" ", efternavn);
console.log(fuldtNavn);


//Velkomstbesked med concat()
//Lav en variabel, `brugernavn`, og tildel den værdien af dit valgte brugernavn. 
//Opret en velkomstbesked ved hjælp af `concat()` funktionen, der siger "Velkommen, [brugernavn]!" Udskriv velkomstbeskeden til konsollen

//Kode her
let brugernavn = "PatrikAbe";

let velkomstbesked = "Velkommen, ".concat(brugernavn, "!")

console.log(velkomstbesked);

//Bynavn og Postnummer med concat()
//Opret to variabler, `by` og `postnummer`, og tildel dem værdierne af din by og dit postnummer. 
//Brug `concat()` funktionen til at sammensætte dem og gem resultatet i en ny variabel kaldet `adresse`. Udskriv `adresse` til konsollen.

//Kode her
let by = "Aablorg";
let postnummer = "9000";

let adresse = by.concat(" ", postnummer);
console.log(adresse);

//Ferieplanlægning med concat()
//Lav en variabel, `ferieDestination`, og tildel den værdien af dit ønskede feriemål. Opret en anden variabel, `feriePlan`, der indeholder en besked ved hjælp af `concat()` funktionen, 
//der siger: "Jeg planlægger at tage til [ferieDestination] i næste uge." Udskriv `feriePlan` til konsollen.

//Kode her
let ferieDestination = "Sverige";

let feriePlan = "Jeg planlægger at tage til ".concat(ferieDestination, " i næste uge.");

console.log(feriePlan);


//Produktnavn og Pris med concat()
//Opret to variabler, `produktNavn` og `produktPris`, og tildel dem værdierne af et produkt og dets pris. Lav en besked ved hjælp af `concat()` funktionen, 
//der siger: "Det valgte produkt er [produktNavn], og det koster [produktPris] dollars." Udskriv beskeden til konsollen.

//Kode her
let produktNavn = "Sandwich";
let produktPris = 20;

let besked = "Det valgte produkt er ".concat(produktNavn, ", og det koster ", produktPris, " kr.")

console.log(besked);