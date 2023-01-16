const ispis=document.querySelector("#ispis");
const tasteri=document.querySelectorAll(".btn");
const brisanje=document.getElementById("brisanje");
let vrednost="";

tasteri.forEach( dugmici => {
  dugmici.addEventListener("click", (dogadjaj)=> {
    if(dogadjaj.target.value == "="){
      vrednost = eval(vrednost); 
    }
    vrednost += dogadjaj.target.value;
    ispis.value=vrednost;
  })  
});

// nakon klika na c dugme obrise se vrednost, ali kad se ponovo klikne na neki broj
// onda nastavlja brojeve koji su bili i pre klika na c dugme
brisanje.addEventListener("click",function(){
ispis.value=""; 
vrednost="";
});

