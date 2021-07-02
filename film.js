// JavaScript source code

/*Un utente può iscriversi alla Newsletter inserendo il proprio nome nella pagina News e cliccando Subscribe.
Se l’utente non ha inserito alcun testo, il pulsante Subscribe deve essere disabilitato.
Se l’utente ha effettuato la sottoscrizione alla newsletter, allora nella pagina News sarà visibile solo un pulsante “Unsubscribe”.
Se l’utente ha effettuato la sottoscrizione alla newsletter, allora ogni qual volta che l’utente entra nella pagina Home sarà inviata un alert con scritto “Benvenuto” con il nome dell’utente,
Se l’utente clicca Unsubscribe, la sua sottoscrizione viene annullata.
*/
function subscribe() {
    let check;
    let form = document.querySelectorAll("input.subs");
    for (let i = 0; i < form.length; i++) {
        if (!form[i].value.length == 0) {
            check = true;
            continue;
        }
        else {
            check = false;
            break;

        }
       
    }
    alert("sei iscritto!");
    save();
}



function unsubscribe() {
    let button = document.querySelector("button.subscrib"); 
    if (save()) {
        button.innerText = "unsubscribe";
    } 
    
}
    

function save() {
    let storage = getStorage();
    let key = document.getElementById("nome").value;
    let value = document.getElementById("email").value;
    try {
        storage.setItem(key, value);
    } catch (e) {
        alert("impossibile salvare i dati richiesti");
    }
}

function getStorage() {
    let storageName = "sessionStorage";
    try {
        return (storageName in window && window[storageName] != null) ? window[storageName] : null; //se è diverso da null
    } catch (e) {
        return null;
    }


}

function welcome() {
            let storage = getStorage();
            let key = document.getElementById("nome").value;
            let value = storage.getItem(key);
        alert("benvenuto " + key);
}