// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

//! Declaration (Fonksiyonun tanimlanmasi)
function yazdirMerhaba() {
  // alert("Merhaba FS14")
  console.log("Merhaba FS14");
}

yazdirMerhaba(); //! invoke, call
yazdirMerhaba(); //! invoke, call
yazdirMerhaba(); //! invoke, call

//* ORNEK2:
//*****************************************/

//! Parametre listesi (argüman listesi)
function yazdirParametre(message, name = "Cohort14") {
  console.log(message, name);
}
yazdirParametre("Hello", "FS15");
yazdirParametre("Salut", "FS16");
yazdirParametre("Hola", "FS17");
yazdirParametre(12.4, true);
