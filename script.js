const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: "img/barbara-ramos-graphic-designer.jpg",
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: "img/scott-estrada-developer.jpg",
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: "img/walter-gordon-office-manager.jpg",
  }
];
const target = document.querySelector('.team-container');
const button = document.getElementById('addMemberButton')


function stampMember(){
  for (let i = 0; i < teamMembers.length; i++) {
    const element = teamMembers[i];
    target.innerHTML += `
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
    </div> `;
  }
}

function stampNewMember (member){
  target.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src='${member.photo}'
        alt="${member.name}"
      />
    </div>
    <div class="card-text">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </div>
  </div> `;
}

function createTeamMember(){

  const newMember = new Object();

  const getName = document.getElementById('name').value;
  const getRole = document.getElementById('role').value;
  const getImage = document.getElementById('image').value;

  newMember.name = getName;
  newMember.role = getRole;
  newMember.photo = getImage;

  teamMembers.push(newMember)
  return newMember
}

stampMember();
button.addEventListener('click', function (){
  stampNewMember(createTeamMember());
});


