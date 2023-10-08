  // Tableau pour stocker les articles du panier
  const panier = [];

  // Fonction pour ajouter un article au panier
  function ajouterArticle(nom, prix) {
      const article = {
          nom: nom,
          prix: prix,
          quantite: 1,
          aime: false
      };
      panier.push(article);
      afficherPanier();
  }

  // Fonction pour afficher le panier
  function afficherPanier() {
      const articlesDiv = document.getElementById("articles");
      articlesDiv.innerHTML = "";

      let total = 0;

      panier.forEach((article, index) => {
          const articleDiv = document.createElement("div");
          articleDiv.classList.add("article");

          const nomDiv = document.createElement("div");
          nomDiv.classList.add("nom");
          nomDiv.innerText = article.nom;

          const quantiteDiv = document.createElement("div");
          quantiteDiv.classList.add("quantite");
          quantiteDiv.innerText = article.quantite;

          const plusButton = document.createElement("button");
          plusButton.innerText = "+";
          plusButton.addEventListener("click", () => {
              article.quantite++;
              afficherPanier();
          });

          const moinsButton = document.createElement("button");
          moinsButton.innerText = "-";
          moinsButton.addEventListener("click", () => {
              if (article.quantite > 1) {
                  article.quantite--;
              } else {
                  panier.splice(index, 1);
              }
              afficherPanier();
          });

          const prixDiv = document.createElement("div");
          prixDiv.classList.add("prix");
          prixDiv.innerText = "$" + (article.prix * article.quantite).toFixed(2);

          const coeurSpan = document.createElement("span");
          coeurSpan.classList.add("coeur");
          coeurSpan.innerHTML = "&#x2661;";

          coeurSpan.addEventListener("click", () => {
              article.aime = !article.aime;
              afficherPanier();
          });

          if (article.aime) {
              coeurSpan.style.color = "red";
          }

          articleDiv.appendChild(nomDiv);
          articleDiv.appendChild(quantiteDiv);
          articleDiv.appendChild(plusButton);
          articleDiv.appendChild(moinsButton);
          articleDiv.appendChild(prixDiv);
          articleDiv.appendChild(coeurSpan);

          articlesDiv.appendChild(articleDiv);

          total += article.prix * article.quantite;
      });

      const totalDiv = document.getElementById("total");
      totalDiv.innerText = "Total : $" + total.toFixed(2);
  }

  // Ajouter un article en cliquant sur le bouton "Ajouter"
  const ajouterButton = document.getElementById("ajouter-article");
  ajouterButton.addEventListener("click", () => {
      const nom = document.getElementById("nom-article").value;
      const prix = parseFloat(document.getElementById("prix-article").value);

      if (nom && prix) {
          ajouterArticle(nom, prix);
          document.getElementById("nom-article").value = "";
          document.getElementById("prix-article").value = "";
      }
  });

  // Ajouter quelques articles au panier pour commencer
//   ajouterArticle("Article 1", 10.00);
//   ajouterArticle("Article 2", 15.00);
//   ajouterArticle("Article 3", 20.00);