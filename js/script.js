// 1. Chiedo all'utente il suo nome e salvo in una variabile
var nome = prompt("Qual è il tuo nome?");

// 2. Chiedo all'utente il suo cognome e salvo in una variabile
var cognome = prompt("Qual è il tuo cognome?");

// 3. Chiedo all'utente il suo colore preferito e salvo in una variabile
var colore = prompt("Qual è il tuo colore preferito?");

// 4. Creo una variabile contenente la password completa
var passwordGenerata = nome + cognome + colore;

// 5. Creo una variabile contenente un codice di sicurezza
var codiceSicurezza = "19";

// 6. Immetto la password nel documento html
document.getElementById('password').innerHTML = passwordGenerata;

// 7. Aggiungo codice di sicurezza al termine della password
document.getElementById('code').innerHTML = codiceSicurezza;
