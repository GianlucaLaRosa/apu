/*       const btn1 = document.getElementById("btn1");
      const btn2 = document.getElementById("btn2");

      function changeColor(color) {
        document.getElementById("title").style.color = color;
      }
      btn1.addEventListener("click", changeColor.bind(null, "red"));
      btn2.addEventListener("click", changeColor.bind(null, "blue")); */

const form = document.getElementById("form");

function checkHandler(e) {
  e.preventDefault(); //giusto per non fare richieste a vuoto
  const matricola = document.getElementById("idNum").value;
  if (document.getElementById("name").value.length == 0) {
    alert("Si prega di inserire il nome.");
  }
  if (document.getElementById("surname").value.length == 0) {
    alert("Si prega di inserire il cognome.");
  }
  if (matricola.length !== 12) {
    alert("Il numero di matricola deve essere composto da 12 cifre.");
  }
  if (isNaN(+matricola)) {
    alert("Il numero di matricola deve essere composto solo da cifre.");
  }
  if (
    document.getElementById("tel").value.length == 0 &&
    document.getElementById("email").value.length == 0
  ) {
    alert("Si prega di inserire il numero di telefono o la mail.");
  }
  if (
    document.getElementById("email").value.length > 0 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.getElementById("email").value
    )
  ) {
    alert("Inserire una mail valida.");
  }
  if (document.getElementById("region").value.length == 0) {
    alert("Si prega di inserire una regione.");
  }
}
form.addEventListener("submit", checkHandler);

const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `&copy; Gianluca La Rosa ${year}`;
