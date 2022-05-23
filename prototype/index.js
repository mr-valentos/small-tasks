function Csv() {
    this.name = 'valik';
   
}
// Csv.parse = function() { 
//     return console.log('hello');
// }
Csv.prototype.parse = function (str) {
    let	bigArrey = str.split(/\n/)
	let mainArrey = bigArrey.map((elem) => elem.split(/;/))
    return mainArrey
}
Csv.prototype.generate = function (arr) {
    let gen = arr.join('\n')
    return gen
}

let newObj = new Csv();

arrToParse = [
    ["Євпак Віктор Миколайович", "ФОП", "1985"],
    ["Бондаренко Анатолій Васильович", "міський голова", "1974"],
    ["Мойсієнко Василь Миколайович", "перший проректор", "1965"]
  ]
console.log(newObj.parse(`Євпак Віктор Миколайович;ФОП;1985
Бондаренко Анатолій Васильович;міський голова;1974
Мойсієнко Василь Миколайович;перший проректор;1965`))

console.log(newObj.generate(arrToParse))