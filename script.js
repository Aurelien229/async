
    const dataBtn = document.getElementById('pullData');

    // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
    dataBtn.addEventListener('click', function () {
        // Utilisez fetch pour charger le contenu du fichier JSON
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Manipulez les données ici (par exemple, créez une liste <ul>)
                const jsonList = document.getElementById('dataList');
                jsonList.innerHTML = ''; // Effacez le contenu existant

                // Créez dynamiquement des éléments <li> pour chaque élément du tableau
                data.forEach(function (rule) {
                    let listItem = document.createElement('li');
                    listItem.textContent = rule;
                    jsonList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Erreur lors du chargement du JSON:', error));
    });
