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

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki name
//! parametresi icin default değer olarak 'Cohort14' atanmistir.

yazdirParametre("Hallo");
yazdirParametre("Ehlen");
yazdirParametre();

//* ORNEK3:
//******************************************/
console.log(new Date()); //? Sistem tarihi ve saatini verir.

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  // console.log(`${name} is ${age} years old`)
  return age;
}

console.log(calculate("Ahmet", 1990));
const ismetAge = calculate("İsmet", 1890);
console.log("Ismet's Age:", ismetAge);
