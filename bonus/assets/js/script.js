const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const container = document.getElementById("cardsRow");

// Funzione che crea l'elemento card
function createCard({name, role, img, email}) {
  const col = document.createElement('div');

  col.className = "col-4";
  col.innerHTML = 
  `
<div class="h-100 w-100 text-white shadow-sm d-flex flex-row">
  <div class="col-4">
    <img src="./assets/${img}" alt="${name}">
  </div>
  <div class="card-body bg-super-dark d-flex flex-column justify-content-between px-3 py-3">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${role}</p>
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