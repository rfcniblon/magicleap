// code pour le bouton Formulaire 
function askForm() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let select_form = document.getElementById("select_form").value;
  console.log(email, name, select_form)
  //    const message = "Hello " +email+ + name + +select_form+ ", your registre es en cours de validation ! ";           
  // alert(message);
}
//Bouton formulaire ouverture modal  //
const firstBtn = document.getElementById("open-modal");
firstBtn.addEventListener("click", function (event) {
  document.getElementById("modal").style.display = 'block';
})

// // //  Boutton formulaire fermeture modal //
const twoBtn = document.getElementById("close-modal");
twoBtn.addEventListener("click", function (event) {
  document.getElementById("modal").style.display = 'none';
})

//Bouton Menu burger
window.onload = function () {
  let bouton = document.getElementById('burger');
  let nav = document.getElementById('menu');
  bouton.addEventListener("click", function (event) {
    if (nav.style.display == "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";

    }
  });
};

//Bouton fermeture popup cookies  //
// const popupBtn = document.getElementById("cookies_button1");
// popupBtn.addEventListener("click", function (event) {
//   document.getElementById("popup_cookies").style.display = 'none';
// })

//changement avec le scroll de la navbar!!!!
function checkNavbar() {
  let element = document.querySelector("#barre-de-nav");
  if (window.scrollY < 100) {
    element.style.display = "none";
  }else{
    element.style.display = "flex";
  }
}

window.addEventListener(
  "scroll",
  checkNavbar
);

checkNavbar();
