
    const texte = "Joyeux anniversaire Luna Mia🌙";
    let index = 0;
    function ecrire() {
      if (index < texte.length) {
        document.getElementById("texte").textContent += texte.charAt(index);
        index++;
        setTimeout(ecrire, 100);
      }
    }

    const etapes = document.querySelectorAll('.etape');
    let etapeIndex = etapes.length - 1;
    function afficherGateau() {
      if (etapeIndex >= 0) {
        etapes[etapeIndex].classList.add("active");
        etapeIndex--;
        setTimeout(afficherGateau, 800);
      }
    }

    const images = ["asset/img1.jpeg", "asset/img2.jpeg", "asset/img3.jpeg", "asset/img4.jpeg"];

    function creerCoeurEmoji() {
      const coeur = document.createElement("div");
      coeur.classList.add("coeur");
      coeur.textContent = "❤️";
      coeur.style.left = Math.random() * window.innerWidth + "px";
      document.getElementById("petales").appendChild(coeur);
      setTimeout(() => coeur.remove(), 8000);
    }

    function creerCoeurImage() {
      const coeurImg = document.createElement("div");
      coeurImg.classList.add("coeur-img");
      coeurImg.style.left = Math.random() * window.innerWidth + "px";
      const img = document.createElement("img");
      const alea = Math.floor(Math.random() * images.length);
      img.src = images[alea];
      coeurImg.appendChild(img);
      document.getElementById("petales").appendChild(coeurImg);
      setTimeout(() => coeurImg.remove(), 10000);
    }

    setInterval(creerCoeurEmoji, 500);
    setInterval(creerCoeurImage, 1200);

    window.onload = () => {
      ecrire();
      afficherGateau();
    }