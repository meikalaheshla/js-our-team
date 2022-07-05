'use strict'
/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva(le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card / schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! * /
// # DATI
Wayne Barnett | Founder & CEO | wayne - barnett - founder - ceo.jpg
Angela Caroll | Chief Editor | angela - caroll - chief - editor.jpg
Walter Gordon | Office Manager | walter - gordon - office - manager.jpg
Angela Lopez | Social Media Manager | angela - lopez - social - media - manager.jpg
Scott Estrada | Developer | scott - estrada - developer.jpg
Barbara Ramos | Graphic Designer | barbara - ramos - graphic - designer.jpg */


// MILESTONE0


// ARRAY DEI MEMBRI DEL TEAM

const teamMembers = [
    {
        fullName: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-menager.jpg'
    },
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-menager.jpg'
    },
    {
        fullName: 'Scott Estrada', role: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamMembers)

console.table(teamMembers)

// PRENDO L'ELEMENTO HTML DOVE VADO A CREARE LE MIE CARD


const cardContainer = document.getElementById('card-container')

for (let i = 0; i < teamMembers.length; i++) {
    let myCard = '';

    const teamMember = teamMembers[i]
    const teamMemberName = teamMember.fullName;
    const teamMemberRole = teamMember.role;
    const teamMemberPic = teamMember.pic;
    myCard = `<div class="col"> <div class="card"> NAME-${teamMemberName}</br> ROLE -${teamMemberRole}</br> - PICSTRING- ${teamMemberPic} </div></div>`
    const cardDeck = cardContainer.innerHTML += myCard

}

