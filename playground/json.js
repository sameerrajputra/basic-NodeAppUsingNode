/*
//	JSON STRINGIFY METHOD
var obj = {
	name: 'Sameer'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

//JSON PARSE METHOD

var personString = '{"name":"Sameer","age":21}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

*/

const fs = require('fs');

var originalNote = {
	title:'Some title',
	body:'Some body'
};

//Converting originalNote to string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

//Converting original Note to obj
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);