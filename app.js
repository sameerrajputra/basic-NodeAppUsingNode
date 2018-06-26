/*
console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const os = require('os');

 var readNote = notes.addNote();
 var user = os.userInfo();

 console.log(readNote);
 fs.appendFile('greetings.txt', `Hello ${user.username}!I am ${notes.age} years old.`, function(err){
	if(err){
		console.log('An error is found.');
 	}

 });

 var mul = notes.add(9,-2);
console.log(mul);

console.log(_.isString(false));
console.log(_.isString('this is a string'));

var filteredArray = _.uniq([1,2,1,2,3,4,4,4]);
console.log(filteredArray);

*/

/////////////////////////////////////////////////////////////////////////////

// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = () => {
	return {
			describe: 'title of note',
			demand: true,
			alias: 't'
		}

};
var argv = yargs
	.command('add','Add a new note',{
		title: titleOptions(),
		body: {
			describe: 'Body of the note',
			demand: true,
			alias: 'b'
		}
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note',{
		title: titleOptions()
	})
	.command('remove', 'Remove a note', {
		title : titleOptions()
	})

	.help()
	.argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yarg: ', argv);

if(command === 'list'){
	var allNotes = notes.getAll();
	allNotes.forEach((note) => notes.logNote(note));

}else if(command === 'add'){

	var note = notes.addNote(argv.title,argv.body);
	console.log(note);
		if(note){
		console.log('Adding note');
		notes.logNote(note);
	}else{
		console.log('note exists');
	}



}else if(command === 'read'){
	var readNote = notes.getNote(argv.title);

	if(readNote){
		console.log('Reading note');
		notes.logNote(readNote);
	}else{
		console.log(`Note with the title  note found`);
	}

}else if(command = 'remove'){
	var note = notes.removeNote(argv.title);
	if(note){
		console.log('note not removed');
	}else{
		console.log('note removed');
	}

}else{
	console.log('Command not recognized');
}


