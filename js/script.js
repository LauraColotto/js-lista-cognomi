// Chiedo all'utente il suo cognome
var cognomeUser = prompt("Ciao! Inserisci qui il tuo cognome");
cognomeUser = cognomeUser.charAt(0).toUpperCase() + cognomeUser.slice(1);

// Lo inserisco nell'array

var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

cognomi.push(cognomeUser);

// Ordino alfabeticamente l'array

cognomi.sort();
console.log(cognomi);

// Stampo la lista dei cognomi
for (var i = 0; i < cognomi.length; i++){
  var listaCognomi = document.getElementById('lista').innerHTML; //lettura
  document.getElementById('lista').innerHTML = listaCognomi + "<li>" + cognomi[i] + "</li>";
}

// Scrivo in che posizione si trova il cognome inserito dall'utente

document.getElementById('numero').innerHTML = cognomi.indexOf(cognomeUser) + 1;
