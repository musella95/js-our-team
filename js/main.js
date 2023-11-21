//mile stone 0:Creare l’array di oggetti con le informazioni fornite nella tabella qui sotto
let infoDipendenti = [
{
    nome: "wayne Barnet",
    role: "Founder & Ceo",
    image: "./img/wayne-barnett-founder-ceo.jpg"
},
{
    nome: "Angela Caroll",
    role: "Chief Editor",
    image: "./img/angela-caroll-chief-editor.jpg"
},
{
    nome: "Walter Gordon",
    role: "Officer Manager",
    image: "./img/walter-gordon-office-manager.jpg"
},
{
    nome: "Angela Lopez",
    role: "Social Media Manager",
    image: "./img/angela-lopez-social-media-manager.jpg"
},
{
    nome: "Scott Estrada",
    role: "Developer",
    image: "./img/scott-estrada-developer.jpg"
},
{
    nome: "Barbara Ramos",
    role: "Grapich Designer",
    image: "./img/barbara-ramos-graphic-designer.jpg"
},
]
// mile stone 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

console.log(infoDipendenti);

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < infoDipendenti.length; i++) {
    console.log(infoDipendenti[i].nome);
    console.log(infoDipendenti[i].role);
    console.log(infoDipendenti[i].image);
    console.log("");
  }
  for (let i = 0; i < infoDipendenti.length; i++) {
    
  
  document.getElementById("cards").innerHTML +=`
   <div class="col col-sm-6 col-md-6 col-lg-4">
     <img src="${infoDipendenti[i].image}" alt="immagine dipendente" class="card-img-top">
         <div class="card-body">
             <h5 class="card-title">${infoDipendenti[i].nome}</h5>
             <p class="card-text">${infoDipendenti[i].role}</p>
                    
        </div>
    </div>

`
}