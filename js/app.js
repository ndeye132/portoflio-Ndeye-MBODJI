document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (nom === '' || email === '' || message === '') {
        afficherMessage('Merci de remplir tous les champs.', 'erreur');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        afficherMessage('Merci d\'entrer une adresse email valide.', 'erreur');
        return;
    }

    afficherMessage('Votre message a bien été envoyé, merci ' + nom + ' !', 'succes');
    document.getElementById('contactform').reset();
});

function afficherMessage(texte, type) {
    let zoneMessage = document.getElementById('form-message');

    if (!zoneMessage) {
        zoneMessage = document.createElement('p');
        zoneMessage.id = 'form-message';
        document.getElementById('contactform').appendChild(zoneMessage);
    }

    zoneMessage.textContent = texte;
    zoneMessage.className = type;
}