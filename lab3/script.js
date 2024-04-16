
let a = 10;
let b = 20;
let c = 23.2;


let dodawanie = a + b + c;
let odejmowanie = a - b - c;
let mnozenie = a * b * c;
let dzielenie = a / b / c;

document.getElementById("wynikDodawania").innerHTML = "Dodawania: " + dodawanie;
document.getElementById("wynikOdejmowania").innerHTML = "Odejmowanie: " + odejmowanie;
document.getElementById("wynikMnozenia").innerHTML = "Mnożenie: " + mnozenie;
document.getElementById("wynikDzielenia").innerHTML = "Dzelenie: " + dzielenie;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  function triangle_math() {
    let a = 3;
    let b = 4;
    let c = 5;
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    let resultParagraph = document.getElementById("result");

    let triangle_check = ((a + b) > c) && ((a + c) > b) && ((b + c) > a);
    if (triangle_check) {
        resultParagraph.textContent = "trójkąt : " + area;
    } else {
        resultParagraph.textContent = "nie trójkąt ";
    }
}


triangle_math();


let pierwszaLiczba = prompt("Proszę podaj pierwszą liczbę całkowitą:");
let drugaLiczba = prompt("Proszę podaj drugą liczbę całkowitą:");
pierwszaLiczba = parseInt(pierwszaLiczba);
drugaLiczba = parseInt(drugaLiczba);
let suma = pierwszaLiczba + drugaLiczba;

document.write("Wynik dodawania: " + suma);

let liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
let liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
let liczba3 = parseFloat(prompt("Podaj trzecią liczbę:"));


let najwieksza = Math.max(liczba1, liczba2, liczba3);


console.log("Największa liczba to: " + najwieksza);

function displayCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("time_display").innerHTML = `<p>Current time: ${time}</p>`;
}

setInterval(displayCurrentTime, 1000);





