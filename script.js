const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: "img/wayne-barnett-founder-ceo.jpg",
  }
];
const target = document.querySelector('.team-container')


for (let i = 0; i < teamMembers.length; i++) {
  const element = teamMembers[i];
  target.innerHTML += 
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src='${element.photo}'
        alt="${element.name}"
      />
    </div>
    <div class="card-text">
      <h3>${element.name}</h3>
      <p>${element.role}</p>
    </div>
  </div>
  `
}