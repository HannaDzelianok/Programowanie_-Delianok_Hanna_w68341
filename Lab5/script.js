
function zad1(){
    let tab = [];
    for ( let i =0; i< 10;i++){
    let num = parseInt(prompt("Podaj liczbe  "));
    tab.push(num);
    }
    return tab;
}
let tablica = zad1()
console.log(tablica);
let szukanie =parseInt(prompt("Podaj liczbę całkowitą do wyszukania"));
let licznik =0;
for (let ile of tablica ){
    if(ile == szukanie){
        licznik++;
    }
}
console.log("Liczba wystąpień liczby", szukanie, "w tablicy:", licznik);




function zad2() {
    let tab = [1, 2, 3, 4, 5, 6];
    let number1 = parseInt(prompt("Podaj liczbę, którą chcesz dodać do tablicy: "));
    let number2 = parseInt(prompt("Podaj indx, w którym chcesz dodać liczbę: "));

    if (number2 >= 0 && number2 <= tab.length) { 
        tab.splice(number2, 0, number1); 
        alert("Tablica: " + tab);
    } else {
        alert("To nieprawidłowy indeks");
    }
}

zad2();



function zad3(num){
    let odwrcn ='';
    for (let i = num.length -1; i>= 0;i --){
        odwrcn+=num[i];
    }
    return odwrcn;

}

let ciągLiczb =prompt("Podaj ciąg liczb do odwrócenia:");
let odwroconyCiągLiczb = zad3(ciągLiczb);

console.log("Oryginalny ciąg liczb:", ciągLiczb);
console.log("Odwrócony ciąg liczb:", odwroconyCiągLiczb);


function zad4(){
    tablica = parseInt(prompt("Proszę podac długość tablicy:"));
    let random = [];
    for (let i = 0; i< tablica;i++){
        random.push(Math.floor(Math.random() * 100) +1);

    }
    document.getElementById("zad4").innerHTML = random;

}

function zad5() {
    let tab = [1, 2, 3, 4, 5, 6, 8];


    let sum = tab.reduce((a, b) => a + b, 0);
    console.log("a. Suma wartości:", sum);


    let liczbyParzyste = tab.filter(num => num % 2 === 0);
    console.log("b. Liczby parzyste:", liczbyParzyste);

   
    let pomnozone = tab.map(num => num * 3);
    console.log("c. Pomnożone wartości:", pomnozone);


    const studentId = 12345;
    tab.push(studentId);
    const indexOfStudentId = tab.indexOf(studentId);
    console.log(indexOfStudentId);


    const Średnia = sum / tab.length;
    console.log(Średnia);


    const max = Math.max(...tab);
    console.log(max);


    const a = 10;
    const x = tab.filter(num => num === x).length;
    console.log(a,x);
}

zad5();



function zad6(n) {
    let fib = [0, 1]; 
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let fib100 = zad6(100); 

console.log(fib100); 



function zad7(tab) { 
    if (tab.length < 2) {
            return "Tablica musi zawierać co najmniej dwie liczby";
    }
    tab.sort((a, b) => b - a);
    return tab[0] + tab[1];
}
let tab = [10, 20, 30, 40, 50];
console.log(zad7(tab)); 


function zad8(tablica) {
    function a(array){
        return array.filter((item,index) => array.indexOf(item) == index);
    }
   let arr =[1,2,3,4,51,2,1,2];
   let e = a(arr);
   console.log(e);


}

