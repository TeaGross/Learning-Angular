# Learning Angular
Mitt första angular-projekt!

## Vad jag gjort

### Formulär
- Skapat ett standalone Form‑komponent med Reactive Forms (validering för förnamn, efternamn, email och ett radioval).
- Skapat en custom validering för förnamn.
- Lagt till en Granska‑komponent som visar vad användaren fyllde i.
- Implementerat en enkel delad service `FormDataService` för att spara formulärdata mellan sidor.
- Konfigurerat routing för
  - `/` → Form
  - `/granska` → Granska
- Sett till att formulärets data bevaras om användaren väljer att gå tillbaka till formuläret från granskasidan.
 
### Todos
- Gjort API-anrop och presenterat todos i en tosos-komponent.
- Varje todo visas som en klickbar länk som navigerar till /todos/:id.
- Skapat en Todo-presentation‑komponent som läser id från ActivatedRoute och hämtar den specifika todon via ApiService.getTodoById().
- Använt RxJS pipe med map för att ändra det hämtade objektet, gäller för todo med id === 1 där en ny property vid namn new läggs till.

### Digi-formulär
- Installerat Arbetsförmedlingens komponentbibliotek och använt komponenter för att skapa ett formulär.
- Implementerat en enkel delad service `DigiFormDataAService` för att spara formulärdata mellan sidor.
- Skapat custom validering för formulärfälten (förnamn, efternamn, datum)
- Implementerat AF:s datum-komponent med egen validering ` dateValidator ` som ska godkänna datum i formaten ÅÅÅÅMMDD, ÅÅÅÅ-MM-DD, ÅÅMMDD och ÅÅÅÅ/MM/DD samt ` dateTodayOrLaterValidator ` för att användaren endast ska kunna ange ett startdatum från dagens datum.
- Skapat custom pipe `formatDate` för datumformattering: ÅÅÅÅ-MM-DD.
- Skapat en granskasida där det användaren fyllt i presenteras. 
- En 'skicka in' knapp som leder till en bekräftelsesida(denna ska skyddas med en routeGuard i framtiden)

