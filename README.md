# Isotop Arbetsprov

Forka detta projekt och bygg en app i React där man kan skriva in namnet på en stad och som visar vilket väder det är där.
Sidan ska vara responsiv och se bra ut i alla storlekar (mobil till desktop).

Resultaten av sökningarna ska sparas och man ska även kunna ta bort dom.

## Detaljer

- Om temperaturen är 20 grader och uppåt ska kortet vara rött
- Om temperaturen är mellan 1 och 19 grader ska kortet vara gult
- Om temperaturen är 0 grader och nedåt ska kortet vara blått
- Om det regnar ska kortet vara blått oavsett temperatur
- Om staden du söker på inte ger något svar från API:et ska meddelandet "Det finns ingen stad som matchar din sökning" visas under input-fältet
- Hitta en ikon i Figma-dokumentet som matchar resultatet av sökningen. Använd ×-ikonen som fallback.
- De sparade resultaten ska sorteras efter temperatur
- I desktopversionen ska korten stackas i rader om 3
- Appen ska fungera och se likadan ut i Chrome, Firefox, Edge och Safari.
- Använd TypeScript om du vill (ej ett krav)

## Design

I Figma kan du exportera ikoner och liknande som SVG.

- [Designdokument](https://www.figma.com/file/iDOGMdsvp7WAR0g5spLcno/Arbetsprov?node-id=1%3A675)

## Resurser:

- Väder-API - https://weatherstack.com/
- Typsnitt Roboto - https://fonts.google.com/specimen/Roboto

## Vad letar vi efter?

- Vi vill få en känsla av hur du tar dig an problem och hur du strukturerar din kod

## Redo att skicka in?

Gör en pull request med din lösning till detta repo och meddela din kontaktperson på Isotop. Vi bokar sedan in ett möte där vi tillsammans går igenom provet med dig.

![Desktop design](https://raw.githubusercontent.com/isotopsweden/Arbetsprov-FE/main/desktop.png)
![Mobil design](https://raw.githubusercontent.com/isotopsweden/Arbetsprov-FE/main/mobile.png)
