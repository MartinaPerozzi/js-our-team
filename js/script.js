// MILESTONE 0 - Preparo l'array di oggetti che conterrà i membri del team e le loro caratteristiche
const teamMembers = [
    {
        name: "Team",
        numberOfPeople: 6,
        persons: [
            {
                name: "Wayne",
                surname: "Barnett",
                role: "Founder & CEO",
                img: "wayne-barnett-founder-ceo.jpg"
            },
            {
                name: "Angela",
                surname: "Caroll",
                role: "Chief Editor",
                img: "angela-caroll-chief-editor.jpg"
            },
            {
                name: "Walter",
                surname: "Gordon",
                role: "Office Manager",
                img: "walter-gordon-office-manager.jpg"
            },
            {
                name: "Angela",
                surname: "Lopez",
                role: "Social Media Manager",
                img: "angela-lopez-social-media-manager.jpg"
            },
            {
                name: "Scott",
                surname: "Estrada",
                role: "Developer",
                img: "scott-estrada-developer.jpg"
            },
            {
                name: "Barbara",
                surname: "Ramos",
                role: "Graphic Designer",
                img: "barbara-ramos-graphic-designer.jpg"
            }
        ]
    },
];
console.log(teamMembers[0].persons);
// MILESTONE 1 - ITERARE ARRAY
const team = teamMembers[0].persons;
console.log(team)
// stampare in console le info di ogni membro del team
for (const teamMember of team) {
    console.log(teamMember);
    const members = teamMember;

    // MILESTONE 2: Stampare le informazioni su DOM
    const containerCards = document.querySelector(".card-container");
    const generatedCard = document.createElement("div");
    containerCards.append(generatedCard);

    // BONUS 1: Trasformare la stringa foto in una immagine effettiva / BONUS 2: Organizzare i singoli membri in card/schede
    generatedCard.innerHTML += `
    <div class="col-auto card">
                <div class="card-body">
                <img class="card-img mb-2" src="./img/${members.img}" alt="Member Team">
                <h5 class="card-title">${members.name} ${members.surname}</h5>
                <p class="card-text">${members.role}</p>
                </div>
            </div>`;
};

