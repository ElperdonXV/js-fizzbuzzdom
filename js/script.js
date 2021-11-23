//Scrivi un programma che stampi in console i numeri da 1 a 100.
const container = document.querySelector('.container');
for (let index=1; index<=100; index++) {
    const element = document.createElement('div');
    console.dir(element);
    element.classList.add('box');
    if (index % 3 == 0 && index % 5 == 0) {
        console.log('FizzBuzz', index);
        element.append('FizzBuzz');
        element.classList.add("red");
    }
    else if (index % 3 == 0) {
        console.log('Fizz', index);
        element.append('Fizz');
        element.classList.add("green");
    }
    else if (index % 5 == 0){
        console.log('Buzz', index);
        element.append('Buzz');
        element.classList.add("yellow");
    }
    else element.append(index);

    container.append(element);

//MILESTONE 1
//Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//MILESTONE 2
//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

//MILESTONE 3
//Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


}