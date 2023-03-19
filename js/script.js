//MAPS

// Zad 5.
// Zaprojektuj mapę, w której przechowywać będziesz pary imię : wiek_osoby. Pobierz z niej:

let people = new Map([
	['Marcel', '23'],
	['Paweł', '17'],
	['Anna', '22'],
])
people.set('Marcin', '35')
console.log(people)

// Tylko klucze

let peopleKeys = people.keys()
console.log(peopleKeys)

// Tylko wartości

let peopleValue = people.values()
console.log(peopleValue)

// Pary wszystkich elementów (kluczy i wartości)

let peopleEntries = people.entries()
console.log(peopleEntries)

// Te same operacje przeprowadź na zmiennej typu Object. Przedstaw 3 różne sposoby na tworzenie obiektu tego typu.

let cars1 = new Object({ car: 'Audi', model: 'a4', year: '2005', type: 'sedan' })
console.log(cars1)

let cars2 = { car: 'Audi', model: 'a4', year: '2005', type: 'sedan' }
console.log(cars2)

function cars3(car, model, year, type) {
	this.car = car
	this.model = model
	this.year = year
	this.type = type
}
let newCar = new cars3('Audi', 'a4', '2005', 'sedan')
console.log(newCar)

let carsKeys = Object.keys(cars1)
console.log(carsKeys)

let carValues = Object.values(cars1)
console.log(carValues)

let carEntries = Object.entries(cars1)
console.log(carEntries)

// Zad 6.
// Stwórz mapę, która będzie przechowywała 5 par: kluczami będą nazwy użytkowników (Dagger, Dev, JS-coder, Python-Coder, Mike), a wartości do nich przypisane - stringami reprezentującymi dowolne daty rejestracji w formacie DD-MM-YYYY.

let users = new Map([
	['Dagger', '22-09-1995'],
	['Dev', '12-02-1996'],
	['JS-coder', '25-09-1994'],
	['Python-Coder', '21-03-1895'],
	['Mike', '02-09-1990'],
])
console.log(users)

// Po inicjalizacji, dodaj do takiej listy 2 nowych użytkowników

users.set('Abcdef', '11-05-2012')
console.log(users)

users.set('DevOps', '11-04-2002')
console.log(users)
// Usuń dowolnego usera
users.delete('Dagger')
console.log(users)

// Wyświetl wszystkie daty przechowywane w mapie, ale w formacie DD/MM/YYYY (nie DD-MM-YYYY)

for (let [name, date] of users) {
	date = date.replace(/-/g, '/')
	users.set(name, date)
}

console.log(users)

// Usuń z mapy użytkownika o nickname JS-coder
users.delete('JS-coder')
console.log(users)

// Zad 7.
// Mając do dyspozycji poniższy zestaw informacji (jest to informacja o językach i ilości kursantów przypisanego do każdego z nich; zestaw ten umieść w Mapie)...

let students = new Map([
	['French:', 45],
	['Arabic: ', 25],
	['Spanish:', 24],
	['Russian:', 9],
	['Portuguese:', 9],
	['Dutch:', 8],
	['German:', 7],
	['Chinese:', 5],
	['Swahili:', 4],
	['Serbian:', 4],
	['English:', 91],
])

// … odczytaj nazwę państwa, z którym skojarzona jest największa ilość uczestników. Wykorzystaj forEach().

let countryMax = ''
let studentMax = 0

students.forEach(function (value, key) {
	if (value > studentMax) {
		studentMax = value
		countryMax = key
	}
})
console.log(countryMax.slice(0, -1))

// Zad 9.
// Utwórz zbiór uniqueNumbers i dodaj do niego następujące wartości:

// 1231112
// 1231113
// 1231114
// 1221112
// 1231119
// 1231112
// 1231114

let uniqueNumbers = new Set(['1231112', '1231113', '1231114'])

uniqueNumbers.add('1221112')
uniqueNumbers.add('1231119')
uniqueNumbers.add('1231112')
uniqueNumbers.add('1231114')
console.log(uniqueNumbers.size)
// Odczytaj jego rozmiar. Dlaczego jest on równy 5, a nie 7 (czyli ilości liczb, które umieściliśmy w zbiorze)?

// // Zad 10.
// Wykonaj poniższe operacje:
// Stwórz pusty zbiór.

let emptySet = new Set([])
console.log(emptySet)
// Stwórz zbiór składający się z liczb od 0 do 10 (użyj pętli)
for (let i = 0; i < 10; i++) {
	emptySet.add(i)
}
console.log(emptySet)

// Usuń element o wartości 5
emptySet.delete(5)
console.log(emptySet)

// Wyczyść zbiór
emptySet.clear()
console.log(emptySet)

// Stwórz drugi zbiór - składający się z 5 dowolnych nazw państw
let randomCountries = new Set([])
randomCountries.add('France')
randomCountries.add('Poland')
randomCountries.add('Deutschland')
randomCountries.add('England')
randomCountries.add('Belgium')

console.log(randomCountries)

// Stwórz mapę składającą się z kluczy - państw oraz wartości, czyli ilości liter każdego z państw

let newMap = new Map()
for (let country of randomCountries) {
	newMap.set(country, country.length)
}

console.log(newMap)

// Zad 11.
// Wygeneruj tablicę 1000 trójelementowych napisów składających się tylko z liter: ‘a’, ‘b’, ‘c’, ‘d’, ‘e’. Odczytaj rozmiar takiej tablicy. Następnie usuń z niej duplikaty i wyświetl wynik. Jak zmienił się rozmiar?

let letterArray = ['a', 'b', 'c', 'd', 'e']

function Letter() {
	return letterArray[Math.floor(Math.random() * letterArray.length)]
}

let newArray = []

for (let i = 0; i < 1000; i++) {
	let word = Letter() + Letter() + Letter()
	// console.log(word);
	newArray.push(word)
}

let newSet = Array.from(new Set(newArray))
// console.log(newSet.length);

console.log(`Rozmiar tablicy to: ${newArray.length}`)
console.log(`Rozmiar tablicy bez powtórzeń to: ${newSet.length}`)

// Zad. 13

// Twoim zadaniem jest napisać funkcję retrieve_seconds, która przyjmować będzie obiekt następującej postaci:

// first_case = {
//     ‘name’: ‘first_case’,
//     ‘created_task’: ‘2021-10-26T19:48:12+00:00’,
//     ‘end_task’: None
// },

// przykład innego obiektu:

// second_case = {
//     ‘name’: ‘second_case’,
//     ‘created_task’: ‘2021-09-26T19:48:12+00:00’,
//     ‘end_task’: ‘2021-10-26T19:48:12+00:00’
// }

// Funkcja zwracać będzie różnicę czasową między end_task a created_task podaną w sekundach.

function retrieve_seconds() {
	const createdTask = new Date('2021-10-26T19:48:12GMT+00:00')
	const endTask = new Date()
	console.log(endTask)

	const difference = Math.floor((endTask - createdTask) / 1000)
	console.log(difference)
}

retrieve_seconds()
