const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


const container = document.getElementById("cardsRow");

// Funzione che crea l'elemento card
function createCard({name, role, img, email}) {
  const col = document.createElement('div');

  col.className = "col-12 col-md-6 col-lg-4 mb-1";
  col.innerHTML = 
  `
<div class="card-wrapper h-100 w-100 text-white shadow-sm d-flex flex-row">
  <div class="card-img-wrapper">
    <img src="${img}" alt="${name}">
  </div>
  <div class="card-body bg-super-dark d-flex flex-column justify-content-between px-3 py-3">
    <h5 class="card-title">${name}</h5>
    <p class="m-0">${role}</p>
    <p class="text-info m-0">${email}</p>
  </div>
</div>
  `
  return col;
}

for (let i = 0; i < teamMembers.length; i++) {
  let data = teamMembers[i];
  let card = createCard(data);
  container.appendChild(card);
}


/* 
  * Aggiungo nuova card *
*/

const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const email = emailInput.value.trim();

  // Genero numero casuale per l’immagine (in caso si aggiungono più componenti)
  const randomNum = Math.floor(Math.random() * 1000);
  const newCard = {
    name,
    role,
    email,
    img: `https://picsum.photos/100/100?random=${randomNum}`
  };
  
  const cardElement = createCard(newCard);
  container.appendChild(cardElement);

  // Svuoto i campi input
  nameInput.value = "";
  roleInput.value = "";
  emailInput.value = "";
});