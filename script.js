const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: "img/wayne-barnett-founder-ceo.jpg",
  }
];
const target = document.querySelector('.team-container');
const button = document.getElementById('addMemberButton')
// const card = document.createElement('div').classList.add('team-card');
// const img = document.createElement('div').classList.add('card-image');
// const text = document.createElement('div').classList.add('card-text');
// const fullName = document.createElement('h3');
// const role = document.createElement('p');

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


