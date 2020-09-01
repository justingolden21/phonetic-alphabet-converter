const PHONETIC_CHARS = {
	A: 'Alfa',
	B: 'Bravo',
	C: 'Charlie',
	D: 'Delta',
	E: 'Echo',
	F: 'Foxtrot',
	G: 'Golf',
	H: 'Hotel',
	I: 'India',
	J: 'Juliett',
	K: 'Kilo',
	L: 'Lima',
	M: 'Mike',
	N: 'November',
	O: 'Oscar',
	P: 'Papa',
	Q: 'Quebec',
	R: 'Romeo',
	S: 'Sierra',
	T: 'Tango',
	U: 'Uniform',
	V: 'Victor',
	W: 'Whiskey',
	X: 'X-ray',
	Y: 'Yankee',
	Z: 'Zulu',
};
const PHONETIC_MISC = {
	' ': 'Space',
	'@': 'At',
	'.': 'Dot',
	'!': 'Exclamation Mark',
	'?': 'Question Mark',
	',': 'Comma',
	':': 'Colon',
	';': 'Semicolon',
	'/': 'Forward Slash',
	'\\': 'Back Slash',
	'_': 'Underscore',
	'-': 'Dash',
	'+': 'Plus Sign',
	'=': 'Equals Sign',
	'(': 'Open Parentheses',
	')': 'Close Parentheses',
	'[': 'Open Square Bracket',
	']': 'Close Square Bracket',
	'{': 'Open Curly Bracket',
	'}': 'Close Curly Bracket',
	'|': 'Vertical Bar',
	'#': 'Pound',
	'$': 'Dollar Sign',
	'%': 'Percent Sign',
	'^': 'Caret',
	'&': 'Ampersand',
	'*': 'Asterisk',
	'\'': 'Single Quote',
	'"': 'Double Quote',
	'`': 'Backtick',
	'~': 'Tilde',
	'1': 'One',
	'2': 'Two',
	'3': 'Three',
	'4': 'Four',
	'5': 'Five',
	'6': 'Six',
	'7': 'Seven',
	'8': 'Eight',
	'9': 'Nine',
	'0': 'Zero',
};

function phonetic(text) {
	let rtn = '';
	let spacer = ' - ';
	let checked = $('#checkbox').is(':checked');
	for(let i=0; i<text.length; i++) {
		let letter = text[i].toUpperCase();
		if(letter in PHONETIC_CHARS) {
			rtn += '<b>' + PHONETIC_CHARS[letter] + '</b>' + spacer;
		}
		else if(letter in PHONETIC_MISC && checked) {
			rtn += '<i>' + PHONETIC_MISC[letter] + '</i>' + spacer;
		}
		else {
			rtn += letter + spacer;
		}
	}
	return rtn;
}

$( ()=> {
	$('#input, #checkbox').change( ()=> {
		$('#output').html(phonetic($('#input').val() ) );
	}).change();

	$('#input').click( ()=> $('#input').select() ).click();

	// build quick reference table
	let tableHTML = '';
	$.each(PHONETIC_CHARS, ( (key, val)=> tableHTML += `<tr><th>${key}</th><td>${val}</td></tr>`) );
	$('#table').html(tableHTML);

	$('#download').click( ()=> {
		let a = $('<a>')
			.attr('href', 'img/table.png')
			.attr('download', 'img.png')
			.appendTo('body');
		a[0].click();
		a.remove();
	});
});

// window.onkeyup = function(e) {
// 	let key = e.keyCode ? e.keyCode : e.which;
// }
