/*
I. Przeglądarka

Zadanie polega na napisaniu skryptu w JavaScript, który po kliknięciu w przycisk wygeneruje 20
losowych liczb całkowitych z zakresu od 1 do 100 i umieści je w dwóch kolumnach. W jednej
kolumnie mają znaleźć się tylko liczby parzyste, a w drugiej nieparzyste. Dodatkowo obie kolumny
muszą być posortowane rosnąco.
*/
const btnGenerateRandomNumber = document.getElementById('generateRandomNumber');
	let tabEven = [];
	let tabOdd = [];

btnGenerateRandomNumber.addEventListener("click", () => {
	generateRandomNumber();
	showTable();
	showTableOld();
		console.log(tabOdd);
		console.log(tabEven);
		removeTable();
		
});

//wygeneruj losow liczbe od 1 do 100
function generateRandomNumber(){
	for (let i = 0; i < 20; i++){
		let randomNumber = Math.floor(Math.random() * 100) + 1 ;
		(randomNumber % 2) ? tabOdd.push(randomNumber) : tabEven.push(randomNumber)  ;
	}
	tabOdd.sort(function(a, b){return a-b});
	tabEven.sort(function(a, b){return a-b});

}

function showTable(){

	for(let key in tabEven){
		let newElement = document.createElement('li');
		let newNumber = document.createTextNode(tabEven[key]);
		newElement.appendChild(newNumber);
		var position = document.getElementById('evenList');
		position.appendChild(newElement);
	}

	for(let key in tabOdd){
		let newElement = document.createElement('li');
		let newNumber = document.createTextNode(tabOdd[key]);
		newElement.appendChild(newNumber);
		var position = document.getElementById('oddList');
		position.appendChild(newElement);
	}	

}
//show the evenNumber and odd number in old version table TR
function showTableOld(){
	for(let key in tabEven){
		let newElement = document.createElement("TD");
		let newNumber = document.createTextNode(tabEven[key]);
		newElement.appendChild(newNumber);
		document.getElementById("tableEven").appendChild(newElement);
	}

	for(let key in tabOdd){
		let newElement = document.createElement("TD");
		let newNumber = document.createTextNode(tabOdd[key]);
		newElement.appendChild(newNumber);
		document.getElementById("tableOdd").appendChild(newElement);
	}

}

function removeTable(){
	tabEven = [];
	tabOdd = [];	
}






