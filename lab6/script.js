function zadani1(){
let ksiazka = {
    tytul: "Władca Pierścieni",
    autor: "J.R.R. Tolkien",
    rokWydania: 1954
    }
}
function informacja(ksiazka) {
    return `${ksiazka.tytul} - ${ksiazka.autor} (${ksiazka.rokWydania})`;
}
console.log(informacja(ksiazka)); 


function zadanie2(){
let student = {
    imie: firsName,
    nazwisko: lastName,
    numerAlbumu: nralbumu,
    oceny: {
        matematyka: 4.0,
        fizyka: 5,
        informatyka: 4
    }
}
};
function sredniaOcena(student) {
    let sumaOcen = 0;
    let iloscPrzedmiotow = 0;
    for (let przedmiot in student.oceny) {
        sumaOcen += student.oceny[przedmiot];
        iloscPrzedmiotow++;
    }
    let srednia = sumaOcen / iloscPrzedmiotow;
    return srednia;
}
console.log("Średnia ocen studenta:", sredniaOcena(student));
  

function zadanie3(){
    class Trojkat {
        constructor(wysokość, dlugośćPodstawy, nazwa) {
            this.wysokość = wysokość;
            this. dlugośćPodstawy=  dlugośćPodstawy;
            this.nazwa = nazwa;
        }
    
        obliczPole() {
            return 0.5 * this. dlugośćPodstawy* this.wysokość;
        }
    
        static porownajTrojkaty(trojkat1, trojkat2) {
            const pole1 = trojkat1.obliczPole();
            const pole2 = trojkat2.obliczPole();
            if (pole1 > pole2) {
                return trojkat1;
            } else if (pole2 > pole1) {
                return trojkat2;
            } else {
                return null;
            }
        }
    }
    
    const trojkatA = new Trojkat(5, 8, "Trójkąt a");
    const trojkatB = new Trojkat(4, 6, "Trójkąt b");
    const trojkatC = new Trojkat(7, 10, "Trójkąt c");
    
    console.log(`${trojkata.nazwa} - pole: ${trojkata.obliczPole()}`);
    console.log(`${trojkatb.nazwa} - pole: ${trojkat.obliczPole()}`);
    console.log(`${trojkatc.nazwa} - pole: ${trojkatc.obliczPole()}`);
    
    const wiekszyTrojkat = Trojkat.porownajTrojkaty(trojkatA, trojkatB);
    if (wiekszyTrojkat) {
        console.log(`Trójkąt z większym polem: ${wiekszyTrojkat.nazwa}`);
    } else {
        console.log("2 trójkąty mają takie same pole.");
    }
};

 function zadanie4() {
    class Trapez {
        constructor(wysokosc, podstawa1, podstawa2, nazwa) {
          this.wysokosc = wysokosc;
          this.podstawa1 = podstawa1;
          this.podstawa2 = podstawa2;
          this.nazwa = nazwa;
        }
      
        obliczPole() {
          return ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
        }
      
        zmienNazwe(nowaNazwa) {
          this.nazwa = nowaNazwa;
        }
      }
      
    
      const trapez1 = new Trapez(5, 4, 6, "Trapez A");
      const trapez2 = new Trapez(7, 3, 8, "Trapez B");
      const trapez3 = new Trapez(6, 5, 7, "Trapez C");
      
  
      console.log(trapez1.obliczPole());
      console.log(trapez2.obliczPole());
      console.log(trapez3.obliczPole()); 
      
     
      trapez1.zmienNazwe("Nowy Trapez");
      console.log(trapez1.nazwa); 
 }


 function zadanie5 (){
    class Triangle {
        constructor(base, height) {
            this.base = base;
            this.height = height;
        }
        calculateArea() {
            return (this.base * this.height) / 2;
             }
    }
    class Trapezoid {
        constructor(base1, base2, height) {
            this.base1 = base1;
            this.base2 = base2;
            this.height = height;
        }
        calculateArea() {
            return ((this.base1 + this.base2) * this.height) / 2;
        }
    }
    const triangle = new Triangle(1,2);
    const trapezoid = new Trapezoid(3, 4, 5);
    const triangleArea = triangle.calculateArea();
    const trapezoidArea = trapezoid.calculateArea();
    if (triangleArea > trapezoidArea) {
        console.log(`The triangle has a larger area: ${triangleArea}`);
    } else if (trapezoidArea > triangleArea) {
        console.log(`The trapezoid has a larger area: ${trapezoidArea}`);
    } else {
        console.log("Both figures have the same area.");
    }

}

 function zadanie6 {
 class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
    isSquare() {
      return this.width === this.height;
    }
  }
  function createRectangle() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(width) || isNaN(height)) {
      document.getElementById('info').innerText = 'Please enter valid dimensions.';
      return;
    }

  
    const rectangle = new Rectangle(width, height);
    const info = `Area: ${rectangle.getArea()}, Perimeter: ${rectangle.getPerimeter()}, Square: ${rectangle.isSquare() ? 'Yes' : 'No'}`;
    document.getElementById('info').innerText = info;
  }
  
};